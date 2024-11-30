import { JSX } from 'react';

export interface IButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button(props: IButtonProps): JSX.Element {
  function onClick(): void {
    props.onClick();
  }

  return (
    <button type="button" onClick={onClick}>
      {props.text}
    </button>
  );
}
