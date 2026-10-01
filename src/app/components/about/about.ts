import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ValueCard {
  step: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styles: []
})
export class AboutPage {
  stats = [
    { value: '2024', label: 'Year Founded' },
    { value: '50+', label: 'Engineers & Designers' },
    { value: '99.9%', label: 'Platform Reliability' },
    { value: '100%', label: 'Agile Delivery' }
  ];

  values: ValueCard[] = [
    {
      step: '01',
      title: 'Simplicity First',
      description: 'We cut through unnecessary technical complexity to deliver intuitive, resilient systems that drive adoption.'
    },
    {
      step: '02',
      title: 'Architectural Rigor',
      description: 'Clean code, strict type-safety, and modular architectures designed to scale from day one.'
    },
    {
      step: '03',
      title: 'Transparent Collaboration',
      description: 'Direct communication, continuous deployment feedback loops, and zero hidden assumptions.'
    },
    {
      step: '04',
      title: 'Client-Centric Impact',
      description: 'We measure our engineering milestones by real, measurable business outcomes and operational savings.'
    }
  ];

  team: TeamMember[] = [
    {
      name: 'Engineering Leadership',
      role: 'Platform Architecture & Cloud Services',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'Product & Design',
      role: 'Enterprise Systems & UX Research',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'DevOps & Reliability',
      role: 'Security, Infrastructure & Scale',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80'
    },
    {
      name: 'Client Solutions',
      role: 'Delivery Management & Consulting',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80'
    }
  ];
}