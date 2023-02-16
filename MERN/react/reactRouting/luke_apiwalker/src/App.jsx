import { Routes, Route } from 'react-router-dom';
import People from './views/People';
import Planet from './views/Planet';
import Search from './components/Search';
import Error from './views/Error';
import './App.css';

function App() {

  return (
    <div className="App" style={{width:"60%",margin:"10px auto"}}>
      <Search />
      <fieldset style={{margin:"10px"}}>
        <Routes>
          <Route path='/' element={
            <div><h3>No Search Yet</h3></div>
          }/>
          <Route path='/people/:id' element={<People />} />
          <Route path='/planet/:id' element={<Planet />} />
          <Route path='/error' element={<Error />}/>
        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
