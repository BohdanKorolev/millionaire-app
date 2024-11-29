'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  const router = useRouter();

  const startGame = (): void => {
    router.push('/game');
  };

  return (
    <div>
      <main>
        <section>
          <h2>Start the Game</h2>
          <button type="button" onClick={startGame}>
            Start Game
          </button>
        </section>
      </main>
    </div>
  );
}
