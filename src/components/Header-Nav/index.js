// ##########  Everything needing import 🙂  ##########
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import Logo from "../../assets/shared/logo.svg";

// # styles & images
import "./style.scss";

const HeaderNav = ({isMobile}) => {
    const [open, isOpen] = useState(true);

    const handleChange = () => {
        // console.log(open); // <== OK !
        isOpen(!open);
    }


    return (
      <header>
      <div className="navigation--container">
          
            
                {/* {!isMobile && <div className="navigation--container-content">
                    <div className="navigation--container-content-logo-nd-line">
                            <img src={Logo} className="navigation--logo" alt="Space Tourism Logo" title="Space Tourism Logo" height="45px" width="45px" />
                            <div className="navigation--line" />
                    </div>
                    <div className="navigation--links-container">
                        <nav className="navigation--links">
                                    <NavLink
                                        to="/"
                                        className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                    ><span className="strongNumber">00</span> Home
                                    </NavLink>
                                    <NavLink
                                        to="/destinations"
                                        className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                    >
                                        <span className="strongNumber">01</span> Destination
                                    </NavLink>
                                    <NavLink
                                        to="/crew"
                                        className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                    >
                                        <span className="strongNumber">02</span> Crew
                                    </NavLink>
                                    <NavLink
                                        to="/technologies"
                                        className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                    >
                                        <span className="strongNumber">03</span> Technology
                                    </NavLink>
                        </nav>
                    </div>} */}
                    
        <div className="navigation--container-content-mobile">
            <div className="navigation--container-content-mobile-logo-nd-line">
                    <img src={Logo} className="navigation--logo" alt="Space Tourism Logo" title="Space Tourism Logo" height="45px" width="45px" />
                    <div className="navigation--line" />
            </div>
                {open ?
                        <div className="close-icon-container"><FontAwesomeIcon icon={faBars} size="2x" className="close-icon-container--close-icon" onClick={(event) => {handleChange(event)}} /></div>
                    :
                    <>
                    <div className="close-icon-container">
                        <FontAwesomeIcon icon={faTimes} size="2x" className="close-icon-container--close-icon" onClick={(event) => {handleChange(event)}} />
                    </div>
                        <div className="navigation--links-container">
                            <nav className="navigation--links">
                                        <NavLink
                                            to="/"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                        ><span className="strongNumber">00</span> Home
                                        </NavLink>
                                        <NavLink
                                            to="/destinations"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                        >
                                            <span className="strongNumber">01</span> Destination
                                        </NavLink>
                                        <NavLink
                                            to="/crew"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                        >
                                            <span className="strongNumber">02</span> Crew
                                        </NavLink>
                                        <NavLink
                                            to="/technologies"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                        >
                                            <span className="strongNumber">03</span> Technology
                                        </NavLink>
                            </nav>
                        </div>
                        </>
                }
            </div>
        </div>
    </header>
    )
}

//  HeaderNav.propTypes = {
    //   isMobile: PropTypes.element,
// };

export default HeaderNav;