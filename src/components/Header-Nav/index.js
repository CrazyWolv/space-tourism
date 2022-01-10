// ##########  Everything needing import 🙂  ##########
import { NavLink } from 'react-router-dom';

// # styles & images
import Logo from '/assets/shared/logo.svg'; 
import './style.scss';

const HeaderNav = () => {
    //TODO : const + function to get screen size to manage responsivness on tablet & mobile
    // function getScreenWidth(){
    //
    // }
    return (
      <header>
      <div className='navigation--container'>
        <img src={Logo} className='navigation--logo' alt='Space Tourism Logo' title='Space Tourism Logo' />
        <div className='navigation--line' />
        <nav className='navigation'>
            <ul>
                <li>
                    <NavLink
                        activeclassname="navlink-active"
                        exact
                        to="/"
                        className="navlink navtext"
                    >
                        <span className="strongNumber">00</span> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeclassname="navlink-active"
                        exact
                        to="/destinations"
                        className="navlink navtext"
                    >
                        <span className="strongNumber">01</span> Destination
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeclassname="navlink-active"
                    exact
                    to="/crew"
                    className="navlink navtext"
                    >
                        <span className="strongNumber">02</span> Crew
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeclassname="navlink-active"
                    exact
                    to="/technologies"
                    className="navlink navtext"
                    >
                        <span className="strongNumber">03</span> Technology
                    </NavLink>
                </li>
            </ul>
        </nav>
      </div>
      </header>
    )
}

export default HeaderNav;