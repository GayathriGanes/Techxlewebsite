import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() serviceType: string = 'Power Platform Development'; // Default service type
  @Input() showBanner: boolean = true; // Controls whether the banner and background color are shown
  @Output() formSubmitted = new EventEmitter<any>(); 
  contactForm: FormGroup; 
  successMessage: string = ''; 
  errorMessage: string = ''; 
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service_type: ['', Validators.required] 
    });
  }
  ngOnInit() {
    this.contactForm.patchValue({ service_type: this.serviceType });
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
            this.contactForm.patchValue({ service_type: this.serviceType }); 
            this.formSubmitted.emit(formData); 
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

