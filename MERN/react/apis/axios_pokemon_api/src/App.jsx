import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [poke, setPoke] = useState([])
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon")

  const callPokemon = () => {
    if (nextUrl) {
      axios.get(nextUrl)
        .then((res) => {
          setPoke([...poke, ...res.data.results]);
          setNextUrl(res.data.next)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className="App" >
      <button onClick={() => { callPokemon() }}>Pokemon</button>
      <hr />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ul>
          {poke.map((poke, i) => {
            return <li key={i}>{poke.name}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
