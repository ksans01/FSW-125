import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Item from './components/Item'
import AddItemForm from './components/AddItemsForm';

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

  useEffect(() => {
    getItems()
  }, [])

  const itemsList = items.map(item => <Item {...items} key={item.name}/>)

  return (
      <div className='item-container'>
        <AddItemForm addItem={addItem} />
        {itemsList}
      </div>
    );
}

export default App;
