// ##########  Everything needing import 🙂  ##########
import { NavLink } from 'react-router-dom';

// # styles
import './style.scss';

function HeaderNav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        activeClassName="navlink-active"
                        exact
                        to="/"
                        className="navlink"
                    >
                        <sp00 className="">00</span> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="navlink-active"
                        exact
                        to="/destinations"
                        className="navlink"
                    >
                        <sp00 className="">01</span> Destination
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeClassName="navlink-active"
                    exact
                    to="/crew"
                    className="navlink"
                    >
                        <sp00 className="">02</span> Crew
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeClassName="navlink-active"
                    exact
                    to="/technologies"
                    className="navlink"
                    >
                        <sp00 className="">03</span> Technology
                    </NavLink>
                </li>
            </ul>
        </nav>

<ul>
<li>
  <NavLink
    activeClassName="nav__item--active"
    exact
    to="/"
    className="nav__item"
  >
    Home
  </NavLink>
</li>
<li>
  <NavLink
    activeClassName="nav__item--active"
    exact
    to="/about"
    className="nav__item"
  >
    About
  </NavLink>
</li>
<li>
  <NavLink
    exact
    activeClassName="nav__item--active"
    to="/projects"
    className="nav__item"
  >
    Projects
  </NavLink>
</li>
</ul>
    )
}

export default HeaderNav;