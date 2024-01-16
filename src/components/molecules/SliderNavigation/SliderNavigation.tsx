import React from 'react';
import { Image } from '../../../shared/types/Image';

type Props = {
  slides: Image[],
  activeIndex: number,
  onSlideClick: (index: number) => void,
}

export const SliderNavigation: React.FC<Props> = ({
  slides,
  activeIndex,
  onSlideClick,
}) => {
  return (
    <div className="slider-navigation">
      {slides.map((item) => (
        <div
          key={item.id}
          className={`nav-btn ${item.id === activeIndex ? 'active' : ''}`}
          onClick={() => onSlideClick(item.id)}
        ></div>
      ))}
    </div>
  );
};
