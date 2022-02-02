// ##########  Everything needing import 🙂  ##########
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import Logo from "../../assets/shared/logo.svg";
import Navbar from "./nav";

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
        <div className="navigation--container-content">
                <div className="navigation--container-content-logo-nd-line">
                        <img src={Logo} className="navigation--logo" alt="Space Tourism Logo" title="Space Tourism Logo" height="45px" width="45px" />
                        <div className="navigation--line" />
                </div>

                {/* Burger Menu displayed if the screen is mobile-sized  */}
                {isMobile && (open ?
                        <div className="close-icon-container"><FontAwesomeIcon icon={faBars} size="2x" className="close-icon-container--close-icon" onClick={(event) => {handleChange(event)}} /></div>
                    :
                    <>
                        <div className="close-icon-container">
                            <FontAwesomeIcon icon={faTimes} size="2x" className="close-icon-container--close-icon" onClick={(event) => {handleChange(event)}} />
                        </div>
                        <Navbar />
                    </>
                )}
            
                {/* Desktop Navbar */}
                {!isMobile && <Navbar />}
            </div>
        </div>
    </header>
    )
}

//  HeaderNav.propTypes = {
    //   isMobile: PropTypes.element,
// };

export default HeaderNav;