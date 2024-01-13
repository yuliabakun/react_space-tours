import { useRecoilValue, useSetRecoilState } from "recoil";
import { favouritesState } from "../../../shared/stateManager/favouritesState";
import { ProductCard } from "../../organisms/ProductCard";
import { Tour } from "../../../shared/types/Tour";
import './FavouritesPage.scss';

import image1 from '../../../shared/images/image_1.png';
import image2 from '../../../shared/images/image_2.png';
import image3 from '../../../shared/images/image_3.png';
const images = [image1, image2, image3];

export const FavouritesPage = () => {
  const favouriteItems = useRecoilValue(favouritesState);
  const setFavourite = useSetRecoilState(favouritesState);

  const clearFavourites = () => {
    setFavourite([]);
  };

  return (
    <div className="favpage-container">
      <div className="favpage-image">
        <h1 className="favpage-title">Favourites</h1>
      </div>

      <div className="favpage-clear">
        <button
          type="button"
          className="favpage-clear__button"
          onClick={clearFavourites}
        >
          Clear all
        </button>
      </div>

      <div className="favpage-cards">
        {favouriteItems.map((item: Tour, index) => (
          <ProductCard
            key={item.id}
            item={item}
            image={images[index % images.length]}
          />
        ))}
      </div>
    </div>
  );
};
