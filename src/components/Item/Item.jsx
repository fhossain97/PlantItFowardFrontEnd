import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Vine from "../../assets/images/download-1.png";

const Item = ({ item }) => {
  return (
    <div id="cardCont" key={item._id}>
      <img id="vine" src={Vine} alt="vine" />
      <div>
        <Card>
          <Card.Img id="cardImg" src={item.images} alt="" variant="top" />
          <Card.Body id="cardBody">
            <Card.Title>
              {item.name}
              <br />
              <Link to={`/item/${item._id}`}>
                <button class="inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                  Details
                </button>
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Item;
