'use client';

import { JSX } from 'react';
import { useGame } from '@/common/context/GameContext';

export default function Result(): JSX.Element {
  const { score } = useGame();

  return (
    <div>
      <h1>Game Over</h1>
      <p>Your final score is: {score}</p>
      <button
        type="button"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        Play Again
      </button>
    </div>
  );
}
