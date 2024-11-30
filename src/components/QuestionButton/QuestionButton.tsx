import React, { JSX } from 'react';
import styles from './QuestionButton.module.scss';

export interface IQuestionBtnProps {
  text: string;
  indicatorText: string;
  onClick: () => void;
}

export default function QuestionButton(props: IQuestionBtnProps): JSX.Element {
  function onClick(): void {
    props.onClick();
  }

  return (
    <button type="button" onClick={onClick}>
      <span>{props.indicatorText}</span>
      <span>{props.text}</span>
    </button>
  );
}
