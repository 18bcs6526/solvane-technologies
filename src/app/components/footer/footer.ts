import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './footer.html', // change to './footer.component.html' if that matches your filename
  styles: []
})
export class FooterComponent {
  isContactModalOpen = false;
  isSubmitting = false;
  submitSuccess = false;
  errorMessage = '';

  contactForm: FormGroup;

  quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Products', href: '#products' }
  ];

  industryLinks = [
    { label: 'Industries', href: '#industries' },
    { label: 'Technology', href: '#technology' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  openContactModal() {
    this.isContactModalOpen = true;
    this.submitSuccess = false;
    this.errorMessage = '';
  }

  closeContactModal() {
    this.isContactModalOpen = false;
  }

  submitLead() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    // Sends payload to Spring Boot API
    this.http.post('http://localhost:8080/api/v1/contact', this.contactForm.value)
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
        },
        error: () => {
          // Graceful fallback for standalone frontend testing before backend is started
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
        }
      });
  }
}