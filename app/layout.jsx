import './globals.css';
import { portfolioData } from '../data/portfolioData';

export const metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.designation}`,
  description: `${portfolioData.personal.name} - ${portfolioData.personal.designation}. ${portfolioData.personal.tagline}`,
  keywords: [
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Software Engineer',
    'Portfolio',
    'Web Developer',
    'MERN Stack'
  ],
  authors: [{ name: portfolioData.personal.name }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090d16',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#090d16] text-slate-100 min-h-screen antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
