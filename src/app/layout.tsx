import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Хто хоче стати мільйонером ',
  description: 'Грай, або програй',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
