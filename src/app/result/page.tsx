'use client';

import { useSearchParams } from 'next/navigation';

export default function Result() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || '0';

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
