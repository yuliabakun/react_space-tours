import React from 'react';
import styled from 'styled-components';
import * as colors from '../../shared/styles/variables.ts';

const StyledButton = styled.button`
  width: 100%;
  padding-block: 5px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${colors.lightBlue};
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    padding-block: 12px;
  }

  &:active {
    background-color: ${colors.blueGray};
  }
`;

type Props = {
  title: string;
  onClick?: () => void;
};

export const PrimaryButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {title}
    </StyledButton>
  );
};
