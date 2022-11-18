import React from "react";
import axios from "axios";
import Item from "./Item";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Items = ({ items, updateItemState, user }) => {
  const deleteItem = (id) => {
    axios.delete(`http://localhost:8000/item/${id}`).then((res) => {
      updateItemState(id);
    });
  };

  return (
    <Container>
      <Row>
      {items.length === 0
        ? "No plants available to trade."
        : items.map((item) => {
            return (
                <Col>
                  <Item

                    key={item._id}
                    item={item}
                    deleteItem={deleteItem}
                    user={user}
                  />
                </Col>
            );
          })}
      </Row>
    </Container>
  );
};
export default Items;
