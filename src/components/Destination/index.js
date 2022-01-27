// ##########  Everything needing import 🙂  ##########
import { useState } from "react";
import PropTypes from "prop-types";

// # styles
import "./style.scss";
// import image from "../../assets/destination/image-moon.png"; // <-- STATIC IMPORT

//TODO:Set Order for destinations using a css

const Destination = ({destinationData, isTablet, isMobile}) => {
    // == HOOKS TO MANAGE STATE ON LINKS & ADD ACTIVE CLASS TO CSS
    const [destination, setDestination] = useState("Moon");
    const [isMoonActive, setMoonActive] = useState(true);
    const [isMarsActive, setMarsActive] = useState(false);
    const [isEuropaActive, setEuropaActive] = useState(false);
    const [isTitanActive, setTitanActive] = useState(false);

    // == FUNCTION TO MANAGE THE CLICK ON PLANET NAMES + SET ACTIVE CLASS TO CSS
    const handleChange = (event, name) => {
        setDestination(name);
        switch (name) {
            case "Moon":
                setMoonActive(true);
                setMarsActive(false);
                setEuropaActive(false);
                setTitanActive(false);
              break;
            case "Mars":
                setMoonActive(false);
                setMarsActive(true);
                setEuropaActive(false);
                setTitanActive(false);
                break;
            case "Europa":
                setMoonActive(false);
                setMarsActive(false);
                setEuropaActive(true);
                setTitanActive(false);
              break;
            case "Titan":
                setMoonActive(false);
                setMarsActive(false);
                setEuropaActive(false);
                setTitanActive(true);
            break;
            default:
                setMoonActive(true);
          }
    };

    
    // == FUNCTION TO CHANGE UP EVERY TEXT CONTENT AT CLICK
    const weRgoingThere = destinationData.find(planet => {
        return planet.name === destination
    });

    // == FUNCTION TO REQUIRE IMAGES FROM JSON
    const img = (imgName) => {
        if(isMobile){
            return require (`../../assets/destination/image-${imgName.toLowerCase()}.png`);
        }else{
            return require (`../../assets/destination/image-${imgName.toLowerCase()}.webp`);
        }
    };


    // EVERY CONSOLE.LOG TO KNOW IF EVERYTHING'S OKAY
    // console.log(data); //<-- OK
    // console.log(img(destination)); // <-- OK
    // console.log(weRgoingThere.images); // <-- OK
    // console.log(isMoonActive, isMarsActive, isEuropaActive, isTitanActive); // <-- OK
    
    return (
        <div className="destinations">
            <div className="destinations-content">
                <div className="title"><span className="title-darkNumber">01</span> Pick your destination</div>
                <div className="destination-flex">
                    <div className="destination-flex-content">
                        <div className="destination-flex-allText">
                            <div className="destination-flex-allText--tabs">
                                {destinationData.map(destination => {
                                    const isActive = (name) => {
                                        if(name==="moon" && isMoonActive){
                                            return `moon--active`;
                                        }else if(name==="mars" && isMarsActive){
                                            return `mars--active`;
                                        }else if(name==="europa" && isEuropaActive){
                                            return `europa--active`;
                                        }else if(name==="titan" && isTitanActive){
                                            return `titan--active`;
                                        }
                                    }
                                        return <div className={`tabtext ${isActive(destination.name.toLowerCase())}`} key={destination.name} onClick={(event) => {handleChange(event, destination.name)}}>{destination.name}</div>
                                        })
                                }
                                {/* STATIC CODE -- 
                                    <div className="tabtext" id="Moon" onClick={(event) => {handleChange(event, "Moon")}}>Moon</div>
                                    <div className="tabtext" id="Mars" onClick={(event) => {handleChange(event, "Mars")}}>Mars</div>
                                    <div className="tabtext" id="Europa" onClick={(event) => {handleChange(event, "Europa")}}>Europa</div>
                                    <div className="tabtext" id="Titan" onClick={(event) => {handleChange(event, "Titan")}}>Titan</div> 
                                */}
                            </div>

                            <h1>{ weRgoingThere.name }</h1>

                            <div className="text destination-flex-allText--text">
                                { weRgoingThere.description }
                                {/* STATIC CODE -- 
                                    See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                                    regain perspective and come back refreshed. While you’re there, take in some history 
                                    by visiting the Luna 2 and Apollo 11 landing sites. 
                                */}
                            </div>

                            <div className="destination-flex-allText--subheadings">
                                <div className="column">
                                    <div className="subheading2">Avg. distance</div>
                                    <div className="subheading1"> { weRgoingThere.distance }
                                        {/* STATIC CODE -- 
                                            384,400 km 
                                        */}
                                        </div>
                                </div>
                                <div className="column">
                                    <div className="subheading2">Est. travel time</div>
                                    <div className="subheading1">{ weRgoingThere.travel }
                                        {/* STATIC CODE -- 
                                            3 days 
                                        */}</div>
                                </div>
                            </div>
                        </div>

                        <div className="destination-flex-image">
                                <img src={img(destination.toLowerCase())} alt={`${weRgoingThere.name} destination`} title={`${weRgoingThere.name} destination`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//  Destination.propTypes = {
    //   data:PropTypes.object,
    //   isMobile: PropTypes.element,
    //   isTablet: PropTypes.element,
    //   ...
// };

export default Destination;