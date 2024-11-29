'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const startGame = () => {
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
