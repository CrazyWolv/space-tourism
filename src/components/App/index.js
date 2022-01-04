// # Everything needing import
// ######################################################
// ##########   All the other components 🙂   ##########
// ######################################################
import HeaderNav from '../HeaderNav';
import Home from '../Home';
import Destination from '../Header-Nav';
import Crew from '../Crew';
import Technology from '../Technology';


import data from '../../data/data.json';
import './style.scss';

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
