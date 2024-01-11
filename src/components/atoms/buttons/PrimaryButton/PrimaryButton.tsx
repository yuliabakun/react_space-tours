import React from 'react';
import './PrimaryButton.scss';

type Props = {
  title: string,
  onClick: () => void,
};

export const PrimaryButton: React.FC<Props> = ({
  title,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="base-button"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
