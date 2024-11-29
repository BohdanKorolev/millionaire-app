'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  JSX,
} from 'react';

type GameContextType = {
  score: number;
  // eslint-disable-next-line no-unused-vars
  setScore: (score: number) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [score, setScore] = useState(0);

  const value = useMemo(() => ({ score, setScore }), [score]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame(): GameContextType {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
