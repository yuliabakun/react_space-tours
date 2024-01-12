import React from 'react';
import styles from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoImg } from '../../../../shared/images/logo.svg';

export const Logo: React.FC = () => {
  return (
    <NavLink
      to="/"
      className={styles.logo}
    >
      <LogoImg />
    </NavLink>
  )
}