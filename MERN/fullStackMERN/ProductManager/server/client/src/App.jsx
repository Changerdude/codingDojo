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
  const deleteItem = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then((res) => {
            console.log(res.data)
            refreshList();
            nav('/')
        })
        .catch((err) => {
            console.log(err);
        })
};

  return (
    <div className="container w-50 shadow border rounded mx-auto my-2 p-3">
      <h1>Product Management</h1>
      <Routes>
        <Route path='/' element={<Main deleteItem={deleteItem} productList={productList} refreshList={refreshList} isEditing={false}/>} />
        <Route path='/:id' element={<Detail deleteItem={deleteItem}/>} />
        <Route path='/:id/edit' element={<Main deleteItem={deleteItem} productList={productList} refreshList={refreshList} isEditing={true}/>} />
        <Route path='*' element={<h1>Uh oh, Nothing there.</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
