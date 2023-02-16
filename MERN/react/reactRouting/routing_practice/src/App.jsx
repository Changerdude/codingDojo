import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './App.css';

const Home = props => {
  return(
    <h1>Welcome</h1>
  )
}
const OneInput = (props) => {
  const { input } = useParams();
  if(isNaN(input)){
    return(<h1>The word is: {input}</h1>)
  } else {
    return(<h1>The number is: {input}</h1>)
  }
}
const Colors = (props) => {
  const { word, color1, color2} = useParams();
  return(<h1 style={{color:color1, backgroundColor:color2}}>The word is: {word}</h1>)
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:input' element={<OneInput />}/>
        <Route path='/:word/:color1/:color2' element={<Colors />}/>
      </Routes>
    </div>
  );
}

export default App;
