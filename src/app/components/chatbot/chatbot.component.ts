import { Component, OnInit, OnDestroy, AfterViewChecked, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatbotService, ChatMessage, ChatAction } from '../../services/chatbot.service';

export interface FestiveMode {
  id: 'diwali' | 'christmas' | 'newyear';
  name: string;
  badge: string;
  greeting: string;
  teaser: string;
  image: string;
  auraClass: string;
  sparkleEmoji: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('queryInput') private queryInput?: ElementRef<HTMLInputElement>;

  isOpen = false;
  isMinimized = false;
  userInput = '';
  isTyping = false;
  hasUnread = true;
  showTeaser = true;
  messages: ChatMessage[] = [];
  quickSuggestions: string[] = [];

  // Festive animation modes (Diwali, Christmas, New Year)
  readonly festiveModes: FestiveMode[] = [
    {
      id: 'diwali',
      name: 'Diwali Mode',
      badge: '🪔 Happy Diwali!',
      greeting: 'Happy Diwali! Ask Techxle AI',
      teaser: 'Happy Diwali! Explore Techxle AI solutions.',
      image: 'assets/images/bot-diwali.png',
      auraClass: 'aura-diwali',
      sparkleEmoji: '✨'
    },
    {
      id: 'christmas',
      name: 'Christmas Mode',
      badge: '🎄 Merry Christmas!',
      greeting: 'Merry Christmas! Ask Techxle AI',
      teaser: 'Merry Christmas! Ready to help you with Techxle.',
      image: 'assets/images/bot-christmas.png',
      auraClass: 'aura-christmas',
      sparkleEmoji: '❄️'
    },
    {
      id: 'newyear',
      name: 'New Year Mode',
      badge: '🎉 Happy New Year 2027!',
      greeting: 'Happy New Year! Ask Techxle AI',
      teaser: 'Happy New Year 2027! Explore our AI solutions.',
      image: 'assets/images/bot-newyear.png',
      auraClass: 'aura-newyear',
      sparkleEmoji: '🎊'
    }
  ];

  currentModeIndex = 0;
  private modeIntervalTimer: any = null;
  private isModePaused = false;

  get currentFestiveMode(): FestiveMode {
    return this.festiveModes[this.currentModeIndex];
  }

  private needsScroll = false;
  private readonly STORAGE_KEY = 'techxle_chatbot_conversation_v1';

  constructor(
    private chatbotService: ChatbotService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.quickSuggestions = this.chatbotService.getQuickSuggestions();
    this.loadHistory();

    if (typeof window !== 'undefined') {
      this.startModeCycle();

      // Auto-hide the teaser after 10 seconds if not interacted
      setTimeout(() => {
        this.showTeaser = false;
      }, 10000);
    }
  }

  startModeCycle(): void {
    if (typeof window === 'undefined') {
      return;
    }
    if (this.modeIntervalTimer) {
      clearInterval(this.modeIntervalTimer);
    }
    // Slowly change the 3 festive modes repeatedly every 5.5 seconds
    this.modeIntervalTimer = setInterval(() => {
      if (!this.isModePaused) {
        this.currentModeIndex = (this.currentModeIndex + 1) % this.festiveModes.length;
      }
    }, 5500);
  }

  pauseModeCycle(): void {
    this.isModePaused = true;
  }

  resumeModeCycle(): void {
    this.isModePaused = false;
  }

  setMode(index: number, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.currentModeIndex = index % this.festiveModes.length;
  }

  ngOnDestroy(): void {
    if (this.modeIntervalTimer) {
      clearInterval(this.modeIntervalTimer);
      this.modeIntervalTimer = null;
    }
  }

  ngAfterViewChecked(): void {
    if (this.needsScroll) {
      this.scrollToBottom();
      this.needsScroll = false;
    }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    this.showTeaser = false;
    if (this.isOpen) {
      this.hasUnread = false;
      this.isMinimized = false;
      this.needsScroll = true;
      setTimeout(() => {
        this.queryInput?.nativeElement?.focus();
      }, 200);
    }
  }

  minimizeChat(event: MouseEvent): void {
    event.stopPropagation();
    this.isMinimized = !this.isMinimized;
  }

  closeChat(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.isOpen = false;
    this.isMinimized = false;
  }

  dismissTeaser(event: MouseEvent): void {
    event.stopPropagation();
    this.showTeaser = false;
  }

  sendMessage(textToSend?: string): void {
    const query = (textToSend !== undefined ? textToSend : this.userInput).trim();
    if (!query || this.isTyping) {
      return;
    }

    // User message
    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date()
    };
    this.messages.push(userMsg);
    this.userInput = '';
    this.isTyping = true;
    this.needsScroll = true;
    this.saveHistory();

    // Bot response
    this.chatbotService.askQuestion(query).subscribe({
      next: (botMsg) => {
        this.isTyping = false;
        this.messages.push(botMsg);
        this.needsScroll = true;
        this.saveHistory();
      },
      error: () => {
        this.isTyping = false;
        this.messages.push({
          id: 'err-' + Date.now(),
          sender: 'bot',
          text: 'I apologize, but I encountered an issue processing your request. Please try again or visit our [Contact Page](/contact-us).',
          timestamp: new Date(),
          actions: [{ label: 'Go to Contact Page', route: '/contact-us', type: 'route' }]
        });
        this.needsScroll = true;
        this.saveHistory();
      }
    });
  }

  handleAction(action: ChatAction): void {
    if (action.type === 'route' && action.route) {
      this.router.navigateByUrl(action.route);
      // On mobile we can optionally close, or leave open
    } else if (action.type === 'link' && action.url) {
      window.open(action.url, '_blank');
    } else if (action.type === 'query' && action.query) {
      this.sendMessage(action.query);
    }
  }

  selectSuggestion(suggestion: string): void {
    this.sendMessage(suggestion);
  }

  clearChat(): void {
    this.messages = [this.chatbotService.getGreetingMessage()];
    this.saveHistory();
    this.needsScroll = true;
  }

  formatMessageText(text: string): SafeHtml {
    if (!text) return '';

    // Convert markdown to HTML safely
    let formatted = text
      // Escape HTML entities first
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Bold **text**
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic *text*
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Markdown links [text](url)
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-inline-link">$1</a>')
      // Bullet lists
      .replace(/^\s*-\s+(.*)$/gm, '<li>$1</li>')
      // Numbered lists
      .replace(/^\s*(\d+)\.\s+(.*)$/gm, '<li><strong>$1.</strong> $2</li>');

    // Wrap list items
    formatted = formatted.replace(/(<li>.*<\/li>)/gms, '<ul class="chat-bubble-list">$1</ul>');

    // Convert newlines to breaks (avoid double br inside ul)
    formatted = formatted.replace(/\n\n/g, '<br/><br/>').replace(/\n/g, '<br/>');

    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }

  private scrollToBottom(): void {
    try {
      if (this.scrollContainer?.nativeElement) {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
    } catch (e) {
      // safe fallback
    }
  }

  private saveHistory(): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        // Save last 25 messages
        const trimmed = this.messages.slice(-25);
        window.sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(trimmed));
      }
    } catch (e) {
      // sessionStorage might be restricted
    }
  }

  private loadHistory(): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        const saved = window.sessionStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.messages = parsed.map(m => ({
              ...m,
              timestamp: new Date(m.timestamp)
            }));
            this.hasUnread = false;
            return;
          }
        }
      }
    } catch (e) {
      // fallback
    }

    // Default welcome
    this.messages = [this.chatbotService.getGreetingMessage()];
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePressed(): void {
    if (this.isOpen) {
      this.closeChat();
    }
  }
}
