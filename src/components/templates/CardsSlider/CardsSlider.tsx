import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOURS } from '../../../shared/api/queries';
import { Tour } from '../../../shared/types/Tour';
import { imageFiles } from '../../../shared/images/ImagesArray';
import { ProductCard } from '../../organisms/ProductCard';
import { SliderContainer } from '../../molecules/SliderContainer';

export const CardsSlider: React.FC = () => {
  const { data } = useQuery(GET_TOURS, {
    variables: {
      toursLimit: 10,
    }
  });
  const launches = data?.launches || [];

  return (
    <SliderContainer title='Popular Products'>
      {launches.map((item: Tour, index: number) => (
        <ProductCard
          key={item.id}
          item={item}
          image={imageFiles[index % imageFiles.length]}
        />
      ))}
    </SliderContainer>
  );
};
