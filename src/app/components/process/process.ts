import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ValuePillar {
  title: string;
  desc: string;
  icon: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html', // change to './process.component.html' if that matches your filename
  styles: []
})
export class ProcessComponent {
  pillars: ValuePillar[] = [
    {
      title: 'Client Focused',
      desc: 'Understand your goals. Your success is our priority.',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    },
    {
      title: 'Scalable Solutions',
      desc: 'Built for today, ready for tomorrow.',
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
    },
    {
      title: 'Expert Team',
      desc: 'Skilled. Passionate. Committed.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Transparent Process',
      desc: 'Clear communication, no surprises.',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    }
  ];

  steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand your goals and challenges.'
    },
    {
      step: '02',
      title: 'Plan',
      description: 'Design the right solution for your needs.'
    },
    {
      step: '03',
      title: 'Build',
      description: 'Develop with quality and best practices.'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Support your growth beyond delivery.'
    }
  ];
}