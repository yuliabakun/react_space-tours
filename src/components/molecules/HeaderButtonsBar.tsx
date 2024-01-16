import React from "react";
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "../atoms/IconButton";
import { PrimaryButton } from "../atoms/PrimaryButton";
import iconHeart from '../../shared/icons/heart.svg';
import iconHeartWhite from '../../shared/icons/heart-white.svg';

const BarContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  margin-right: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const LoginContainer = styled.div`
  width: 163px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const HeaderButtonsBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFavouritesPage = location.pathname === '/favourites';

  const navigateToFavourites = () => {
    navigate('/favourites');
  };

  return (
    <BarContainer>
      <IconContainer>
        <IconButton
          isActive={isFavouritesPage}
          iconActive={iconHeartWhite}
          iconDefault={iconHeart}
          onClickDefault={navigateToFavourites}
        />
      </IconContainer>

      <LoginContainer>
        <PrimaryButton title="sign in" />
      </LoginContainer>
    </BarContainer>
  );
};
