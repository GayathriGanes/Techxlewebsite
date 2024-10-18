import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
 
  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form with form controls and validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(13), Validators.pattern("^[0-9]*$")]],
      serviceType: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
 
  onSubmit() {
    if (this.contactForm.valid) {
      // Get form data
      const formData = this.contactForm.value;
 
      // Send HTTP POST request
      this.http.post('https://www.techxle.org/formAcition/contact-us', formData)
        .subscribe(
          (response) => {
            console.log('Form submitted successfully', response);
            this.successMessage = 'Your message has been sent successfully!';
            this.contactForm.reset();  // Reset the form after submission
          },
          (error) => {
            console.error('Error occurred while submitting the form', error);
            this.errorMessage = 'There was an error sending your message. Please try again.';
          }
        );
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
 
 
}