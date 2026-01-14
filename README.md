# Ashane Portfolio

A modern, responsive portfolio website built with Angular 21 and Angular Material. Showcase your skills, experience, projects, and YouTube videos in a beautiful, professional layout.

## Features

- 🎨 **Modern UI/UX** - Beautiful design with Angular Material components
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎥 **YouTube Integration** - Display your latest YouTube videos
- 🚀 **Fast & Optimized** - Built with Angular 21 for optimal performance
- 🎯 **SEO Friendly** - Clean structure and semantic HTML
- 🌈 **Gradient Themes** - Eye-catching color schemes throughout

## Sections

1. **Header** - Fixed navigation with smooth scrolling
2. **About** - Personal introduction and quick facts
3. **Experience** - Work history and professional experience
4. **Skills** - Technical skills with progress indicators
5. **Projects** - Portfolio of your work
6. **YouTube** - Latest videos from your channel
7. **Contact** - Contact form and social links
8. **Footer** - Additional links and information

## Prerequisites

- Node.js (v16.0.0 or later)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ashane-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure YouTube API (optional):
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable YouTube Data API v3
   - Create credentials (API Key)
   - Update `src/app/services/youtube.service.ts`:
     - Replace `YOUR_YOUTUBE_API_KEY` with your API key
     - Replace `YOUR_CHANNEL_ID` with your YouTube channel ID

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:4200`

## Customization

### Personal Information

1. **About Section** (`src/app/components/about/about.component.ts`):
   - Update introduction text
   - Add your photo (replace image placeholder)
   - Modify quick facts chips

2. **Experience** (`src/app/components/experience/experience.component.ts`):
   - Add your work experience in the `experiences` array

3. **Skills** (`src/app/components/skills/skills.component.ts`):
   - Update skill categories and proficiency levels
   - Add/remove technologies

4. **Projects** (`src/app/components/projects/projects.component.ts`):
   - Add your projects with descriptions and links

5. **Contact** (`src/app/components/contact/contact.component.ts`):
   - Update email, phone, and location
   - Add your social media links

6. **Header & Footer**:
   - Update logo text
   - Modify navigation links if needed

### Styling

- Main styles: `src/styles.scss`
- Component-specific styles are in each component's `styles` property
- Color scheme: Modify the gradient colors in component styles

### YouTube Integration

To display your YouTube videos:

1. Get your YouTube Channel ID:
   - Go to your YouTube channel
   - The channel ID is in the URL or channel settings

2. Get YouTube API Key:
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a project
   - Enable "YouTube Data API v3"
   - Create credentials (API Key)
   - Restrict the key to YouTube Data API v3 for security

3. Update the service:
   - Edit `src/app/services/youtube.service.ts`
   - Replace `YOUR_YOUTUBE_API_KEY` and `YOUR_CHANNEL_ID`

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

You can deploy this portfolio to:
- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import your project and deploy
- **GitHub Pages**: Use Angular's build output
- **Firebase Hosting**: Deploy using Firebase CLI

## Technologies Used

- Angular 21
- Angular Material 21
- TypeScript
- SCSS
- RxJS
- YouTube Data API v3

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

Built with ❤️ using Angular and Angular Material
