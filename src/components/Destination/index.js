// ##########  Everything needing import 🙂  ##########
import { useState } from "react";
import PropTypes from "prop-types";

// # styles
import "./style.scss";
// import image from "../../assets/destination/image-moon.png"; // <-- STATIC IMPORT

const Destination = ({destinationData}) => {
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
                                        if(name==="Moon" && isMoonActive){
                                            return "tabtext moon--active";
                                        }else if(name==="Mars" && isMarsActive){
                                            return "tabtext mars--active";
                                        }else if(name==="Europa" && isEuropaActive){
                                            return "tabtext europa--active";
                                        }else if(name==="Titan" && isTitanActive){
                                            return "tabtext titan--active";
                                        }else{
                                            return "tabtext"
                                        }
                                    }
                                        return <div className={isActive(destination.name)} key={destination.name} onClick={(event) => {handleChange(event, destination.name)}}>{destination.name}</div>
                                        })
                                }
                            </div>

                            <div className="destination-flex-allText--title">{ weRgoingThere.name }</div>

                            <div className="text text destination-flex-allText--text">
                                { weRgoingThere.description }
                            </div>

                            <div className="text destination-flex-allText--line" />
                            <div className="destination-flex-allText--subheadings">
                                <div className="column">
                                    <div className="subheading2">Avg. distance</div>
                                    <div className="subheading1"> { weRgoingThere.distance }
                                        </div>
                                </div>
                                <div className="column">
                                    <div className="subheading2">Est. travel time</div>
                                    <div className="subheading1">{ weRgoingThere.travel }
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="destination-flex-image">
                                <picture>
                                    <source srcSet={require (`../../assets/destination/image-${destination.toLowerCase()}.webp`)} />
                                    <img src={require (`../../assets/destination/image-${destination.toLowerCase()}.png`)}
                                        alt={`${weRgoingThere.name} destination`} 
                                        title={`${weRgoingThere.name} destination`} 
                                    />
                                </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Destination.propTypes = {
    destinationData:PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            images: PropTypes.object.isRequired,
            description: PropTypes.string.isRequired,
            distance: PropTypes.string.isRequired,
            travel: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Destination;