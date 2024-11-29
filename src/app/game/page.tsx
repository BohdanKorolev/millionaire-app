'use client';

import { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/common/context/GameContext';
import questions from '../../common/data/game.config.json';

export default function Game(): JSX.Element {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { score, setScore } = useGame();
  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean, reward: number): void => {
    let updatedScore = score;

    if (isCorrect) {
      updatedScore += reward;
      setScore(updatedScore);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        router.push(`/result`);
      }
    } else {
      router.push(`/result`);
    }
  };

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <div>
        {currentQuestion.answers.map((answer) => (
          <button
            type="button"
            key={answer.text}
            onClick={() =>
              handleAnswer(answer.isCorrect, currentQuestion.reward)
            }
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
