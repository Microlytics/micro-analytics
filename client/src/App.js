import logo from './logo.svg';
import './App.css';

import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <br></br>
        <br></br>
        <Test1 />
        <br></br>
        <br></br>
        <Test2 />
      </header>
    </div>
  );
}

export default App;
