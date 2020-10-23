import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, Log, Day1, Day2, Day3, Day4 } from './pages';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/log' component={Log} />
          <Route path='/1' component={Day1} />
          <Route path='/2' component={Day2} />
          <Route path='/3' component={Day3} />
          <Route path='/4' component={Day4} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
