import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('player') player!: ElementRef<HTMLVideoElement>;

  videoUrl: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const demoKey = params.get('demoKey');

      this.http.get<any>('assets/video-files.json').subscribe(json => {
        const file = demoKey ? json[demoKey] : null;
        this.videoUrl = file ? `assets/${file}` : null;
      });
    });
  }
}