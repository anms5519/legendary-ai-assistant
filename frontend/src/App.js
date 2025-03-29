import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Assistant from './components/Assistant';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Assistant} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
