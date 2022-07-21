import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Home from  './pages/Home'
import NewItem from './pages/NewItem';
import Layout from './components/Layout';
import ItemView from './pages/ItemView';
import ItemEdit from './pages/ItemEdit';
import Login from './pages/Login'

function App() {
  const [ items, setItems  ] = useState([])
  const [user , setUser ] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/item/')
    .then( res => res.json())
    .then( items => setItems(items))
  }, [])
  
  console.log(items)
  
  const addToItem = (item) => {
     setItems([...items, item])
}
const updateItemState = (id) => {
  setItems(items.filter(item => item._id !== id))
}

return (
<Layout user={user} setUser={setUser}> 

  <Routes>
      <Route path='/' element={ <Home items={items} updateItemState={updateItemState} user={ user} />} />
      <Route path='/new-item' element={ <NewItem addItem={addToItem}  />} />
      <Route path='/item/edit/:id/' element={ <ItemEdit  setItems={setItems} />} />
      <Route path='/item/:id' element={ <ItemView items={items}/>} />
      <Route path='/login' element={ <Login setUser={setUser} />} />
  </Routes>
</Layout>
);
}

export default App;
