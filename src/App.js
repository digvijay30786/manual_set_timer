import { useState } from 'react';
import './App.css';
import Stopwatch from "./components/stopwatchApp";
import Inputtimer from "./components/inpuTimerApp";

function App() {
  return (
    <div className="App">
      <Stopwatch />
      <Inputtimer />
    </div>
  );
}

export default App;
