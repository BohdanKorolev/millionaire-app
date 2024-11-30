'use client';

import { JSX } from 'react';
import { useGame } from '@/common/context/GameContext';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './result.module.scss';

export default function Result(): JSX.Element {
  const router = useRouter();
  const { score } = useGame();

  const restartGame = (): void => {
    router.push('/');
  };

  return (
    <div className={styles.result}>
      <div className={styles.result__contatiner}>
        <div className={styles.result__image}>
          <Image
            src="/fingers.webp"
            width={452}
            height={357}
            alt="Main image"
          />
        </div>
        <div className={styles.result__content}>
          <div>
            <p className={styles.result__subtitle}>Total score:</p>
            <h2 className={styles.result__title}>{score}</h2>
          </div>
          <Button text="Try Again" onClick={restartGame} />
        </div>
      </div>
    </div>
  );
}
