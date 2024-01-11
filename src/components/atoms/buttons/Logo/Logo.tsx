import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoImg } from '../../../../shared/images/logo.svg';

export const Logo: React.FC = () => {
  return (
    <NavLink to="/" className="header__logo">
      <LogoImg />
    </NavLink>
  )
}