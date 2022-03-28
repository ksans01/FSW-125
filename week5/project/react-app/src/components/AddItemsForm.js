import { useState } from "react";

function AddItemForm({ addItems }) {
    const initialInputs = { name: '', description: '' }
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItems(inputs)
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='title'
                value={inputs.name}
                onChange={handleChange}
                placeholder='Title' />
            <input 
                type='text'
                name='description'
                value={inputs.description}
                onChange={handleChange}
                placeholder='Description' />
            <input
                type='text'
                name='price'
                value={inputs.price}
                onChange={handleChange}
                placeholder='Price' />
            <button>Add Item</button>
        </form>
    )
}

export default AddItemForm