import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  iconType: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.html', // change to './solutions.component.html' if that matches your filename
  styles: []
})
export class SolutionsComponent {
  services: ServiceItem[] = [
    {
      iconType: 'cloud',
      title: 'SaaS Development',
      description: 'Build scalable cloud products that grow with your business.'
    },
    {
      iconType: 'code',
      title: 'Custom Software',
      description: 'Tailored solutions for your unique business needs.'
    },
    {
      iconType: 'mobile',
      title: 'Web & Mobile',
      description: 'Modern, responsive and high-performing applications.'
    },
    {
      iconType: 'server',
      title: 'Cloud & DevOps',
      description: 'Reliable infrastructure for better performance and scale.'
    },
    {
      iconType: 'ai',
      title: 'AI & Automation',
      description: 'Intelligent solutions to boost productivity.'
    },
    {
      iconType: 'api',
      title: 'Integration & APIs',
      description: 'Connect your systems, data and workflows.'
    }
  ];
}