// ##########  Everything needing import 🙂  ##########
// import { useState } from "react";
import PropTypes from "prop-types";


// # styles
import "./style.scss";


//TODO:Set Order for technologies using CSS

const Technology = ({data, isTablet, isMobile}) => {
    // console.log(data); //<-- OK

    return (
        <div className="technology">
            <div className="technology-content">
                <div className="title"><span className="title-darkNumber">03</span> Space launch 101</div>

                <div className="technology-content--flex-container">
                    <div className="technology-content--flex-container--content">

            1
            2
            3
                
            The terminology...
            Spaceport
                
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
            by analogy to the seaport for ships or airport for aircraft. Based in the 
            famous Cape Canaveral, our spaceport is ideally situated to take advantage 
            of the Earth’s rotation for launch.
                    </div>
                </div>
            </div>
        </div>
    )
}

//  Technology.propTypes = {
    //   data: PropTypes.object,
    //   isMobile: PropTypes.element,
    //   isTablet: PropTypes.element,
    //   ...
// };

export default Technology;