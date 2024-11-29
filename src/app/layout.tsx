import type { Metadata } from 'next';
import './globals.css';
import { JSX } from 'react';
import { GameProvider } from '@/common/context/GameContext';

export const metadata: Metadata = {
  title: 'Хто хоче стати мільйонером ',
  description: 'Грай, або програй',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
