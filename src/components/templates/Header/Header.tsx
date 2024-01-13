import React from 'react';
import './Header.scss';
import { Logo } from '../../atoms/logo/Logo';
import { NavBar } from '../../organisms/NavBar';
import { HeaderButtonsBar } from '../../molecules/HeaderButtonsBar';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />

      <NavBar />

      <HeaderButtonsBar />
    </header>
  );
};
