import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html'
})
export class ProductComponent {
  modules = [
    { name: 'Accounting', icon: '📊' },
    { name: 'Inventory', icon: '📦' },
    { name: 'Sales', icon: '🛒' },
    { name: 'Purchase', icon: '🛍️' },
    { name: 'Reports', icon: '📈' },
    { name: 'GST', icon: '🧾' }
  ];
}