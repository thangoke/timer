import React from 'react';
import './App.css';
import TimerSetup from './component/TimerSetup';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Timer from './component/Timer';

library.add(faCheckSquare, faCoffee, faPlay, faPause);

function App() {
  return (
    <div className="App">
      <TimerSetup />
      <div style={{ marginTop: "50px", marginBottom: "50px" }}></div>
      <Timer />
    </div>

  );
}

export default App;
