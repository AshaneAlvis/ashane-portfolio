import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden dark:text-gray-100">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:hidden"></div>
      <div class="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="container mx-auto px-5 relative z-10">
        <h2 class="text-5xl font-bold text-center mb-16 text-primary-700 relative pb-6 animate-fade-in-up">
          Experience
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-700 to-primary-400 rounded-full"></span>
        </h2>
        <div class="max-w-5xl mx-auto space-y-8">
          <div *ngFor="let exp of experiences; let i = index" 
               class="group bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-primary-700 transform hover:-translate-y-2 relative overflow-hidden animate-fade-in-up border border-white/40 dark:border-white/10"
               [style.animation-delay.ms]="i * 100">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
            <div class="relative z-10">
              <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 class="text-3xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                    {{ exp.title }}
                  </h3>
                <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                    <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <span class="font-medium">{{ exp.company }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-full font-semibold text-sm shadow-md border border-primary-200/50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{{ exp.period }}</span>
                </div>
              </div>
              <div class="border-t border-gray-200/50 dark:border-white/10 pt-6">
                <ul class="list-none space-y-3 mb-6">
                  <li *ngFor="let desc of exp.description" class="flex items-start gap-3 text-gray-700 dark:text-gray-300 group/item">
                    <span class="text-primary-600 font-bold mt-1 text-lg group-hover/item:scale-125 transition-transform duration-300">▸</span>
                    <span class="leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{{ desc }}</span>
                  </li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of exp.technologies" 
                        class="px-4 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-white/10">
                    {{ tech }}
                  </span>
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
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Beagel (Remote – Contract)',
      period: 'Jan 2024 – Present',
      description: [
        'Leading the design and development of full-stack features for Beagel Enterprise and BeagelBid applications',
        'Working on scalable software infrastructure and performance optimization using .NET Core 8, Angular 17, and Azure DevOps CI/CD',
        'Implemented advanced functionalities such as lead nurturing automation, real-time bidding interfaces, and localization systems',
        'Collaborated with cross-functional teams to enhance the platform\'s usability and maintainability'
      ],
      technologies: ['.NET Core 8', 'Angular 17', 'SignalR', 'SQL Server 2019', 'SendGrid', 'Azure DevOps']
    },
    {
      title: 'Software Engineer',
      company: 'Accura-Tech Technologies (Hybrid)',
      period: 'Apr 2020 – Jun 2025',
      description: [
        'Full-stack developer for Beagel Enterprise platform, handling frontend, backend, and database layers',
        'Integrated APIs, optimized system performance, and improved user interface responsiveness',
        'Worked on English Focus (React.js-based educational platform) and Little Red Edu (Unity-based English learning mobile app)',
        'Contributed to multiple releases ensuring stability, scalability, and maintainable codebases'
      ],
      technologies: ['.NET Core 3.1', 'Angular 10–11', 'SQL Server 2019', 'SendGrid', 'SignalR', 'Bootstrap 5', 'React.js', 'Unity Engine']
    },
    {
      title: 'Associate Software Engineer',
      company: 'DMS Software Engineering (Pvt) Ltd',
      period: 'Sep 2018 – Apr 2020',
      description: [
        'Developed enterprise applications for clients including Sri Lanka Police Association and Sri Lanka Port Authority',
        'Worked with MVC 4/5 architecture and Entity Framework for backend and Angular 4 for frontend development',
        'Delivered modules for ZHO Organization (Dubai) focusing on data handling and reporting'
      ],
      technologies: ['C#', 'MVC', 'Entity Framework', 'Angular 4', 'SQL Server']
    },
    {
      title: 'Software Developer',
      company: 'EFutures (Pvt) Ltd',
      period: 'Sep 2015 – May 2017',
      description: [
        'Developed an internal HR Leave Management System with role-based access control',
        'Conducted data analysis and project maintenance for international clients',
        'Enhanced hands-on experience across .NET, PHP, and Java EE environments'
      ],
      technologies: ['.NET Framework', 'Java', 'PHP', 'MySQL', 'SQL Server']
    }
  ];
}
