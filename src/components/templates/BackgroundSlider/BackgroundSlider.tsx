import './BackgroundSlider.scss';
import image1 from '../../../shared/images/banner_1.png';
import image2 from '../../../shared/images/banner_2.png';
import image3 from '../../../shared/images/banner_3.png';
import { useEffect, useState } from 'react';
import { Banner } from '../../organisms/Banner';

const images = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: 3, src: image3 },
];

export const BackgroundSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <section className="slider">
      {images.map(({ id, src }, index) => (
        <img
          key={id}
          className={`img-slide ${index === activeIndex ? 'active' : ''}`}
          src={src}
          alt={String(id)}
        />
      ))}

      <Banner />
    </section>
  );
};
