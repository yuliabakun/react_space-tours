import React from 'react';
import cn from 'classnames';
import './IconButton.scss';
import heartIcon from '../../../../shared/icons/heart.svg';
import heartIconWhite from '../../../../shared/icons/heart-white.svg';

type Props = {
  isActive?: boolean,
  onClickDefault: () => void,
  onClickActive?: () => void,
}

export const IconButton: React.FC<Props> = ({
  isActive,
  onClickDefault,
  onClickActive,
}) => {
  return (
    <button
      type="button"
      className={cn('icon-button', { 'icon-button--active' : isActive })}
      onClick={isActive ? onClickActive : onClickDefault}
    >
      <img src={isActive ? heartIconWhite : heartIcon} alt="heart icon" color='white' />
    </button>
  );
}
