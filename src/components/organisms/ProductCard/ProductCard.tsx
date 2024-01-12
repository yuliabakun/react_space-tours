import styles from './ProductCard.module.scss';
import image1 from '../../../shared/images/image_1.png';
import { PrimaryButton } from '../../atoms/buttons/PrimaryButton';
import { IconButton } from '../../atoms/buttons/IconButton';
import iconHeart from '../../../shared/icons/heart.svg';

export const ProductCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img
          className={styles.image__item}
          src={image1}
          alt="alt"
        ></img>
      </div>

      <div className={styles.info}>
        <p className={styles.info__title}>Title</p>
        <p className={styles.info__desc}>Desjkdgherklsvbqejknadfh</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.controls__button}>
          <PrimaryButton
            title="buy"
          />
        </div>


        <IconButton
          iconDefault={iconHeart}
          onClickDefault={() => { }}
        />
      </div>
    </article>
  );
};