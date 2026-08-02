import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { ThemeProvider } from '../components/ThemeProvider';
import { seoConfig } from '../config/seo';

export const metadata: Metadata = {
  metadataBase: new URL("https://unknown-edits.vercel.app"),
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  openGraph: seoConfig.openGraph,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#0A0A0A] text-white" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
