// ##########  Everything needing import 🙂  ##########
import PropTypes from 'prop-types';

// # styles
import './style.scss';
import image from '../../assets/crew/image-douglas-hurley.png';

//TODO:Carousel for crew members using a map

const Crew = ({data, isTablet, isMobile}) => {
    // console.log(data); //<-- OK
    
    return (
        <div className="crew">
            <div className='crew-content'>
                <div className="title"><span className='title-darkNumber'>02</span> Meet your crew</div>

                <div className='crew-content--flex-container'>
                    <div className='crew-content--flex-container--content'>
                        <div className='crew-content--flex-container--content-allText'>
                        <div className='crewmember-function'>Commander</div>
                        <h2>Douglas Hurley</h2>

                        <div className='text crew-content--flex-container--content-allText--text'>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.
                        </div>
                        </div>
                        <div className='crew-content--flex-container--content-carousel-nd-image'>
                            <div className='crew-content--flex-container--content-carousel-nd-image--carousel'>
                                <div className='carousel-dot' /><div className='carousel-dot' /><div className='carousel-dot' />
                            </div>
                            <div className='crew-content--flex-container--content-carousel-nd-image--image'>
                                {/* <img src={image} alt='Crew member' title='crew member'/> */}
                            </div>
                        </div>
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