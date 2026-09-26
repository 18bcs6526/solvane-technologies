import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html', // change to './hero.component.html' if that matches your file name
  styles: []
})
export class HeroComponent {
  stats: StatItem[] = [
    { value: '0+', label: 'Projects Delivered' },
    { value: '0+', label: 'Happy Clients' },
    { value: '99.9%', label: 'Uptime & Reliability' }
  ];

  dashboardMetrics = [
    { label: 'Business Growth', value: '₹ 2,46,500', change: '+18.2%', isPositive: true },
    { label: 'Active Users', value: '1,148', change: '+8.4%', isPositive: true },
    { label: 'Efficiency', value: '99.4%', change: '+2.1%', isPositive: true }
  ];

  recentActivities = [
    { text: 'Invoice generated #8429', time: '2m ago' },
    { text: 'New client onboarded', time: '14m ago' },
    { text: 'System backup completed', time: '1h ago' }
  ];
}