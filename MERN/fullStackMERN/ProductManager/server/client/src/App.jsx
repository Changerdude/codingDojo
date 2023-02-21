import './App.css';
import axios from 'axios';
import Main from './views/Main';
import Detail from './views/Detail';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [productList,setProductList] = useState();

  const nav = useNavigate();

  useEffect(() => {
    refreshList();
  },[]);

  const refreshList = () => {
    axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
  }

  return (
    <div className="container w-50 shadow border rounded mx-auto my-2 p-3">
      <h1 className='text-center'>Product Management</h1>
      <Routes>
        <Route path='/' element={<Main productList={productList} refreshList={refreshList} isEditing={false}/>} />
        <Route path='/:id' element={<Detail refreshList={refreshList}/>} />
        <Route path='/:id/edit' element={<Main productList={productList} refreshList={refreshList} isEditing={true}/>} />
        <Route path='*' element={<h1 className='text-center m-4'>Uh oh, Nothing there.</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
