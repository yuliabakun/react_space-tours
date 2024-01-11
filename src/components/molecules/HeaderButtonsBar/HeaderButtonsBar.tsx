import React from "react";
import './HeaderButtonsBar.scss';
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "../../atoms/buttons/IconButton";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";

export const HeaderButtonsBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFavouritesPage = location.pathname === '/favourites';

  const navigateToFavourites = () => {
    navigate('/favourites');
  };

  const navigateToHome = () => {
    navigate('/home');
  }

  return (
    <div className="header-bar">
      <div className="header-bar__icon">
        <IconButton
          isActive={isFavouritesPage}
          onClickDefault={navigateToFavourites}
        />
      </div>

      <div className="header-bar__login">
        <PrimaryButton
          title="sign in"
          onClick={navigateToHome}
        />
      </div>
    </div>
  )
};
