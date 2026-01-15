const fs = require('fs');
const path = require('path');

const env = {
  production: true,
  youtube: {
    apiKey: process.env.YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY',
    channelId: process.env.YOUTUBE_CHANNEL_ID || 'YOUR_YOUTUBE_CHANNEL_ID'
  },
  emailjs: {
    serviceId: process.env.EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
    templateId: process.env.EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: process.env.EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY'
  }
};

const output = `export const environment = ${JSON.stringify(env, null, 2)};\n`;
const targetPath = path.join(__dirname, '..', 'src', 'environments', 'environment.production.ts');

fs.writeFileSync(targetPath, output, 'utf8');
console.log(`Wrote ${targetPath}`);
