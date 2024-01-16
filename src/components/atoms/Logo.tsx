import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../shared/icons/logo.svg';

const StyledLogo = styled(NavLink)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo: React.FC = () => {
  return (
    <StyledLogo to="/" className="logo">
      <LogoIcon />
    </StyledLogo>
  );
};
