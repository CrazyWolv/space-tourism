//TODO -- LIST 
//TODO -- IMPORT PACKAGES IF NEEDED
//TODO -- TEST CODE
//TODO -- TEST DATA
//TODO -- CREATE TEMPLATES/APP STRUCTURE
//TODO -- STYLE EVERYTHING
//TODO -- GO FOR DYNAMAXING w/ DATA !
//TODO -- TESTING DATA & CODE
//TODO -- REFACTORING CODE IF NEEDED
//TODO -- TEST TEST TEST
//TODO -- DEPLOY :heart:

// ##########  Everything needing import 🙂  ##########
// # Components
import HeaderNav from '../Header-Nav'; // <-- Contains navigation
import Home from '../Home'; // <-- Homepage
import Destination from '../Destination'; // <-- Contains all destinations
import Crew from '../Crew'; // <-- Contains all crew members
import Technology from '../Technology'; // <-- Contains all technologies

// # Styles & Data (from JSON)
import './style.scss';
import data from '../../data/data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNav />
      </header>
      
      <Home />
      <Destination />
      <Crew />
      <Technology />
    
    </div>
  );
}

export default App;
