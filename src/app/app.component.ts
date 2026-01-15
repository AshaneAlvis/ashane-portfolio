import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    YoutubeComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-about id="about"></app-about>
      <app-experience id="experience"></app-experience>
      <app-skills id="skills"></app-skills>
      <app-projects id="projects"></app-projects>
      <app-youtube id="youtube"></app-youtube>
      <app-contact id="contact"></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      margin-top: 64px;
    }
  `]
})
export class AppComponent {
  title = 'Ashane Alvis';
}
