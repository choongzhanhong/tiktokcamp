import './MainMenu.css';
import image from './images/play_button.png';

function MainMenu() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-HangMan">
          Hangman 16
        </div>

        <button className="App-image-button">
          <img src={image} className="App-logo" alt="my image"/>
        </button>

        <div className="App-Horizontal">
          <div className="App-Button-How-To-Play">
            <a
              className="App-How-to-play"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to play
            </a>
          </div>
          <div className="App-Button-About-Us">
            <a
              className="App-About-us"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              About us
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainMenu;