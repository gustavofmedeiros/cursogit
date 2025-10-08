import logo from './logo.svg';
import './App.css';
import "./inputnomesobrenome";
import InputNomeSobrenome from './inputnomesobrenome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        </header>
<div className="titulo">
<h1>Testes com react</h1>
</div>
<ul id="lista" aria-label="pessoas">
<li>Gustavo</li>
<li>Eduardo</li>
</ul>
<InputNomeSobrenome />

    </div>
 
 );
}

export default App;
