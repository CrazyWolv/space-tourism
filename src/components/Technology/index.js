// ##########  Everything needing import 🙂  ##########
import { useState } from "react";
import PropTypes from "prop-types";


// # styles
import "./style.scss";
// import image from "../../assets/technology/image-launch-vehicle-portrait.jpg"; // <-- STATIC IMPORT


const Technology = ({techData, isTablet, isMobile}) => {
    // == HOOKS TO MANAGE STATE ON LINKS & ADD ACTIVE CLASS TO CSS
    const [technology, setTechnology] = useState("Launch vehicle");
    const [isLaunchVActive, setLaunchVActive] = useState(true);
    const [isSpaceportActive, setSpaceportActive] = useState(false);
    const [isSpaceCapActive, setSpaceCapActive] = useState(false);

    // == FUNCTION TO MANAGE THE CLICK ON PLANET NAMES + SET ACTIVE CLASS TO CSS
    const handleChange = (event, name) => {
        setTechnology(name);
        switch (name) {
            case "Launch vehicle":
                setLaunchVActive(true);
                setSpaceportActive(false);
                setSpaceCapActive(false);
                break;
            case "Spaceport":
                setLaunchVActive(false);
                setSpaceportActive(true);
                setSpaceCapActive(false);
              break;
            case "Space capsule":
                setLaunchVActive(false);
                setSpaceportActive(false);
                setSpaceCapActive(true);
              break;
            default:
                setLaunchVActive(true);
          }
    };

    // == FUNCTION TO CHANGE UP EVERY TEXT CONTENT AT CLICK
    const hereIsYourVehicle = techData.find(vehicle => {
        return vehicle.name === technology
    });


    // == FUNCTION TO REQUIRE IMAGES FROM JSON & SLUGIFY NAMES TO MATCH WITH IMAGE'S NAME
    const img = (imgName) => {
        var slugify = require('slugify');

        if(isTablet || isMobile){
            return require (`../../assets/technology/image-${slugify(imgName)}-landscape.jpg`);
        }else{
            return require (`../../assets/technology/image-${slugify(imgName)}-portrait.jpg`);
        }
    };

    // EVERY CONSOLE.LOG TO KNOW IF EVERYTHING'S OKAY
    // console.log(techData); //<-- OK
    // console.log(img(technology)); // <-- OK

    return (
        <div className="technology">
            <div className="technology-content">
                <div className="title"><span className="title-darkNumber">03</span> Space launch 101</div>

                <div className="technology-content--image-container">
                    <div className="technology-content--image-container--image">
                        <img src={img(technology.toLowerCase())} alt={(technology)} title={(technology)} />
                    </div>
                </div>

                <div className="technology-flex">
                    <div className="technology-flex-allText-nd-buttons">
                        <div className="technology-flex-allText-nd-buttons--buttons-container">
                            {techData.map(vehicle => {
                                const setButtonNumber = (name) => {
                                    if(name==="Launch vehicle"){
                                        return "1";
                                            }else if(name==="Spaceport"){
                                                return "2";
                                            }else if(name==="Space capsule"){
                                                return "3";
                                            }
                                        }
                                
                                const isActive = (name) => {
                                    if(name==="Launch vehicle" && isLaunchVActive){
                                        return "technology-flex-allText-nd-buttons--buttons-container--button launchV-active";
                                            }else if(name==="Spaceport" && isSpaceportActive){
                                                return "technology-flex-allText-nd-buttons--buttons-container--button spaceport-active";
                                            }else if(name==="Space capsule" && isSpaceCapActive){
                                                return "technology-flex-allText-nd-buttons--buttons-container--button spaceCap-active";
                                            }else{
                                                return "technology-flex-allText-nd-buttons--buttons-container--button"
                                            }
                                        }
                                        return <div className={isActive(vehicle.name)} key={vehicle.name} onClick={(event) => {handleChange(event, vehicle.name)}}>
                                             {setButtonNumber(vehicle.name)}
                                        </div>
                            })}
                        {/* STATIC CODE --
                            <div className="carousel-dot" /><div className="carousel-dot" /><div className="carousel-dot" /> 
                        */}
                            {/* STATIC CODE -- 
                                <div className="technology-flex-allText-nd-buttons--buttons-container--button launchV-active">1</div>
                                <div className="technology-flex-allText-nd-buttons--buttons-container--button">2</div>
                                <div className="technology-flex-allText-nd-buttons--buttons-container--button">3</div> 
                            */}
                        </div>
                
                        <div className="technology-flex-allText-nd-buttons--allText-container">
                            <div className="technology-flex-allText-nd-buttons--allText-container--headingText">The terminology...</div>
                            <div className="technology-flex-allText-nd-buttons--allText-container--titleText">{technology}
                                {/* STATIC CODE -- Launch vehicle */}
                            </div>
                    
                            <div className="technology-flex-allText-nd-buttons--allText-container--description">{hereIsYourVehicle.description}
                                {/* STATIC CODE -- 
                                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! 
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Technology.propTypes = {
    techData:PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            images: PropTypes.object.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    isTablet:PropTypes.bool.isRequired,
    isMobile:PropTypes.bool.isRequired,
}

export default Technology;