import styles from './ProductCard.module.scss';
import { PrimaryButton } from '../../atoms/buttons/PrimaryButton';
import { IconButton } from '../../atoms/buttons/IconButton';
import iconHeart from '../../../shared/icons/heart.svg';
import iconDelete from '../../../shared/icons/delete.svg';
import { Tour } from '../../../shared/types/Tour';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { favouritesState } from '../../../shared/stateManager/favouritesState';
import { Image } from '../../../shared/types/Image';

type Props = {
  item: Tour;
  image: Image,
}

export const ProductCard: React.FC<Props> = ({ item, image }) => {
  const favItems = useRecoilValue(favouritesState);
  const setFavourite = useSetRecoilState(favouritesState);

  const addItem = () => {
    setFavourite((oldFavourites) => [
      ...oldFavourites,
      item,
    ]);
  };

  const deleteItem = () => {
    setFavourite(oldFavourites => {
      return oldFavourites.filter(el => el.id !== item.id);
    });
  };

  const isCardInFav = () => favItems.some((favItem) => favItem.id === item.id);

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <img
          className={styles.image}
          src={image.src}
          alt={image.alt}
        />

        <h3 className={styles.title}>
          {item.mission_name}
        </h3>
      </div>

      <div className={styles.info}>
        <div className={styles.description}>
          {item.details || 'no description'}
        </div>

        <div className={styles.controls}>
          <div className={styles.button}>
            <PrimaryButton
              title="buy"
            />
          </div>

          <IconButton
            isActive={isCardInFav()}
            iconDefault={iconHeart}
            iconActive={iconDelete}
            onClickDefault={addItem}
            onClickActive={deleteItem}
          />
        </div>
      </div>
    </article>
  );
};
