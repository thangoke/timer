import React from 'react';
import './App.css';
import TimerSetup from './component/TimerSetup';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faTriangleExclamation)

function App() {
  return (
    <div className="App">
      <TimerSetup />
    </div>

  );
}

export default App;
