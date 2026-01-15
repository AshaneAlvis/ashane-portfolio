import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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
  private apiKey = environment.youtube.apiKey;
  private channelId = environment.youtube.channelId;
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) {}

  getVideos(maxResults: number = 6): Observable<YouTubeVideo[]> {
    // If API key is not configured, return empty array
    if (
      !this.apiKey ||
      !this.channelId ||
      this.apiKey.startsWith('YOUR_') ||
      this.channelId.startsWith('YOUR_')
    ) {
      console.warn('YouTube API key or Channel ID not configured. Please update your environment file.');
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
