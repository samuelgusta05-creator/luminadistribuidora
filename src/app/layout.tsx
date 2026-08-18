import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lúmina | Distribuidora de Alta Cosmética B2B',
  description:
    'Distribuidora de cosméticos de luxo conectando formulações de alto padrão aos melhores salões de beleza, clínicas e farmácias do Brasil.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sans.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#ffffff] text-[#1d1d1f]">
        {children}
      </body>
    </html>
  );
}
