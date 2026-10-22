import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Define the exact shape of your data based on your template variables
export interface ContactRequest {
  name: string;
  phone_no: string;
  email: string;
  service_type: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {

  // Point this to your PHP file location
  private phpUrl = 'https://techxl.org/sendEmail.php';

  constructor(private http: HttpClient) {}

  submitContactForm(formData: ContactRequest) {
    return this.http.post(this.phpUrl, formData);
  }
}
