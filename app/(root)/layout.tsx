import { Suspense } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/shared/header';
import Spinner from '@/components/ui/spinner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header />

      <main className='flex-1 wrapper'>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>

      <Footer />
    </div>
  );
}
