import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
}

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center py-20 relative overflow-hidden dark:text-gray-100">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 animate-gradient bg-300% dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)] dark:hidden"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)]"></div>
      <div class="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      
      <div class="container mx-auto px-5 relative z-10">
        <h2 class="text-5xl font-bold text-center mb-16 text-white relative pb-6 animate-fade-in-up drop-shadow-lg">
          YouTube Videos
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full"></span>
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-white to-white/70 rounded-full"></span>
        </h2>
        <div class="text-center mb-12 max-w-2xl mx-auto">
          <p class="text-lg mb-6 text-white/95">Check out my latest videos on YouTube where I share tutorials, tips, and insights about web development!</p>
          <a [href]="youtubeChannelUrl" target="_blank" 
             class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            Visit My Channel
          </a>
        </div>
        <div *ngIf="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
        <div *ngIf="!loading && videos.length === 0" class="text-center py-12 text-white/90">
          <svg class="w-16 h-16 mx-auto mb-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <p class="text-lg mb-2">No videos found. Please configure your YouTube API key and channel ID.</p>
          <p class="text-sm opacity-80 italic">Check the YouTube service configuration in the code.</p>
        </div>
        <div *ngIf="!loading && videos.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let video of videos" class="bg-white/95 dark:bg-slate-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/40 dark:border-white/10">
            <div class="relative cursor-pointer group" (click)="openVideo(video.videoId)">
              <div class="aspect-video bg-black relative overflow-hidden">
                <img [src]="video.thumbnail" [alt]="video.title" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/70 transition-colors">
                  <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-bold text-primary-700 mb-2 line-clamp-2">{{ video.title }}</h3>
              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>{{ formatDate(video.publishedAt) }}</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{{ truncateText(video.description, 150) }}</p>
              <button (click)="openVideo(video.videoId)" 
                      class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class YoutubeComponent implements OnInit {
  videos: YouTubeVideo[] = [];
  loading = false;
  youtubeChannelUrl = 'https://www.youtube.com/@yourchannel'; // Update with your channel URL

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.loading = true;
    this.youtubeService.getVideos().subscribe({
      next: (videos) => {
        this.videos = videos;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading YouTube videos:', error);
        this.loading = false;
        // Videos array will remain empty, showing the no-videos message
      }
    });
  }

  openVideo(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
}
