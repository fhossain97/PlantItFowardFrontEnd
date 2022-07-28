import Items from '../components/Item/Items'
import {Link} from 'react-router-dom'

const Home = ({ items, updateItemState, user }) => {
  const isLoggedIn = user
  if(isLoggedIn){
  return (
    <div>
      <Items items={items} updateItemState={updateItemState} user={user} />
    </div>
  )}
  else {
    return (
      <div >
        Plant It Forward <br/>
         <button><Link to='/login'>Login</Link></button><br/>
          <button><Link to='/signup'>Sign Up</Link></button>
      </div>
    )
  }

};

export default Home;
