import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Item from './components/Item'
import ItemFormHandler from './components/ItemFormHandler';

function App() {
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios.get('/items')
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }

  const addItem = (newItem) => {
    axios.post('/items', newItem)
      .then(res => {
        setItems(prevItems => [...prevItems, res.data])
      })
      .catch(err => console.log(err))
  }

  const deleteItem = (itemId) => {
    axios.delete(`/items/${itemId}`)
      .then(res => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId))
      })
      .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    axios.put(`/items/${itemId}`, updates)
      .then(res =>  {
        setItems(prevItems => prevItems.map(item => item.id !== itemId ? item : res.data))
      })
      .catch(err => console.log(err))
      window.location.reload()
  }

  useEffect(() => {
    getItems()
  }, [])

  const itemsList = items.map(item => 
    <Item 
      {...item} 
      deleteItem={deleteItem} 
      editItem={editItem}
      key={item.name} />)

  return (
      <div className='item-container'>
        <ItemFormHandler 
        btnText='Add Item'
        submit={addItem} />
        {itemsList}
      </div>
    );
}

export default App;
