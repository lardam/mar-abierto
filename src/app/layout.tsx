import '@/assets/css/styles.scss';

import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Mar abierto',
  description: 'Explorá lo profundo, descubrí lo nuestro',
  openGraph: {
    images: '/images/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_AR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
