// ##########  Everything needing import 🙂  ##########
import { useState } from 'react';


// # styles
import './style.scss';

export const CarouselInside = ({children, width}) => {
    return(
        <div className='carousel-inside-item' style={{width : width}}>
            {children}
        </div>
    )
}


const Carousel = ({children}) => {
    return (
        <div className='carousel'>
            <div className='carousel-inside' style={{transform:'translateX(-0%)'}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width:'100%'});
                })}
        {/* TODO:Carousel for crew members/destinations/technologies using a map
            
        */}
            </div>
        </div>
    )
}

export default Carousel;