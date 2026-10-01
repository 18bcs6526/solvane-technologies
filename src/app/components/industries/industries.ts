import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.html',
  styles: [`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`]
})
export class IndustriesComponent {
  industries = [
    { title: 'Manufacturing', icon: '🏭', img: 'https://images.unsplash.com/photo-1565347878219-5af1c21c6df8?w=400&q=80', desc: 'Streamline production, inventory and operations.' },
    { title: 'Retail', icon: '🏬', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80', desc: 'Enhance sales, stock and customer management.' },
    { title: 'Agriculture & Food', icon: '🌾', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80', desc: 'Digital solutions for procurement, processing and distribution.' },
    { title: 'Logistics', icon: '🚚', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=400&q=80', desc: 'Track, manage and deliver with efficiency.' },
    { title: 'Professional Services', icon: '🏢', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80', desc: 'Automate workflows, projects and teams.' }
  ];
}