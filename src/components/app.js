import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import HomePage from './home';
import Header from './header';
import WebApp from './webapp';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// The App Component YuH
const App = () => {
  return (
    <Router>
      <div className="appContainer">
        <div className="headerContainer">
          <Header />
        </div>
        <div className="switchContainer">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/webapp" component={WebApp} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
