import React from 'react';

import Timer from './comonents/timer';
import './App.css';
import Navbar from './comonents/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <div>
       <Timer/>
       </div> 
     
     </div>
    
  );
}

export default App;
