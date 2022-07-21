import styled from 'styled-components'
import Items from '../components/Items'

const Home = ({ items, updateItemState, user }) => {
  return (
    <div>
        <Items items={items} updateItemState={updateItemState}  user={user} />
    </div>
  )
}