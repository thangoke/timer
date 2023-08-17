import React, { useState } from 'react';
import './App.css';
import TimerSetup from './component/TimerSetup';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Timer from './component/Timer';

library.add(faCheckSquare, faCoffee, faPlay, faPause);

function App() {
  let [currentScreen, setCurrentScreen] = useState("setup");

  let [hour, setHour] = useState("00");
  let [minute, setMinute] = useState("00");
  let [second, setSecond] = useState("15");

  const handleSetupClose = () => {
    setCurrentScreen("timer");
    setHour(localStorage.getItem("thangoke.timer/hour") || "00");
    setMinute(localStorage.getItem("thangoke.timer/minute") || "00");
    setSecond(localStorage.getItem("thangoke.timer/second") || "15");
  }

  return (
    <div className="App">
      {currentScreen === "setup" && <TimerSetup setupFor="" onClose={() => handleSetupClose()} />}
      <div style={{ marginTop: "50px", marginBottom: "50px" }}></div>
      {currentScreen === "setup" && <TimerSetup setupFor="alarm" onClose={() => handleSetupClose()} />}
      <div style={{ marginTop: "50px", marginBottom: "50px" }}></div>
      {currentScreen === "timer" && <Timer hour={hour} minute={minute} second={second} />}
    </div>

  );
}

export default App;
