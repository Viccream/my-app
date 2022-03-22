import logo from './logo.svg';
import './App.css';

function Cream () {
  return (
    <div className="Cream">
      <header className="Cream-header">
        <img src={logo} className="Cream-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Cream-link"
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

export default Cream;
