// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ContactService } from '../../services/contact.service'; // Ensure this service exists from our backend setup

// @Component({
//   selector: 'app-contact-page',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './contact-page.html'
// })
// export class ContactPageComponent {
//   contactForm: FormGroup;
//   isSubmitting = false;
//   submitSuccess = false;
//   errorMessage = '';

//   constructor(
//     private fb: FormBuilder, 
//     private contactService: ContactService
//   ) {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       company: [''],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', [Validators.required, Validators.pattern(/^[+0-9\s-]{7,15}$/)]],
//       requirement: ['', Validators.required],
//       budget: ['', Validators.required],
//       message: ['', [Validators.required, Validators.minLength(10)]]
//     });
//   }

//  onSubmit() {
//     if (this.contactForm.invalid) {
//       this.contactForm.markAllAsTouched();
//       return;
//     }

//     this.isSubmitting = true;
//     this.errorMessage = '';
//     this.submitSuccess = false;

//     this.contactService.submitLead(this.contactForm.value).subscribe({
//       // 1. Removed the unused 'response' parameter by leaving the parentheses empty
//       next: () => {
//         this.isSubmitting = false;
//         this.submitSuccess = true;
//         this.contactForm.reset();
        
//         // Hide success message after 5 seconds
//         setTimeout(() => this.submitSuccess = false, 5000);
//       },
//       // 2. Added explicit 'any' or 'Error' type to the error parameter
//       error: (err: any) => {
//         this.isSubmitting = false;
//         this.errorMessage = 'Failed to connect to the server. Please try again later.';
//         console.error('API Error:', err);
//       }
//     });
//   }
//   }
