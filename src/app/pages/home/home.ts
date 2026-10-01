import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { SolutionsComponent } from '../../components/solutions/solutions';
import { ProductComponent } from '../../components/product/product';
import { IndustriesComponent } from '../../components/industries/industries';
import { ProcessComponent } from '../../components/process/process';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SolutionsComponent,
    ProductComponent,
    IndustriesComponent,
    ProcessComponent
  ],
  templateUrl: './home.html'
})
export class HomePage {}