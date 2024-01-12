import React from 'react';
import { ProductCard } from '../../organisms/ProductCard';
import { useQuery } from '@apollo/client';
import { GET_TOURS } from '../../../shared/api/queries';
import { Tour } from '../../../shared/types/Tour';

import image1 from '../../../shared/images/image_1.png';
import image2 from '../../../shared/images/image_2.png';
import image3 from '../../../shared/images/image_3.png';
import { SliderContainer } from '../../molecules/SliderContainer';
const images = [image1, image2, image3];

export const CardsSlider: React.FC = () => {
  // add loader and error handler
  const { data } = useQuery(GET_TOURS, {
    variables: {
      toursLimit: 20,
    }
  });

  const launches = data?.launches || [];

  return (
    <SliderContainer title='Popular tours'>
      {launches.map((item: Tour, index: number) => (
        <ProductCard
          key={item.id}
          item={item}
          image={images[index % images.length]}
        />
      ))}
    </SliderContainer>
  );
};
