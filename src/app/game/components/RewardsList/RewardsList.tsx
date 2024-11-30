import { JSX } from 'react';
import { IQuestion } from '@/common/interfaces/question.intreface';
import RewardsStep, {
  TRewardStepState,
} from '@/app/game/components/RewardsList/RewardsStep/RewardsStep';
import styles from './RewardsList.module.scss';

export interface IRewardsListProps {
  questions: IQuestion[];
  currentQuestionIndex: number;
}

export default function RewardsList(props: IRewardsListProps): JSX.Element {
  const rewardStepState = (
    qIndex: number,
    cIndex: number
  ): TRewardStepState => {
    if (qIndex === cIndex) {
      return 'active';
    }
    if (qIndex < cIndex) {
      return 'disabled';
    }
    return 'normal';
  };

  return (
    <ul className={styles.rewards}>
      {props.questions.map((question, index) => (
        <RewardsStep
          key={question.id}
          state={rewardStepState(index, props.currentQuestionIndex)}
          text={question.reward}
        />
      ))}
    </ul>
  );
}
