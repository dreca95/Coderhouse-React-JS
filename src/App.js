import logo from './logo.jpg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
     <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         eCommerce en construcción.
        </p>
      
      </header>
    </div>
  );
}

export default App;
