import React from 'react';
// import '../MainMenu.css';
import image from '../images/play_button.png';
import { useNavigate } from "react-router-dom";

function MainMenu() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className="fullScreen">
        <h1 className="App-HangMan">
          HANGMAN
        </h1>

        <button className="App-image-button" onClick={() => {navigate("/gamepage")}}>
          <img src={image} className="App-logo" alt="Play Button"/>
        </button>

        <div className="App-Horizontal d-flex justify-content-center">
            <button className="App-Button" onClick={() => {navigate("/")}}>
              How to play
            </button>
            <button className="App-Button" onClick={() => {navigate("/aboutus")}}>
              About Us
            </button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;