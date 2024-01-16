import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import * as colors from '../../shared/styles/variables.ts';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 40px;
  cursor: pointer;

  &.icon-button--active {
    background-color: ${colors.accentPink};
  }

  @media only screen and (min-width: 768px) {
    height: 53px;
    min-width: 53px;
  }
`;

type Props = {
  isActive?: boolean;
  onClickDefault: () => void;
  onClickActive?: () => void;
  iconDefault: string;
  iconActive?: string;
};

export const IconButton: React.FC<Props> = ({
  isActive,
  onClickDefault,
  onClickActive,
  iconDefault,
  iconActive,
}) => {
  return (
    <StyledButton
      type="button"
      className={cn('icon-button', { 'icon-button--active': isActive })}
      onClick={isActive ? onClickActive : onClickDefault}
    >
      <img src={isActive ? iconActive : iconDefault} alt="button icon" />
    </StyledButton>
  );
};
