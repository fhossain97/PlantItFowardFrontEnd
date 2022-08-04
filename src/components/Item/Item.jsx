import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Rope from '../../assets/images/rope2.png'

const Item = ({ item, deleteItem, user }) => {

  console.log(item)
  return (
    <Container id='cardCont' key={item._id}>
      <img id='rope' src={Rope} alt='rope'/>
      <Card id='card'>
      <Card.Img id='cardImg' src={item.images} alt='' variant='top'/>
      <Card.Body id='cardBody'>
        <Card.Title className="p-2">{item.name}</Card.Title>
        <Button id='cardButton' variant='secondary'><Link to={`/item/${item._id}`}>Details</Link></Button>
      </Card.Body>
      </Card>
    </Container>
  );
};
export default Item; 
