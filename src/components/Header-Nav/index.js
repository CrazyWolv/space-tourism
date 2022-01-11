// ##########  Everything needing import 🙂  ##########
import { NavLink } from 'react-router-dom';

// # styles & images
import './style.scss';

const HeaderNav = () => {
    return (
      <header>
      <div className='navigation--container'>
        <img src='shared/logo.svg' className='navigation--logo' alt='Space Tourism Logo' title='Space Tourism Logo' height="45px" width="45px" />
        <div className='navigation--line' />
        <nav className='navigation'>
            <ul>
                <li>
                    <NavLink
                        activeclassname='navlink-active'
                        to='/'
                        className='navlink navtext'
                    >
                        <span className='strongNumber'>00</span> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeclassname='navlink-active'
                        to='/destinations'
                        className='navlink navtext'
                    >
                        <span className='strongNumber'>01</span> Destination
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeclassname='navlink-active'
                    to='/crew'
                    className='navlink navtext'
                    >
                        <span className='strongNumber'>02</span> Crew
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    activeclassname='navlink-active'
                    to='/technologies'
                    className='navlink navtext'
                    >
                        <span className='strongNumber'>03</span> Technology
                    </NavLink>
                </li>
            </ul>
        </nav>
      </div>
      </header>
    )
}

export default HeaderNav;