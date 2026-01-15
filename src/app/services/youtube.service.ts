import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
}

interface YouTubeApiResponse {
  items: Array<{
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        high: { url: string };
      };
      publishedAt: string;
    };
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  // IMPORTANT: Replace these with your actual values
  private apiKey = 'AIzaSyBKz0VlXQeI1LG1q7QKnfvtzi7A_Bw97ww'; // Get from https://console.cloud.google.com/
  private channelId = 'UCfX3i8wXffq39MXxNjbqXiQ'; // Your YouTube channel ID
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) {}

  getVideos(maxResults: number = 6): Observable<YouTubeVideo[]> {
    // If API key is not configured, return empty array
    if (this.apiKey === 'YOUR_YOUTUBE_API_KEY' || this.channelId === 'YOUR_CHANNEL_ID') {
      console.warn('YouTube API key or Channel ID not configured. Please update youtube.service.ts');
      return of([]);
    }

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('channelId', this.channelId)
      .set('maxResults', maxResults.toString())
      .set('order', 'date')
      .set('type', 'video')
      .set('key', this.apiKey);

    return this.http.get<YouTubeApiResponse>(this.apiUrl, { params }).pipe(
      map((response) => {
        return response.items.map((item) => ({
          id: item.id.videoId,
          videoId: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt
        }));
      }),
      catchError((error) => {
        console.error('YouTube API Error:', error);
        return of([]);
      })
    );
  }
}
