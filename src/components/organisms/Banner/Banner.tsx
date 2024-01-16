import './Banner.scss';
import { ExploreTours } from "../../atoms/ExploreTours";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__top">
        <p className="banner__text">the space is waiting for</p>
        <p className="banner__fulltext">you</p>
      </div>

      <ExploreTours />
    </section>
  );
};
