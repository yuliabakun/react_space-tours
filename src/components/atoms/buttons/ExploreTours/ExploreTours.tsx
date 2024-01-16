import styles from './ExploreTours.module.scss';

export const ExploreTours = () => {
  const handleScrollDown = () => {
    const scrollPosition = window.innerHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleScrollDown}
    >
      <span className={styles.button__text}>
        Explore Tours
      </span>

      <div className={styles.button__arrow} />
    </button>
  );
};
