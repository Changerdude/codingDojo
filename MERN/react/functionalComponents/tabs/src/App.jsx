import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabs,setTabs] = useState([
    {id:1,isSelected:true,content:"This is tab 1"},
    {id:2,isSelected:false,content:"This is tab 2"},
    {id:3,isSelected:false,content:"This is tab 3"},
    {id:4,isSelected:false,content:"This is tab 4"},
    {id:5,isSelected:false,content:"This is tab 5"}
  ]);


  const handleTabs = (newTabs) =>{
    setTabs(newTabs);
  }

  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs = {handleTabs} />
    </div>
  );
}

export default App;
