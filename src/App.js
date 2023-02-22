import logo from './logo.svg';
import './App.css';
import Side from './components/Side';

function App() {
  return (
    <div className="conteiner">
      <header>
          <h1><a href="index.html">Ressursarkiv</a></h1>
      </header>

      <Side/>

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
