import styles from './ProductCard.module.scss';
import { PrimaryButton } from '../../atoms/buttons/PrimaryButton';
import { IconButton } from '../../atoms/buttons/IconButton';
import iconHeart from '../../../shared/icons/heart.svg';
import iconDelete from '../../../shared/icons/delete.svg';
import { Tour } from '../../../shared/types/Tour';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { favouritesState } from '../../../shared/stateManager/favouritesState';

type Props = {
  item: Tour;
  image: string,
}

export const ProductCard: React.FC<Props> = ({ item, image }) => {
  const setFavourite = useSetRecoilState(favouritesState);
  const favItems = useRecoilValue(favouritesState);

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

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img
          className={styles.image__item}
          src={image}
          alt="alt"
        ></img>
      </div>

      <div className={styles.info}>
        <p className={styles.info__title}>{item.mission_name}</p>
        <p className={styles.info__desc}>
          {item.details || 'no description'}
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.controls__button}>
          <PrimaryButton
            title="buy"
          />
        </div>

        <div className={styles.controls__icon}>
          <IconButton
            isActive={favItems.some((favItem) => favItem.id === item.id)}
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
