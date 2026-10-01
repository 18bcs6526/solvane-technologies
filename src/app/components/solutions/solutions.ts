import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.html'
})
export class SolutionsComponent {
  solutions = [
    { icon: '☁️', title: 'SaaS Development', desc: 'Build scalable cloud products that grow with your business.' },
    { icon: '💻', title: 'Custom Software', desc: 'Tailored solutions for your unique business needs.' },
    { icon: '📱', title: 'Web & Mobile', desc: 'Modern, responsive and high-performing applications.' },
    { icon: '⚙️', title: 'Cloud & DevOps', desc: 'Reliable infrastructure for better performance and scale.' },
    { icon: '🤖', title: 'AI & Automation', desc: 'Intelligent solutions to boost productivity.' },
    { icon: '🔗', title: 'Integration & APIs', desc: 'Connect your systems, data and workflows.' }
  ];
}