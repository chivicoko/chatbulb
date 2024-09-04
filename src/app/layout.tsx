import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'CHATBULB - Lightbulb Chat App',
  description: 'A chat app to toggle a virtual lightbulb',
  keywords: "Next.js, TypeScript, TailwindCSS, Chat, AI, GPT, ChatGPT, gpt-4o-mini",
  openGraph: {
    type: 'website',
    url: 'https://chatbulb.vercel.app',
    title: "ChatBulb",
    description: "ChatBulb is a chat app that can be used to toggle a virtual lightbulb.",
    // images: [
    //   {
    //     url: 'https://yourwebsite.com/path/to/image.jpg',
    //     // url: '/logo.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Open Graph Image',
    //   },
    // ], 
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "ChatBulb",
  //   description: "ChatBulb is a chat app that can be used to toggle a virtual lightbulb.",
  //   image: 'https://yourwebsite.com/path/to/twitter-image.jpg',
  // },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClerkProvider>
      <html lang="en">
        <body>
        <Navbar />
        {children}
        
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      
        </body>
      </html>
      </ClerkProvider>
  );
}
