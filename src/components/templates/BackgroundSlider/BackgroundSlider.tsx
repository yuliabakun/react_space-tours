import { useState, useEffect } from 'react';
import './BackgroundSlider.scss';
import { bannerFiles } from '../../../shared/images/ImagesArray';
import { Banner } from '../../organisms/Banner';

export const BackgroundSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === bannerFiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      {bannerFiles.map(({ id, src, alt }, index) => (
        <img
          key={id}
          src={src}
          className={`img-slide ${index === activeIndex ? 'active' : ''}`}
          alt={alt}
        />
      ))}

      <Banner />
    </section>
  );
};
