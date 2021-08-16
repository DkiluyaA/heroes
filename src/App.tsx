import React from 'react';

import './App.css';
import Marvel from "./components/Marvel";
import DC from "./components/DC";

function App() {
    return (
      <div className="App">
        <div className='table-column'>
          <Marvel />
        </div>
        <div className='table-column'>
          <DC />
        </div>
      </div>
  );
}

export default App;
