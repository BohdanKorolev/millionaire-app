'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import Button from '@/components/Button/Button';

export default function Home(): JSX.Element {
  const router = useRouter();

  const startGame = (): void => {
    router.push('/game');
  };

  return (
    <div>
      <h1>Who wants to be a millionaire?</h1>
      <Button text="Start" onClick={startGame} />
    </div>
  );
}
