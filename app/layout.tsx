import './globals.css';
import { Poppins } from 'next/font/google';
import { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Feed The Mogul',
  description:
    'Feed The Mogul is a Budapest based grunge-stoner-punk rock band.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full text-slate-800 ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
