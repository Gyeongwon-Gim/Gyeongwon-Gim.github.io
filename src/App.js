import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import profile from "./img_profile.png";
function App() {
  const greetings = ["안녕하세요!", "Hello!", "Ciao!"];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreeting((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header>
        <img id="profile" src={profile} alt="프로필 이미지"></img>
        {/* <button id="themeToggle">switch</button> */}
      </header>
      <h1 id="blinking-text">{greetings[currentGreeting]}</h1>
    </div>
  );
}

export default App;
