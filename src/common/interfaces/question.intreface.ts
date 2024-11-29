import { Answer } from '@/common/interfaces/answer.interface';

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  reward: number;
}
