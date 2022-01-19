// ##########  Everything needing import 🙂  ##########
// # styles
import './style.scss';
import image from '../../assets/destination/image-moon.png';

//TODO:Carousel for destinations using a map

const Destination = ({data, isTablet, isMobile}) => {
    // console.log(data); //<-- OK
    
    return (
        <div className='destinations'>
            <div className='destinations-content'>
                <div className='title'><span className='title-darkNumber'>01</span> Pick your destination</div>
                <div className='destination-flex'>
                    <div className='destination-flex-content'>
                        <div className='destination-flex-image'>
                            <img src={image} alt='Moon destination' title='Moon destination' />
                        </div>

                        <div className='destination-flex-allText'>
                            <div className='destination-flex-allText--tabs'>
                                <div className='tabtext'>Moon</div>
                                <div className='tabtext'>Mars</div>
                                <div className='tabtext'>Europa</div>
                                <div className='tabtext'>Titan</div>
                            </div>

                            <h1>Moon</h1>

                            <div className='text destination-flex-allText--text'>
                                See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                                regain perspective and come back refreshed. While you’re there, take in some history 
                                by visiting the Luna 2 and Apollo 11 landing sites.
                            </div>

                            <div className='destination-flex-allText--subheadings'>
                                <div className='column'>
                                    <div className='subheading2'>Avg. distance</div>
                                    <div className='subheading1'>384,400 km</div>
                                </div>
                                <div className='column'>
                                    <div className='subheading2'>Est. travel time</div>
                                    <div className='subheading1'>3 days</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;