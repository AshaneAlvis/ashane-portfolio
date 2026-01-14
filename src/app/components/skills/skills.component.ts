import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center py-20 relative overflow-hidden dark:text-gray-100">
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 animate-gradient bg-300% dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.15),transparent_50%)]"></div>
      
      <div class="container mx-auto px-5 relative z-10">
        <h2 class="text-5xl font-bold text-center mb-16 text-white relative pb-6 animate-fade-in-up drop-shadow-lg">
          Skills
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-white to-white/70 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div *ngFor="let category of skillCategories; let i = index" 
               class="group bg-white/95 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 text-gray-800 dark:text-gray-100 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
               [style.animation-delay.ms]="i * 150">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <h3 class="text-2xl font-bold bg-gradient-to-r from-primary-700 to-purple-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                <div class="p-2 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg shadow-md">
                  <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path *ngIf="category.category === 'Languages & Frameworks'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    <path *ngIf="category.category === 'Tools & Platforms'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path *ngIf="category.category === 'Soft Skills'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                {{ category.category }}
              </h3>
              <div class="space-y-6">
                <div *ngFor="let skill of category.skills" class="skill-item group/item">
                  <div class="flex justify-between items-center mb-3">
                  <span class="font-semibold text-gray-800 dark:text-gray-200 group-hover/item:text-primary-700 dark:group-hover/item:text-primary-300 transition-colors">{{ skill.name }}</span>
                  <span class="text-sm text-primary-600 dark:text-primary-300 font-bold bg-primary-50 dark:bg-white/10 px-2 py-1 rounded">{{ skill.level }}%</span>
                  </div>
                <div class="w-full bg-gray-200 dark:bg-white/10 rounded-full h-3 overflow-hidden shadow-inner">
                    <div class="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-md relative overflow-hidden"
                         [style.width.%]="skill.level">
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient bg-300%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.3s">
          <h3 class="text-4xl font-bold mb-10 text-white drop-shadow-lg">Technologies & Tools</h3>
          <div class="flex flex-wrap justify-center gap-3">
            <span *ngFor="let tech of technologies" 
                  class="px-5 py-2.5 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 transform">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Languages & Frameworks',
      skills: [
        { name: 'C#', level: 95 },
        { name: '.NET Core', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'ASP.NET MVC', level: 90 },
        { name: 'React.js', level: 80 },
        { name: 'HTML5/CSS/SCSS', level: 90 },
        { name: 'SQL Server', level: 90 },
        { name: 'Entity Framework', level: 90 }
      ]
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Azure DevOps', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'SignalR', level: 85 },
        { name: 'SendGrid', level: 80 },
        { name: 'Unity 5', level: 75 },
        { name: 'Windows', level: 90 }
      ]
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Problem-solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Agile Development', level: 90 },
        { name: 'Mentoring', level: 85 }
      ]
    }
  ];

  technologies: string[] = [
    'C#', '.NET Core', 'ASP.NET MVC', 'Angular', 'TypeScript', 'JavaScript',
    'React.js', 'HTML5', 'CSS', 'SCSS', 'SQL Server', 'Entity Framework',
    'Azure DevOps', 'Git', 'SignalR', 'SendGrid', 'Unity 5', 'Bootstrap 5',
    'Windows', 'Java', 'PHP', 'MySQL'
  ];

}
