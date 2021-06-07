import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Encuentro from './components/pages/Encuentro';
import Destino from './components/pages/Destino';
import Suerte from './components/pages/Suerte';
import Nacer from './components/pages/Nacer';
import Morir from './components/pages/Morir';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
<Switch>

<Route path="/" exact      component={Home} />
<Route path='/Encuentro' component={Encuentro} />
          <Route path='/Suerte' component={Suerte} />
          <Route path='/Destino' component={Destino} /> 
          <Route path='/Nacer' component={Nacer} /> 
          <Route path='/Morir' component={Morir} /> 
     
</Switch>



      </Router>
     
    </div>
  );
}

export default App;
