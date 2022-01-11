// ##########  Everything needing import 🙂  ##########
// # Packages
import { useState } from 'react';
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
    // function getScreenWidth(){
    //
    // }
  return (
    <>
      <div className="app">
              <HeaderNav />
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/destinations" element={<Destination />} />
                <Route exact path="/crew" element={<Crew />} />
                <Route exact path="/technologies" element={<Technology />} />
            </Routes>
      </div>
    </>
  );
}

export default App;
