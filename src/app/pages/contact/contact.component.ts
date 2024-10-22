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
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone_no: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service_type: ['', Validators.required]
     
    });
  }
 
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post('https://www.techxle.org/formAcition/contact-us', formData)
        .subscribe(
          (response) => {
            console.log('Form submitted successfully', response);
            this.successMessage = 'Your message has been sent successfully!';
            this.contactForm.reset();  
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