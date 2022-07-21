import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Item from './Item'
const ItemBox = styled.div`
    background-color: green;
    min-width: 100vw;
    display:  flex;
    flex-wrap: wrap;
    gap: 10px;
`

const Items = ({ items, updateItemState, user }) => {

    const deleteItem = (id) => {
        axios.delete(`http://localhost:3000/item/${id}`)
        .then(res => {
            console.log(res)
            updateItemState(id)
        })
    }

    return (
        <ItemBox>
            { 
              items.length === 0 ? 'Sorry! This plant is no longer available.' :  (items.map( item => {
                    return <Item key={item._id} item={item} deleteItem={deleteItem} user={user}/>
                }))
            }
        </ItemBox>

)
}
export default Items