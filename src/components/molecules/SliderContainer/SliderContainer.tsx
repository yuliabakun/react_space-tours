import React, { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import './SliderContainer.scss';
import Slider from 'react-slick';
import { SamplePrevArrow } from '../../atoms/arrows/SamplePrevArrow';
import { SampleNextArrow } from '../../atoms/arrows/SampleNextArrow';

type Props = {
  children: ReactNode;
  title: string;
}

export const SliderContainer: React.FC<Props> = ({
  children,
  title,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow isDisabled={false} onClick={() => { }} />,
    nextArrow: <SampleNextArrow isDisabled={false} onClick={() => { }} />,
    customPaging: function (i: number) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="slider-container__title">{title}</h2>

      <Slider {...settings} className="slider-container__slider">
        {children}
      </Slider>
    </div>
  );
};
