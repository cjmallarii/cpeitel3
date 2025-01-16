import './App.css';
import { useState } from "react";

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const fullName = "CARL JUNNEL MALLARI"; // Change to your full name
  const section = "IT3A";
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");

  const items = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const handleKeyClick = (index) => {
    if (index >= 0 && index < items.length) {
      setDisp(items[index]);
    }
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const surnameClickHandler = () => {
    setDisp(fullName);
  };

  // New click handlers for the additional buttons
  const whatILearnedClickHandler = () => {
    setDisp("React and JavaScript");
  };

  const whatIWantToLearnClickHandler = () => {
    setDisp("Web Development");
  };

  const howWillILearnClickHandler = () => {
    setDisp("By doing some advance reading and doing some trial and error with my code");
  };

  return (
    <div className="App">
      <h1>{`${fullName} - ${section}`}</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
  <Key label={1} clickHandler={() => handleKeyClick(0)} />
  <Key label={2} clickHandler={() => handleKeyClick(1)} />
  <Key label={3} clickHandler={() => handleKeyClick(2)} />
  <Key label={4} clickHandler={() => handleKeyClick(3)} />
  <Key label={5} clickHandler={() => handleKeyClick(4)} />
  <Key label={6} clickHandler={() => handleKeyClick(5)} />
  <Key label={7} clickHandler={() => handleKeyClick(6)} />
  <Key label={8} clickHandler={() => handleKeyClick(7)} />
  <Key label={9} clickHandler={() => handleKeyClick(8)} />
  <Key label={0} clickHandler={() => handleKeyClick(9)} />
  <Key label={"RESET"} clickHandler={resetClickHandler} className="reset-button" />
  <Key label={"NAME"} clickHandler={surnameClickHandler} className="name-button surname" />
  {/* New buttons */}
  <Key label={"What I learned?"} clickHandler={whatILearnedClickHandler} className="learn-button" />
  <Key label={"What I want to learn?"} clickHandler={whatIWantToLearnClickHandler} className="learn-button" />
  <Key label={"How will I learn?"} clickHandler={howWillILearnClickHandler} className="learn-button" />
</div>
      </div>
    </div>
  );
}

export default App;
