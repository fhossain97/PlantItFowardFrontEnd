import Items from '../components/Item/Items';
import {Link} from 'react-router-dom'
import Logo5 from '../assets/images/Logo5.png';
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
        </Row> 
        <Row id='bottom' className='fixed-bottom'>
          <Col className='d-grid my-auto justify-content-center'>
            <Row className='p-5 '>
            <Link to='/login'>
                <Button id='login'>
                  Login
                </Button>
              </Link>
            </Row>
            <Row className='p-5 '>
              <Link to='/signup'>
                <Button id='signup'>
                  Sign Up
                </Button>
              </Link>
            </Row>
          </Col>
          <Col>
          <img id='logo' src={Logo5}  alt='logo'/>
          </Col>
        </Row>
      </Container>
    )
  }

};

export default Home;
