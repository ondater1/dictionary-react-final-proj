import HeaderImg from "./HeaderImg.png";
import Dictionary from "./Dictionary";

import './App.css';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
    <img src={HeaderImg} className='App-logo' alt="logo" />
    <h1>Dictionary</h1>
      </header>
      <main>
        
        <Dictionary />
      </main>

      <footer className="App-footer">
        <small>Coded by Alla Strakhova</small></footer>
    </div>
  );
}

