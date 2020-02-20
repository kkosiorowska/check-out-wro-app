import React from 'react';

import classes from'./App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import MainContent from './containers/MainContent/MainContent';

function App() {
  return (
    <div className={classes.App}>
        <Toolbar/>
        <MainContent/>
    </div>
  );
}

export default App;
