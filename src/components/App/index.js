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
    // console.log(data); //<-- OK

    
  return (
    <>
      <div className="app">
              <HeaderNav />
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/destinations" element={<Destination data={data.destinations} />} />
                <Route exact path="/crew" element={<Crew data={data.crew}/>} />
                <Route exact path="/technologies" element={<Technology data={data.technology} />} />
            </Routes>
      </div>
    </>
  );
}

export default App;
