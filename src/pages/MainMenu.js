import React from 'react';
import '../MainMenu.css';
import image from '../images/play_button.png';
import { useNavigate } from "react-router-dom"

function MainMenu() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className="fullScreen gameScreen">
        <div className="App-HangMan">
          HANGMAN
        </div>

        <button className="App-image-button" onClick={() => {navigate("/gamepage")}}>
          <img src={image} className="App-logo" alt="Play Button"/>
        </button>

        <div className="App-Horizontal">
            <button className="App-Button-How-To-Play" onClick={() => {navigate("/")}}>
              How to play
            </button>
            <button className="App-Button-About-Us" onClick={() => {navigate("/aboutus")}}>
              About Us
            </button>
        </div>
      </header>
    </div>
  );
}

export default MainMenu;