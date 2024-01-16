import styled from 'styled-components';
import * as colors from '../../shared/styles/variables.ts';
import arrowDown from '../../shared/icons/arrow-down.svg';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  cursor: pointer;
  z-index: 999;
  position: absolute;
  bottom: 30px;
`;

const StyledText = styled.span`
  font-family: 'Lato';
  font-size: 32px;
  color: ${colors.white};
  text-shadow: ${`${colors.black} 0px 0px 2px`};
`;

const StyledArrow = styled.div`
  background-image: url(${arrowDown});
  background-position: center;
  margin-left: 10px;
  height: 30px;
  width: 30px;
`;

export const ExploreTours = () => {
  const handleScrollDown = () => {
    const scrollPosition = window.innerHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <StyledButton type="button" onClick={handleScrollDown}>
      <StyledText>Explore Tours</StyledText>
      <StyledArrow />
    </StyledButton>
  );
};
