import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  tags: string[];
}

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './careers.html'
})
export class CareersPage {
  activeCategory: string = 'all';
  selectedJob: JobPosition | null = null;
  isApplyModalOpen = false;
  isSubmitting = false;
  submitSuccess = false;

  applyForm: FormGroup;

  benefits: Benefit[] = [
    {
      icon: '🚀',
      title: 'High Engineering Autonomy',
      desc: 'Take direct ownership of architecture, features, and deployment pipelines with minimal red tape.'
    },
    {
      icon: '💻',
      title: 'Modern Hardware & Tooling',
      desc: 'Top-tier development rigs, cloud dev environments, and licenses for any tool that enhances productivity.'
    },
    {
      icon: '🌱',
      title: 'Learning & Certifications',
      desc: 'Dedicated annual stipend for cloud certifications (AWS, GCP), technical conferences, and books.'
    },
    {
      icon: '⚖️',
      title: 'Hybrid & Flexible Schedules',
      desc: 'Results-oriented culture that respects work-life harmony and flexible remote working arrangements.'
    }
  ];

  jobs: JobPosition[] = [
    {
      id: 'job-1',
      title: 'Senior Java / Spring Boot Backend Engineer',
      department: 'Platform Engineering',
      category: 'engineering',
      location: 'Bengaluru, India (Hybrid)',
      experience: '4 - 7 Years',
      type: 'Full-time',
      description: 'Design distributed microservices, scale transactional databases, and engineer resilient messaging pipelines using Spring Boot and Apache Kafka.',
      tags: ['Java 21', 'Spring Boot 3', 'Kafka', 'MongoDB', 'Docker']
    },
    {
      id: 'job-2',
      title: 'Lead Frontend Engineer (Angular & Tailwind)',
      department: 'Frontend Systems',
      category: 'engineering',
      location: 'Bengaluru, India (Hybrid)',
      experience: '3 - 6 Years',
      type: 'Full-time',
      description: 'Craft responsive, pixel-accurate web applications, dashboard interfaces, and shared component libraries using Angular Standalone architecture.',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'WebSockets']
    },
    {
      id: 'job-3',
      title: 'Cloud DevOps & Platform Reliability Engineer',
      department: 'Infrastructure & Ops',
      category: 'devops',
      location: 'Bengaluru / Remote',
      experience: '3 - 5 Years',
      type: 'Full-time',
      description: 'Manage automated CI/CD deployment pipelines, infrastructure as code with Terraform, container orchestration, and real-time observability.',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus']
    },
    {
      id: 'job-4',
      title: 'Product Designer (UI/UX)',
      department: 'Product Design',
      category: 'design',
      location: 'Bengaluru, India',
      experience: '2 - 5 Years',
      type: 'Full-time',
      description: 'Design clean, intuitive enterprise user interfaces, interactive mockups, and cohesive design systems for the Solvane Business Suite.',
      tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research']
    }
  ];

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+0-9\s-]{7,15}$/)]],
      portfolioUrl: ['', Validators.required],
      experienceYears: ['', Validators.required],
      coverNote: ['']
    });
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  get filteredJobs(): JobPosition[] {
    if (this.activeCategory === 'all') {
      return this.jobs;
    }
    return this.jobs.filter(j => j.category === this.activeCategory);
  }

  openApplyModal(job: JobPosition) {
    this.selectedJob = job;
    this.isApplyModalOpen = true;
    this.submitSuccess = false;
  }

  closeApplyModal() {
    this.isApplyModalOpen = false;
    this.selectedJob = null;
    this.applyForm.reset();
  }

  submitApplication() {
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    
    // Simulates an immediate UI response for the application submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.applyForm.reset();
    }, 1200);
  }
}