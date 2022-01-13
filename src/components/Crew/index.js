// ##########  Everything needing import 🙂  ##########
// # styles
import './style.scss';

//TODO:Carousel for crew members using a map

const Crew = ({data}) => {
    // console.log(data); //<-- OK
    
    return (
        <div className="crew">
        <div className="title"><span className='title-darkNumber'>02</span> Meet your crew</div>

        <h4>Commander</h4>
        <h2>Douglas Hurley</h2>

        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.

        </div>
    )
}

export default Crew;