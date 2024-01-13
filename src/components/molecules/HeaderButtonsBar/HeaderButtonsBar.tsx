import React from "react";
import styles from './HeaderButtonsBar.module.scss';
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "../../atoms/buttons/IconButton";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import iconHeart from '../../../shared/icons/heart.svg';
import iconHeartWhite from '../../../shared/icons/heart-white.svg';

export const HeaderButtonsBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFavouritesPage = location.pathname === '/favourites';

  const navigateToFavourites = () => {
    navigate('/favourites');
  };

  return (
    <div className={styles.bar}>
      <div className={styles.bar__icon}>
        <IconButton
          isActive={isFavouritesPage}
          iconActive={iconHeartWhite}
          iconDefault={iconHeart}
          onClickDefault={navigateToFavourites}
        />
      </div>

      <div className={styles.bar__login}>
        <PrimaryButton
          title="sign in"
        />
      </div>
    </div>
  );
};
