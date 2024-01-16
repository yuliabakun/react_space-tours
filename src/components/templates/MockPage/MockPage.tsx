import React from 'react';
import './MockPage.scss'

type Props = {
  pageTitle: string;
}

export const MockPage: React.FC<Props> = ({
  pageTitle,
}) => {
  return (
    <div className="mock">
      <div className="mock__image">
        <h3 className="mock__image__text">{pageTitle}</h3>
      </div>
    </div>
  );
};
