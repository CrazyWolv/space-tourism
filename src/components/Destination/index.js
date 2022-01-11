// ##########  Everything needing import 🙂  ##########
// # styles
import './style.scss';

//TODO:Carousel for destinations using a map

const Destination = () => {
    return (
        <div className="destinations text">
            <div className="title"><span className='title-darkNumber'>01</span> Pick your destination</div>

            <div className="destination-flex">
                <div className="navtext">Moon</div>
                <div className="navtext">Mars</div>
                <div className="navtext">Europa</div>
                <div className="navtext">Titan</div>
            </div>

            <h1>Europa</h1>

            The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
            winter lover’s dream. With an icy surface, it’s perfect for a bit of 
            ice skating, curling, hockey, or simple relaxation in your snug 
            wintery cabin.

            <div className="subheading2">Avg. distance</div>
            <div className="subheading1">628 mil. km</div>

            <div className="subheading2">Est. travel time</div>
            <div className="subheading1">3 years</div>
        </div>
    )
}

export default Destination;