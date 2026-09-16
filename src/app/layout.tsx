import type { Metadata } from 'next';
import './globals.css';
import { CurrencyProvider } from '@/context/CurrencyContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Bangkok Link Properties | Luxury Real Estate & Current Selling Projects',
  description: 'Official sales and private allocations for premier high-rise condominiums, riverside branded residences, and luxury boutique projects in Bangkok. Guided by Trust, Luxury, and Service.',
  keywords: [
    'Bangkok real estate',
    'luxury condo Bangkok',
    'Bangkok Link Properties',
    'Sukhumvit property',
    'Riverside Bangkok condo',
    'Thailand foreign quota',
    'presale Bangkok'
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans antialiased">
        <CurrencyProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
