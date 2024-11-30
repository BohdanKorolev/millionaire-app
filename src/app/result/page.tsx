'use client';

import { JSX } from 'react';
import { useGame } from '@/common/context/GameContext';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';

export default function Result(): JSX.Element {
  const router = useRouter();
  const { score } = useGame();

  return (
    <div>
      <h1>Total score:</h1>
      <p>{score} earned</p>
      <Button
        text="Try Again"
        onClick={() => {
          router.push('/');
        }}
      />
    </div>
  );
}
