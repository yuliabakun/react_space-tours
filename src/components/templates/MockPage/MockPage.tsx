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
        {pageTitle}
      </div>
    </div>
  );
};
