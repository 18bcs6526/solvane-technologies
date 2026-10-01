import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactLead {
  name: string;
  company?: string;
  email: string;
  phone: string;
  requirement: string;
  budget: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // This points to your Spring Boot local development server
  //private apiUrl = 'http://localhost:8080/api/v1/contact';
private apiUrl = 'https://solvane-backend-1.onrender.com';
  constructor(private http: HttpClient) {}

  submitLead(lead: ContactLead): Observable<string> {
    // We expect a plain text response from the Spring Boot controller
    return this.http.post(this.apiUrl, lead, { responseType: 'text' });
  }
}