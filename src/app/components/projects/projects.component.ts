import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden dark:text-gray-100">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:hidden"></div>
      <div class="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="container mx-auto px-5 relative z-10">
        <h2 class="text-5xl font-bold text-center mb-16 text-primary-700 relative pb-6 animate-fade-in-up">
          Projects
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-700 to-primary-400 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects; let i = index" 
               class="group bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden transform hover:-translate-y-3 animate-fade-in-up border border-gray-100 dark:border-white/10"
               [class.border-2]="project.featured"
               [class.border-primary-500]="project.featured"
               [class.ring-4]="project.featured"
               [class.ring-primary-200]="project.featured"
               [style.animation-delay.ms]="i * 100">
            <div class="relative h-48 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              <svg class="w-20 h-20 text-white relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <div *ngIf="project.featured" class="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                ⭐ Featured
              </div>
            </div>
            <div class="p-6 flex flex-col flex-grow relative">
              <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-50/50 to-transparent rounded-full blur-2xl -translate-y-12 translate-x-12"></div>
              <div class="relative z-10">
                <h3 class="text-2xl font-bold bg-gradient-to-r from-primary-700 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-5 flex-grow leading-relaxed">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-5">
                  <span *ngFor="let tech of project.technologies" 
                        class="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-white/10">
                    {{ tech }}
                  </span>
                </div>
                <div class="flex gap-3 mt-auto">
                  <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" 
                     class="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 dark:bg-slate-800/70 text-primary-700 dark:text-primary-200 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 transition-all duration-300 active:scale-95">
                    <svg class="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    GitHub
                  </a>
                  <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank" 
                     class="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-700 to-primary-600 text-white rounded-xl font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                    <svg class="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and Tailwind CSS, showcasing my projects and skills.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'SCSS'],
      githubUrl: 'https://github.com/AshaneAlvis/ashane-portfolio',
      liveUrl: 'https://ashane-portfolio.vercel.app/',
      featured: true
    },
    {
      title: 'Beagel Enterprise Demo',
      description: 'Currently working on this enterprise real estate platform focused on lead management, listings, and customer engagement workflows.',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'SignalR', 'Azure DevOps'],
      liveUrl: 'https://enterprisedemo.beagel.io/',
      featured: false
    }
    // Add more projects as needed
  ];
}
