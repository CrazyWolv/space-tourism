// ##########  Everything needing import 🙂  ##########
import { useState } from "react";
import PropTypes from "prop-types";

// # styles
import "./style.scss";
// import image from "../../assets/crew/image-douglas-hurley.png"; // <-- STATIC IMPORT

//TODO:Set Order for crew members using CSS

const Crew = ({crewData, isTablet, isMobile}) => {
    // == HOOKS TO MANAGE STATE ON LINKS & ADD ACTIVE CLASS TO CSS
    const [crewRole, setCrewRole] = useState("Commander");
    const [isCommActive, setCommActive] = useState(true);
    const [isMissSpeActive, setMissSpeActive] = useState(false);
    const [isPilotActive, setPilotActive] = useState(false);
    const [isFlightActive, setFlightActive] = useState(false);

    // == FUNCTION TO MANAGE THE CLICK ON PLANET NAMES + SET ACTIVE CLASS TO CSS
    const handleChange = (event, job) => {
        setCrewRole(job);
        switch (job) {
            case "Commander":
                setCommActive(true);
                setMissSpeActive(false);
                setPilotActive(false);
                setFlightActive(false);
              break;
            case "Mission Specialist":
                setCommActive(false);
                setMissSpeActive(true);
                setPilotActive(false);
                setFlightActive(false);
                break;
            case "Pilot":
                setCommActive(false);
                setMissSpeActive(false);
                setPilotActive(true);
                setFlightActive(false);
              break;
            case "Flight Engineer":
                setCommActive(false);
                setMissSpeActive(false);
                setPilotActive(false);
                setFlightActive(true);
            break;
            default:
                setCommActive(true);
          }
    };

    
    // == FUNCTION TO CHANGE UP EVERY TEXT CONTENT AT CLICK
    const welcomeAboard = crewData.find(guy => {
        return guy.role === crewRole
    });

    // == FUNCTION TO REQUIRE IMAGES FROM JSON & SLUGIFY NAMES TO MATCH WITH IMAGE'S NAME
    const img = (imgName) => {
        var slugify = require('slugify');
        
        if(isMobile){
            return require (`../../assets/crew/image-${slugify(imgName)}.png`);
        }else{
            return require (`../../assets/crew/image-${slugify(imgName)}.webp`);
        }
    };


    // EVERY CONSOLE.LOG TO KNOW IF EVERYTHING'S OKAY
    // console.log(data); //<-- OK
    // console.log(img(welcomeAboard.name)); // <-- OK
    // console.log(welcomeAboard.images); // <-- OK
    // console.log(isCommActive, isMissSpeActive, isPilotActive, isFlightActive); // <-- OK
    
    return (
        <div className="crew">
            <div className="crew-content">
                <div className="title"><span className="title-darkNumber">02</span> Meet your crew</div>
                        <div className="crew-content--flex--image-container">
                            <div className="crew-content--flex--image-container--content-img">
                                <img src={img(welcomeAboard.name.toLowerCase())} alt={`${welcomeAboard.name}`} title={`${welcomeAboard.name}`}/>
                            </div>
                        </div>

                <div className="crew-content--container">
                    <div className="crew-content--container--content">
                        <div className="crew-content--container--content-flex-container-left">
                            <div className="crew-content--container--content-flex-container-left--content-allText">
                                <div className="crew-content--container--content-flex-container-left--content-allText--crew-job">{crewRole}</div>
                                <h2>{welcomeAboard.name}</h2>

                                <div className="text crew-content--container--content-flex-container-left--content-allText--text">
                                    {welcomeAboard.bio}
                                    {/* STATIC CODE -- 
                                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                                        and former NASA astronaut. He launched into space for the third time as 
                                        commander of Crew Dragon Demo-2. 
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="crew-content--container--carousel">
                    <div className="crew-content--container--carousel--content">
                        {crewData.map(crewMember => {
                            const isActive = (job) => {
                                if(job==="Commander" && isCommActive){
                                    return `comm--active`;
                                        }else if(job==="Mission Specialist" && isMissSpeActive){
                                            return `missSpe--active`;
                                        }else if(job==="Pilot" && isPilotActive){
                                            return `pilot--active`;
                                        }else if(job==="Flight Engineer" && isFlightActive){
                                            return `flight--active`;
                                        }
                                    }
                                        return <div className={`carousel-dot ${isActive(crewMember.role)}`} key={crewMember.name} onClick={(event) => {handleChange(event, crewMember.role)}} />
                                        })
                                    }
                        {/* STATIC CODE --
                            <div className="carousel-dot" /><div className="carousel-dot" /><div className="carousel-dot" /> 
                        */}
                    </div>
                </div>
            </div>
        </div>
    )
}

//  Crew.propTypes = {
    //   data:PropTypes.object,
    //   isMobile: PropTypes.element,
    //   isTablet: PropTypes.element,
    //   ...
// };

export default Crew;