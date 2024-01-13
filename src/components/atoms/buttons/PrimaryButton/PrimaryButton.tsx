import React from 'react';
import styles from './PrimaryButton.module.scss';

type Props = {
  title: string,
};

export const PrimaryButton: React.FC<Props> = ({
  title,
}) => {
  return (
    <button
      type="button"
      className={styles.button}
    >
      {title}
    </button>
  );
};
