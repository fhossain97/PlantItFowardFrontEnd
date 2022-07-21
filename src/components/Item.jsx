import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ItemContainer = styled.div`
    background-color: dodgerblue;
    border-radius: 10px;
    width: 30vw;
    min-width: 200px;
    div {
        padding: 10px;
        margin:0;
        padding-bottom: 0px;
    }
    img {
      width  : 100% ;
      border-radius: inherit;
    }
`

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`

const Item = ({ item, deleteItem, user }) => {

return (
    <ItemContainer key={item._id}>
        <div>
            <h1> { item.name }</h1>
            {/* <p> ${ item.cost } <span style={ item.inStock ? { color: 'green' } : { color: 'red'}}>{ item.inStock ? 'In Stock' : 'Currently Unavailable'}</span></p> */}
        </div>
        <img src={item.image} alt={item.name} />
        { 
            user?.isAdmin ? (
                <>  
                    <Button color='blue' onClick={() => deleteItem(item._id)}>Delete</Button>
                    <Button color='red' onClick={() => deleteItem(item._id)}>Delete</Button>
                    <Button onClick={() => deleteItem(item._id)}>Delete</Button>
                </>
            )  : null
        }

        <Link to={`/item/${item._id}`}>View Details</Link>
    </ItemContainer>
)
}
export default Item