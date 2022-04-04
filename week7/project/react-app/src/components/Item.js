import { useState } from "react"
import ItemFormHandler from "./ItemFormHandler"

function Item({ deleteItem, editItem, name, description, id }) {
    const [editToggle, setEditToggle] = useState(false)
    const [checked, setChecked] = useState([])
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };
    return (
        <div className="item">
            { !editToggle ? 
                <>
                    <h1>Name: {name}</h1>
                    <p>Description: {description}</p>
                    <button 
                        onClick={() => deleteItem(id)} 
                        className="delete-btn">
                            Delete
                    </button>
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        className='edit-btn'>
                        Edit
                    </button>
                    <input type="checkbox" />Found
                </>
                :
                <>
                    <ItemFormHandler 
                        name={name}
                        description={description}
                        id={id}
                        btnText='Submit Edit' 
                        submit={editItem} />
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>               
                </>
            }
        </div>
    )
}

export default Item