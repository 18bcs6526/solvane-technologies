import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { SolutionsComponent } from './components/solutions/solutions';
import { ProductComponent } from './components/product/product';
import { IndustriesComponent } from './components/industries/industries';
import { ProcessComponent } from './components/process/process';
import { FooterComponent } from './components/footer/footer';
import { AboutPage } from './components/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    SolutionsComponent, 
    ProductComponent,
    IndustriesComponent,
    ProcessComponent,
    AboutPage,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-[#070b14] selection:bg-blue-600 selection:text-white">
      <app-navbar></app-navbar>
      <main>
        <app-hero></app-hero>
        <app-solutions></app-solutions>
        <app-product></app-product>
        <app-about></app-about>
        <app-industries></app-industries>
        <app-process></app-process>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class App {}