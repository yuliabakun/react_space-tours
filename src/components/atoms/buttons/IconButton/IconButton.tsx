import React from 'react';
import cn from 'classnames';
import './IconButton.scss';

type Props = {
  isActive?: boolean,
  onClickDefault: () => void,
  onClickActive?: () => void,
  iconDefault: string,
  iconActive?: string,
}

export const IconButton: React.FC<Props> = ({
  isActive,
  onClickDefault,
  onClickActive,
  iconDefault,
  iconActive,
}) => {
  return (
    <button
      type="button"
      className={cn('icon-button', { 'icon-button--active': isActive })}
      onClick={isActive ? onClickActive : onClickDefault}
    >
      <img
        src={isActive ? iconActive : iconDefault}
        alt="button icon"
      />
    </button>
  );
}
