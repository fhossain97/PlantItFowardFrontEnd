import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemView = ({items}) => {

    let {id} = useParams()

    const [item, setItem] = useState()
    
    //two ways to do it, 1 with props, 2 with a fresh request
    //first way
    // let coffee = coffees.find(c => c._id === id)

    useEffect(() => {
        fetch(`http://localhost:8000/item/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[])

    console.log(item)

  return (
    <div>
        {
        item && (<>
        <h1>{item.name}</h1>
        <img src={item.images} alt={item.description} />
        <p>{item.description}</p>

        {/* <p>Roast: <span>{item.roast}</span></p>
        {item.inStock ? "In Stock!" : "Currently Unavailable"} */}
        <Link to={`/item/edit/${item._id}`} > Edit Item </Link>
        </>)
        }
    </div>
  )
}

export default ItemView