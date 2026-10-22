import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactRequest, ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  captchaNum1: number = 0;
  captchaNum2: number = 0;
  private captchaAnswer: number = 0;

  constructor(private fb: FormBuilder, private http: HttpClient, private contactservice: ContactService) {
    this.generateCaptcha();
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone_no: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service_type: ['', Validators.required],
      captcha: ['', [Validators.required, this.captchaValidator()]]
    });
  }

  generateCaptcha(): void {
    this.captchaNum1 = Math.floor(Math.random() * 9) + 1;
    this.captchaNum2 = Math.floor(Math.random() * 9) + 1;
    this.captchaAnswer = this.captchaNum1 + this.captchaNum2;
  }

  captchaValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = parseInt(control.value, 10);
      return value === this.captchaAnswer ? null : { captchaWrong: true };
    };
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { captcha, ...formData } = this.contactForm.value;
    this.isLoading = true;
    this.contactservice.submitContactForm(formData as ContactRequest).subscribe({
      next: (res) => {
        console.log('Emails sent successfully!', res);
        this.successMessage = 'Your enquiry has been sent successfully!';
        this.errorMessage = '';
        this.isLoading = false;
        this.contactForm.reset();
        this.generateCaptcha();
      },
      error: (err) => {
        console.error('Failed to send emails', err);
        this.errorMessage = 'Failed to send your enquiry. Please try again.';
        this.successMessage = '';
        this.isLoading = false;
        this.generateCaptcha();
        this.contactForm.get('captcha')?.setValue('');
        this.contactForm.get('captcha')?.updateValueAndValidity();
      }
    });
  }
}
