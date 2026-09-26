import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IndustryItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.html', // change to './industries.component.html' if that matches your filename
  styles: []
})
export class IndustriesComponent {
  industries: IndustryItem[] = [
    {
      title: 'Manufacturing',
      description: 'Streamline production, inventory and operations.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Retail',
      description: 'Enhance sales, stock and customer management.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Agriculture & Food',
      description: 'Digital solutions for procurement, processing and distribution.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Logistics',
      description: 'Track, manage and deliver with efficiency.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Professional Services',
      description: 'Automate workflows, projects and teams.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80'
    }
  ];
}