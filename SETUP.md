# Quick Setup Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:4200`

## Customization Checklist

### 1. Personal Information
- [ ] Update About section with your introduction
- [ ] Add your photo (replace placeholder in About component)
- [ ] Update contact information (email, phone, location)
- [ ] Add your social media links

### 2. Experience & Skills
- [ ] Add your work experience in `experience.component.ts`
- [ ] Update skills and proficiency levels in `skills.component.ts`
- [ ] Add/remove technologies as needed

### 3. Projects
- [ ] Add your projects in `projects.component.ts`
- [ ] Include project descriptions, technologies, and links
- [ ] Mark featured projects

### 4. YouTube Integration
- [ ] Get YouTube API Key from [Google Cloud Console](https://console.cloud.google.com/)
- [ ] Get your YouTube Channel ID
- [ ] Update `youtube.service.ts` with your API key and channel ID
- [ ] Update YouTube channel URL in `youtube.component.ts` and `contact.component.ts`

### 5. Styling (Optional)
- [ ] Customize colors in `styles.scss`
- [ ] Adjust component styles as needed
- [ ] Add your own images/assets to `src/assets/`

## YouTube API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "YouTube Data API v3"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy the API key
6. (Optional) Restrict the key to YouTube Data API v3 for security
7. Update `src/app/services/youtube.service.ts`:
   - Replace `YOUR_YOUTUBE_API_KEY` with your API key
   - Replace `YOUR_CHANNEL_ID` with your channel ID

## Building for Production

```bash
npm run build
```

Output will be in `dist/ashane-portfolio/`

## Deployment Options

- **Netlify**: Drag and drop the `dist/ashane-portfolio` folder
- **Vercel**: Connect your GitHub repo
- **Firebase**: Use Firebase Hosting
- **GitHub Pages**: Deploy the dist folder

## Need Help?

Check the main README.md for more detailed information.
