import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="min-h-screen flex items-center py-20 relative overflow-hidden dark:text-gray-100">
      <div class="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:hidden"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 hidden dark:block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      
      <div class="container mx-auto px-5 relative z-10">
        <h2 class="text-5xl font-bold text-center mb-16 text-primary-700 relative pb-6 animate-fade-in-up">
          Get In Touch
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-700 to-primary-400 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
            <h3 class="text-2xl font-bold text-primary-700 mb-4">Let's Connect!</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <div class="space-y-6 mb-8">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-primary-100 rounded-lg">
                  <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <strong class="block text-gray-800 dark:text-gray-200 mb-1">Email</strong>
                  <p class="text-gray-600 dark:text-gray-300"><a href="mailto:ashanealvis@gmail.com" class="text-primary-700 dark:text-primary-300 hover:underline">ashanealvis@gmail.com</a></p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="p-3 bg-primary-100 rounded-lg">
                  <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <strong class="block text-gray-800 dark:text-gray-200 mb-1">Phone</strong>
                  <p class="text-gray-600 dark:text-gray-300">
                    <a href="tel:+94766093357" class="text-primary-700 dark:text-primary-300 hover:underline">+94 766 093357</a> / 
                    <a href="tel:+94778553357" class="text-primary-700 dark:text-primary-300 hover:underline">+94 778 553357</a>
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="p-3 bg-primary-100 rounded-lg">
                  <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <strong class="block text-gray-800 dark:text-gray-200 mb-1">Location</strong>
                  <p class="text-gray-600 dark:text-gray-300">341/B-2, Mankada Road, Jalathara, Ranala, Sri Lanka<br>Postal Code: 10654</p>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <a href="https://github.com/yourusername" target="_blank" class="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" class="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" class="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a [href]="youtubeUrl" target="_blank" class="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up" style="animation-delay: 0.2s">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-primary-700 to-purple-600 bg-clip-text text-transparent mb-8">Send me a message</h3>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-5">
              <div>
                <label class="block text-gray-700 dark:text-gray-200 font-medium mb-2">Name</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <input type="text" formControlName="name" required
                         class="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-white/10 dark:bg-slate-900/60 dark:text-gray-100 rounded-lg focus:border-primary-700 dark:focus:border-primary-400 focus:outline-none transition-colors"
                         [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                </div>
                <p *ngIf="contactForm.get('name')?.hasError('required') && contactForm.get('name')?.touched" class="text-red-500 text-sm mt-1">Name is required</p>
              </div>

              <div>
                <label class="block text-gray-700 dark:text-gray-200 font-medium mb-2">Email</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <input type="email" formControlName="email" required
                         class="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-white/10 dark:bg-slate-900/60 dark:text-gray-100 rounded-lg focus:border-primary-700 dark:focus:border-primary-400 focus:outline-none transition-colors"
                         [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                </div>
                <p *ngIf="contactForm.get('email')?.hasError('required') && contactForm.get('email')?.touched" class="text-red-500 text-sm mt-1">Email is required</p>
                <p *ngIf="contactForm.get('email')?.hasError('email') && contactForm.get('email')?.touched" class="text-red-500 text-sm mt-1">Invalid email format</p>
              </div>

              <div>
                <label class="block text-gray-700 dark:text-gray-200 font-medium mb-2">Subject</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </div>
                  <input type="text" formControlName="subject" required
                         class="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-white/10 dark:bg-slate-900/60 dark:text-gray-100 rounded-lg focus:border-primary-700 dark:focus:border-primary-400 focus:outline-none transition-colors"
                         [class.border-red-500]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
                </div>
                <p *ngIf="contactForm.get('subject')?.hasError('required') && contactForm.get('subject')?.touched" class="text-red-500 text-sm mt-1">Subject is required</p>
              </div>

              <div>
                <label class="block text-gray-700 dark:text-gray-200 font-medium mb-2">Message</label>
                <div class="relative">
                  <div class="absolute top-3 left-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <textarea formControlName="message" rows="6" required
                            class="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-white/10 dark:bg-slate-900/60 dark:text-gray-100 rounded-lg focus:border-primary-700 dark:focus:border-primary-400 focus:outline-none transition-colors resize-none"
                            [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
                </div>
                <p *ngIf="contactForm.get('message')?.hasError('required') && contactForm.get('message')?.touched" class="text-red-500 text-sm mt-1">Message is required</p>
              </div>

              <button type="submit" [disabled]="contactForm.invalid"
                      class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                Send Message
              </button>
            </form>
            <div *ngIf="showSuccessMessage" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Message sent successfully! I'll get back to you soon.
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class ContactComponent {
  contactForm: FormGroup;
  youtubeUrl = 'https://www.youtube.com/@yourchannel'; // Update with your channel URL

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  showSuccessMessage = false;

  onSubmit() {
    if (this.contactForm.valid) {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', this.contactForm.value);
      
      this.showSuccessMessage = true;
      this.contactForm.reset();
      
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }
  }
}
