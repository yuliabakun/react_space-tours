import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './NavBar.scss';

enum NavTitles {
  HOME = 'home',
  TOURS = 'tours',
  ABOUT = 'about',
  HELP = 'help',
}

export const NavBar = () => {
  const isActiveLink = ({ isActive } : { isActive: boolean }) => {
    return cn('navlink', { 'navlink--active': isActive });
  }

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {Object.values(NavTitles).map(title => (
          <li key={title} className="navbar__item">
            <NavLink
              to={title === NavTitles.HOME ? '/' : `/${title}`}
              className={isActiveLink}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};