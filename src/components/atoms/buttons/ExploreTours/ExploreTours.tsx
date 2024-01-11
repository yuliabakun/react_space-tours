import './ExploreTours.scss';
import arrowDown from '../../../../shared/icons/arrow-down.svg';

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
      className="explore-tours-button"
      onClick={handleScrollDown}
    >
      <span className="explore-tours-button__text">
        Explore Tours
      </span>

      <img src={arrowDown} alt="arrow down" />
    </button>
  );
};
