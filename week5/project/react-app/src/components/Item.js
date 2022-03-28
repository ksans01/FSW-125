

function Item({ name, description, id }) {

    return (
        <div className="item">
            <h1>Name: {name}</h1>
            <p>Description: {description}</p>
        </div>
    )
}

export default Item