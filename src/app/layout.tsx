import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Portrait Painting | Digital Oil Painting | Paintstar Atelier',
  description: 'Our bespoke digital portrait paintings recreate your photographs into timeless fine art oil masterpieces. 100% hand-painted by master artists with digital stylus strokes. Painted, not prompted.',
  keywords: [
    'Digital oil painting',
    'portrait painting online',
    'photo to oil painting',
    'photo restoration',
    'family portrait canvas',
    'couple wedding painting',
  ],
  openGraph: {
    title: 'Digital Portrait Painting | Digital Oil Painting | Paintstar Atelier',
    description: 'Transform your precious memories into museum-grade digital oil canvas paintings. Painted, not prompted.',
    url: 'https://paintstar.studio',
    siteName: 'Paintstar Atelier',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Paintstar Atelier Digital Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-[#0B1012] selection:bg-[#FF543E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
