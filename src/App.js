import logo from './logo.svg';
import './scss/app.scss';
import "bootstrap/scss/bootstrap.scss";

function App() {
  return ( 
    <div className="App container">
      <header className="App-header col-md-12">
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
      </header>
    </div>
  );
}

export default App;
