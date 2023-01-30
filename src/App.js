import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Personaje from "./Components/Personaje";

function App() {
  const [personajes, setPersonajes] = useState([]);

  const filtrar = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setPersonajes(data.results);
  }


  useEffect(() => {
    filtrar()
  }, [])

  console.log(personajes)
  return (
    <div className="App">
      <header className="App-header">


        <div className="perso">
          <h1>Rick and Morty API</h1>
          {personajes.map(personaje => {
            return (
              <Personaje
                image={personaje.image}
                name={personaje.name}
                status={personaje.status}
                species={personaje.species}
                location={personaje.location.name}
              />
            )
          })}
        </div>

      </header>
    </div>
  );
}

export default App;
