// ##########  Everything needing import 🙂  ##########
// # Packages
import { Route, Switch } from 'react-router-dom';


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
    <>
      <header className="App-header">
        <HeaderNav />
      </header>
      
      <body>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/destinations">
            <Destination />
          </Route>
          <Route exact path="/crew">
            <Crew />
          </Route>
          <Route exact path="/technologies">
            <Technology />
          </Route>
      </Switch>
      </body>
    </>
  );
}

export default App;
