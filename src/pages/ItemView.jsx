import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const ItemView = () => {

    let {id} = useParams()

    const [item, setItem] = useState()
    
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

        <Link to={`/item/edit/${item._id}`} > Edit Item </Link>
        </>)
        }
    </div>
  )
}

export default ItemView