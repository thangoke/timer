import React, { useState } from 'react';
import './App.css';
import TimerSetup from './component/TimerSetup';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faPlay, faPause, faCog, faLock } from '@fortawesome/free-solid-svg-icons'
import Timer from './component/Timer';
import HomeScreen from './component/HomeScreen';

library.add(faCheckSquare, faCoffee, faPlay, faPause, faCog, faLock);

function App() {
  let [currentScreen, setCurrentScreen] = useState("home");

  let [hour, setHour] = useState(localStorage.getItem(`thangoke.timer/${""}hour`) || "00");
  let [minute, setMinute] = useState(localStorage.getItem(`thangoke.timer/${""}minute`) || "00");
  let [second, setSecond] = useState(localStorage.getItem(`thangoke.timer/${""}second`) || "15");

  const handleSetupClose = () => {
    setCurrentScreen("home");
    setHour(localStorage.getItem("thangoke.timer/hour") || "00");
    setMinute(localStorage.getItem("thangoke.timer/minute") || "00");
    setSecond(localStorage.getItem("thangoke.timer/second") || "15");
  }

  const handleOnChangeScreen = (screen: string) => {
    setCurrentScreen(screen);
  }

  return (
    <div className="App">
      {currentScreen === "home" && <HomeScreen title="Home" timeColor="white" onChangeScreen={(screen: string) => handleOnChangeScreen(screen)} hour={hour} minute={minute} second={second} />}

      {currentScreen === "setup" && <TimerSetup setupFor="" title="set time" timeColor="white" onClose={() => handleSetupClose()} />}

      {currentScreen === "setupAlarm" && <TimerSetup setupFor="alarm" title="set warning time" timeColor="yellow" onClose={() => handleSetupClose()} />}

      {currentScreen === "timer" && <Timer hour={hour} minute={minute} second={second} />}
    </div>

  );
}

export default App;
