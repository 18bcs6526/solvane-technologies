import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html'
})
export class ProcessComponent {
  whyUs = [
    { icon: '🎯', title: 'Client Focused', desc: 'Your success is our priority.' },
    { icon: '⚡', title: 'Scalable Solutions', desc: 'Built for today, ready for tomorrow.' },
    { icon: '👥', title: 'Expert Team', desc: 'Skilled, Passionate, Committed.' },
    { icon: '👁️', title: 'Transparent Process', desc: 'Clear communication, no surprises.' }
  ];
  steps = [
    { title: 'Discover', desc: 'Understand your goals and challenges.' },
    { title: 'Plan', desc: 'Design the right solution for your needs.' },
    { title: 'Build', desc: 'Develop with quality and best practices.' },
    { title: 'Launch', desc: 'Support your growth beyond delivery.' }
  ];
}