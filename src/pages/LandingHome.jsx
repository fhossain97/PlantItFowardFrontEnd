import Items from '../components/Item/Items'
import {Link} from 'react-router-dom'
import Logo4 from '../assets/images/Logo4.png'

const Home = ({ items, updateItemState, user }) => {
 if(user){
  return (
    <div>
      <Items items={items} updateItemState={updateItemState} user={user} />
    </div>
  )
}
  else {
    return (
      <div >
        <img src={Logo4}  alt=''/>
      </div>
    )
  }

};

export default Home;
