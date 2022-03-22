import logo from './logo.svg';
import './App.css';

function Cream () {
  return (
    <div className="cream">
      <header className="cream-header">
        <img src={logo} className="cream-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="cream-link"
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
