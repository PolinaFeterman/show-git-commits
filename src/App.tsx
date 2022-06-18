import React from 'react';
import './App.css';
import Main from './containers/main';
import Navigation from './containers/navigation';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Main/>
    </div>
  );
}

export default App;