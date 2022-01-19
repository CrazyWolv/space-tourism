// ##########  Everything needing import 🙂  ##########
// # Packages
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';


// # Components
import HeaderNav from '../Header-Nav'; // <-- Contains navigation
import Home from '../Home'; // <-- Homepage
import Destination from '../Destination'; // <-- Contains all destinations
import Crew from '../Crew'; // <-- Contains all crew members
import Technology from '../Technology'; // <-- Contains all technologies


// # Styles & Data (from JSON)
import './style.scss';
import data from '../../data/data.json';



const App = () => {
  //TODO : const + function to get screen size to manage responsivness on tablet & mobile
  const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    
  // console.log(data); //<-- OK


  return (
    <>
      <div className="app">
        <HeaderNav isTablet={isTablet} isMobile={isMobile} />
            
            <Routes>
                <Route exact path="/" element={<Home isTablet={isTablet} isMobile={isMobile} />} />
                <Route exact path="/destinations" element={<Destination data={data.destinations} isTablet={isTablet} isMobile={isMobile} />} />
                <Route exact path="/crew" element={<Crew data={data.crew} isTablet={isTablet} isMobile={isMobile} />} />
                <Route exact path="/technologies" element={<Technology data={data.technology} isTablet={isTablet} isMobile={isMobile} />} />
            </Routes>
      </div>
    </>
  );
}

export default App;
