# News App

A modern React news application that fetches and displays news articles from various categories using the NewsAPI.

## Features

- 📰 Real-time news from multiple categories (Business, Entertainment, General, Health, Science, Sports, Technology)
- 🌙 Dark/Light mode toggle
- 🔍 Search functionality
- 📱 Responsive design
- ♾️ Infinite scroll for loading more articles
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- React Icons
- React Infinite Scroll Component
- NewsAPI

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd News_App
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your NewsAPI key:
```env
VITE_NEWS_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Deployment on Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
vercel
```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Configure environment variables:
   - Add `VITE_NEWS_API_KEY` with your NewsAPI key
6. Deploy

### Environment Variables for Vercel

Make sure to add these environment variables in your Vercel project settings:

- `VITE_NEWS_API_KEY`: Your NewsAPI key

## API Key

This project uses the NewsAPI. You can get a free API key by signing up at [https://newsapi.org/](https://newsapi.org/).

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header with category links
│   ├── News.jsx        # Main news component with infinite scroll
│   └── NewsItem.jsx    # Individual news item component
├── App.jsx             # Main app component with routing
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Troubleshooting

### Common Issues

1. **CORS Errors**: The app is configured to handle CORS issues with the Vercel configuration
2. **API Rate Limits**: NewsAPI has rate limits for free accounts
3. **Build Errors**: Make sure all dependencies are installed

### Vercel Deployment Issues

1. **404 Errors**: The `vercel.json` file handles SPA routing
2. **Environment Variables**: Make sure to add `VITE_NEWS_API_KEY` in Vercel settings
3. **Build Failures**: Check the build logs in Vercel dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
