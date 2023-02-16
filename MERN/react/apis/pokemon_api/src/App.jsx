import { useState } from 'react';
import './App.css';


function App() {
  const [poke,setPoke] = useState([])

  const callPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) =>{
      return res.json();
    })
    .then((res) => {
      setPoke(res.results);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  return (
    <div className="App">
      <button onClick={() =>{callPokemon()}}>Pokemon</button>
      <hr />
      { poke.map((poke , i) => {
        return <div key={i}>{poke.name}</div>
      })}
    </div>
  );
}

export default App;
