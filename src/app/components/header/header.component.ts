import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.bg-white/98]="isScrolled" [class.shadow-xl]="isScrolled" 
            class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-500 shadow-lg border-b border-white/20 dark:border-white/10">
      <div class="container mx-auto px-5 flex justify-between items-center h-20">
        <div class="logo group cursor-pointer">
          <span class="text-2xl font-bold bg-gradient-to-r from-primary-700 via-primary-500 to-primary-400 bg-clip-text text-transparent bg-300% animate-gradient group-hover:scale-110 transition-transform duration-300 inline-block">
            Ashane's Portfolio
          </span>
        </div>
        <nav class="hidden md:flex gap-1">
          <a href="#about" class="relative text-gray-700 dark:text-gray-200 no-underline font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:text-primary-700 group">
            <span class="relative z-10">About</span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
          <a href="#experience" class="relative text-gray-700 dark:text-gray-200 no-underline font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:text-primary-700 group">
            <span class="relative z-10">Experience</span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
          <a href="#skills" class="relative text-gray-700 dark:text-gray-200 no-underline font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:text-primary-700 group">
            <span class="relative z-10">Skills</span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
          <a href="#projects" class="relative text-gray-700 dark:text-gray-200 no-underline font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:text-primary-700 group">
            <span class="relative z-10">Projects</span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
          <a href="#youtube" class="relative text-gray-700 dark:text-gray-200 no-underline font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:text-primary-700 group">
            <span class="relative z-10">Videos</span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
          <a href="#contact" class="relative text-gray-700 dark:text-gray-200 no-underline font-medium transition-all duration-300 px-4 py-2 rounded-xl hover:text-primary-700 group">
            <span class="relative z-10">Contact</span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-white/10 dark:to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </a>
        </nav>
        <button (click)="toggleDarkMode()"
                class="hidden md:inline-flex items-center gap-2 px-2 py-1.5 rounded-full bg-gray-100/90 dark:bg-slate-800/80 shadow-none transition-all duration-300 border-0 outline-none focus-visible:outline-none focus-visible:ring-0 appearance-none">
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 pl-2">Theme</span>
          <span class="relative inline-flex h-7 w-12 items-center rounded-full bg-white/90 dark:bg-slate-900/90 transition-colors duration-300">
            <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-700 shadow-sm transition-transform duration-300"
                  [ngClass]="isDarkMode ? 'translate-x-5' : 'translate-x-1'">
              <svg *ngIf="!isDarkMode" class="h-3.5 w-3.5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-8a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 12a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm13.657-7.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM8.464 17.536a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17.536 15.536a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM6.05 6.05a1 1 0 011.414 0l.707.707A1 1 0 016.757 8.17l-.707-.707a1 1 0 010-1.414z"/>
              </svg>
              <svg *ngIf="isDarkMode" class="h-3.5 w-3.5 text-sky-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
              </svg>
            </span>
          </span>
        </button>
        <button (click)="mobileMenuOpen = !mobileMenuOpen" 
                class="md:hidden p-3 text-gray-800 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 rounded-xl hover:bg-primary-50 dark:hover:bg-white/10 active:scale-95">
          <svg class="w-6 h-6 transition-transform duration-300" [class.rotate-90]="mobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path *ngIf="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path *ngIf="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div *ngIf="mobileMenuOpen" class="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 shadow-2xl animate-fade-in">
        <div class="flex items-center justify-between px-4 pt-4">
          <span class="text-sm font-semibold text-gray-600 dark:text-gray-300">Theme</span>
          <button (click)="toggleDarkMode()"
                  class="inline-flex items-center gap-2 px-2 py-1.5 rounded-full bg-gray-100/90 dark:bg-slate-800/80 shadow-none transition-all duration-300 border-0 outline-none focus-visible:outline-none focus-visible:ring-0 appearance-none">
            <span class="relative inline-flex h-6 w-10 items-center rounded-full bg-white/90 dark:bg-slate-900/90 transition-colors duration-300">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-700 shadow-sm transition-transform duration-300"
                    [ngClass]="isDarkMode ? 'translate-x-4' : 'translate-x-1'">
                <svg *ngIf="!isDarkMode" class="h-3 w-3 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-8a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 12a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm13.657-7.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM8.464 17.536a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17.536 15.536a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM6.05 6.05a1 1 0 011.414 0l.707.707A1 1 0 016.757 8.17l-.707-.707a1 1 0 010-1.414z"/>
                </svg>
                <svg *ngIf="isDarkMode" class="h-3 w-3 text-sky-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
                </svg>
              </span>
            </span>
          </button>
        </div>
        <nav class="flex flex-col p-4 gap-2">
          <a href="#about" (click)="scrollTo('about'); mobileMenuOpen = false" 
             class="text-gray-700 dark:text-gray-200 no-underline font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2">About</a>
          <a href="#experience" (click)="scrollTo('experience'); mobileMenuOpen = false" 
             class="text-gray-700 dark:text-gray-200 no-underline font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2">Experience</a>
          <a href="#skills" (click)="scrollTo('skills'); mobileMenuOpen = false" 
             class="text-gray-700 dark:text-gray-200 no-underline font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2">Skills</a>
          <a href="#projects" (click)="scrollTo('projects'); mobileMenuOpen = false" 
             class="text-gray-700 dark:text-gray-200 no-underline font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2">Projects</a>
          <a href="#youtube" (click)="scrollTo('youtube'); mobileMenuOpen = false" 
             class="text-gray-700 dark:text-gray-200 no-underline font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2">Videos</a>
          <a href="#contact" (click)="scrollTo('contact'); mobileMenuOpen = false" 
             class="text-gray-700 dark:text-gray-200 no-underline font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 transform hover:translate-x-2">Contact</a>
        </nav>
      </div>
    </header>
  `,
  styles: [``]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  mobileMenuOpen = false;
  isDarkMode = false;

  ngOnInit() {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = storedTheme ? storedTheme === 'dark' : prefersDark;
    this.updateThemeClass();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateThemeClass();
  }

  private updateThemeClass() {
    const root = document.documentElement;
    if (this.isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
