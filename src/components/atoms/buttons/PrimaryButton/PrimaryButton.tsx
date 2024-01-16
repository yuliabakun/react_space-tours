import React from 'react';
import styles from './PrimaryButton.module.scss';

type Props = {
  title: string,
  onClick?: () => {},
};

export const PrimaryButton: React.FC<Props> = ({
  title,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
