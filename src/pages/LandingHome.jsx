import Items from '../components/Item/Items';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel  from 'react-bootstrap/Carousel';

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
      <Container fluid>
       <Row className='p-4'>
          <Carousel>
            {items.map((item) => {
              return(
              <Carousel.Item>
                <img id='plantCarousel' className='d-block' src={item.images} alt='slide'/>
              </Carousel.Item>)
            })}
          </Carousel>
        {/* </Row><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row id='bottom' className='fixed-bottom'>
          <Col className='d-grid my-auto justify-content-center'> */}
         
     

            <div className="bg-black-50 px-4 py-3 text-right sm:px-6" id='logsigdiv'>
            <Link to='/login'>
            <button
id='login'
              class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            >
             Login
            </button>
            </Link>
            <Link to='/signup'>
            <button
            id='signup'

              class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            >
             Sign-up
            </button>
            </Link>
          </div>



          {/* </Col>
          <Col>
          </Col> */}
        </Row>
      </Container>
    )
  }

  

};

export default Home;
