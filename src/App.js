import wordmark from './wordmark.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wordmark} className="App-wordmark" alt="wordmark" />
        <p className="App-description">
         Easy community building, engagement, management
         <br/>
         and growth for crypto projects.
        </p>
        <a
          className="App-progress-link"
          href="https://github.com/Membes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow progress
        </a>
      </header>
    </div>
  );
}

export default App;
