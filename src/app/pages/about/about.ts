import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html'
})
export class AboutPage {
  values = [
    { icon: '🧠', title: 'Engineering Excellence', desc: 'We do not compromise on code quality, architecture, or performance.' },
    { icon: '🤝', title: 'Radical Transparency', desc: 'Honest timelines, clear communication, and no hidden technical debt.' },
    { icon: '🚀', title: 'Impact Driven', desc: 'We measure success by the business value our software creates.' }
  ];

  leaders = [
    { name: 'Priyanshu Prasad', role: 'Founder & Chief Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Sarah Jenkins', role: 'Head of Product', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    { name: 'David Chen', role: 'VP of Engineering', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' }
  ];
}