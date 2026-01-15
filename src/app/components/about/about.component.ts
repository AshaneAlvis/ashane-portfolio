import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center py-20 relative overflow-hidden dark:text-gray-100">
      <!-- Animated background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient bg-300% dark:hidden"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 hidden dark:block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)]"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div class="container mx-auto px-5 relative z-10">
        <h2 class="text-5xl font-bold text-center mb-16 text-primary-700 relative pb-6 animate-fade-in-up">
          About Me
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-700 to-primary-400 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div class="flex justify-center lg:col-span-1 animate-fade-in">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow"></div>
              <div class="relative w-72 h-72 rounded-full bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 p-1.5 shadow-2xl transform group-hover:scale-105 transition-all duration-500 animate-float border-4 border-white/70 dark:border-white/20">
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div class="relative z-10 w-full h-full rounded-full bg-white/80 dark:bg-slate-900/60 p-1 overflow-hidden shadow-xl">
                  <img
                    src="assets/Portrait.jpg"
                    alt="Ashane Lahiru Alvis"
                    class="w-full h-full rounded-full object-cover object-center scale-125 translate-y-6"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-2 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
              <div class="relative z-10">
                <h3 class="text-4xl mb-6 bg-gradient-to-r from-primary-700 to-purple-600 bg-clip-text text-transparent font-bold">
                  Hello, I'm <span class="text-primary-700">Ashane Lahiru Alvis</span>
                </h3>
                <p class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">
                  Senior Software Engineer with a passion for building scalable, high-quality software solutions.
                </p>
                <p class="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
                  I'm a full-stack developer with extensive experience in .NET Core, Angular, and cloud technologies.
                  My objective is to obtain a senior-level position in software engineering where I can leverage my
                  experience in full-stack development, modern frameworks, and cloud technologies to deliver scalable,
                  high-quality software solutions. I enjoy working with modern technologies and am always eager to
                  learn and grow while contributing to innovative projects.
                </p>
                <div class="flex flex-wrap gap-3 mb-8">
                  <span class="px-5 py-2.5 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-white/10 dark:to-white/5 text-primary-700 dark:text-primary-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary-200/50 dark:border-white/10">Senior Software Engineer</span>
                  <span class="px-5 py-2.5 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-white/10 dark:to-white/5 text-primary-700 dark:text-primary-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary-200/50 dark:border-white/10">Full Stack Developer</span>
                  <span class="px-5 py-2.5 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-white/10 dark:to-white/5 text-primary-700 dark:text-primary-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary-200/50 dark:border-white/10">.NET Core Specialist</span>
                  <span class="px-5 py-2.5 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-white/10 dark:to-white/5 text-primary-700 dark:text-primary-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-primary-200/50 dark:border-white/10">Angular Expert</span>
                </div>
                <div class="flex gap-4 flex-wrap">
                  <a href="#contact" class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-600 text-white rounded-full font-semibold hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                    <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Get In Touch
                  </a>
                  <a href="#projects" class="group inline-flex items-center gap-2 px-8 py-4 bg-white/90 dark:bg-slate-800/70 text-primary-700 dark:text-primary-200 rounded-full font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 dark:hover:from-white/10 dark:hover:to-white/5 transition-all duration-300 active:scale-95">
                    <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    View Projects
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
export class AboutComponent {}
