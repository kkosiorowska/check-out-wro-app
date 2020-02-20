import React from 'react';

import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import MainContent from './containers/MainContent/MainContent';

function App() {
  return (
    <div className="App">
        <Toolbar/>
        <MainContent/>
    </div>
  );
}

export default App;
