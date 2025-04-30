import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary />
        </header>
      </div>
      <footer className="App-footer">
        This project was coded by{" "}
        <a
          href="https://github.com/sarahatesyou/"
          target="_blank"
          rel="noreferrer"
        >
          sarahatesyou
        </a>
        🦇 and is on{" "}
        <a
          href="https://github.com/sarahatesyou/sadies-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://sadies-dictionary.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
