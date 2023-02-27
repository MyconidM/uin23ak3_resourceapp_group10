import logo from './logo.svg';
import './App.css';
import Side from './components/Side';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="conteiner">
      <header>
          <h1><a href="index.html">Ressursarkiv</a></h1>
      </header>

      <NavBar/>


      <div id="textCont">
          <article id="text">
              <h2>Ressursarkivets start side</h2>
          </article>

          <article>
              <ul id="links">
                  
              </ul>
          </article>
      </div>
    </div>
  );
}

export default App;
