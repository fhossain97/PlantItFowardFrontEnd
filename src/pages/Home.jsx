import styled from 'styled-components'
import Items from '../components/Item/Items'

const Home = ({ items, updateItemState, user }) => {
  return (
    <div>
        <Items items={items} updateItemState={updateItemState}  user={user} />
    </div>
  )
}

export default Home