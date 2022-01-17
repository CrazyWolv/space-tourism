// ##########  Everything needing import 🙂  ##########
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/shared/logo.svg';

// # styles & images
import './style.scss';

const HeaderNav = () => {
    return (
      <header>
      <div className='navigation--container'>
          <div className='navigation--container-content'>
            <div className='navigation--container-content-logo-nd-line'>
                    <img src={Logo} className='navigation--logo' alt='Space Tourism Logo' title='Space Tourism Logo' height="45px" width="45px" />
                    <div className='navigation--line' />
            </div>
            <nav className='navigation--links'>
                        <NavLink
                            to='/'
                            className='navtext nav-link'
                            activeClassName="-active"
                        ><span className='strongNumber'>00</span> Home
                        </NavLink>
                        <NavLink
                            to='/destinations'
                            className='navtext nav-link'
                            activeClassName="-active"
                        >
                            <span className='strongNumber'>01</span> Destination
                        </NavLink>
                        <NavLink
                            to='/crew'
                            className='navtext nav-link'
                            activeClassName="-active"
                        >
                            <span className='strongNumber'>02</span> Crew
                        </NavLink>
                        <NavLink
                            to='/technologies'
                            className='navtext nav-link'
                            activeClassName="-active"
                        >
                            <span className='strongNumber'>03</span> Technology
                        </NavLink>
            </nav>
            </div>
        </div>
    </header>
    )
}

export default HeaderNav;