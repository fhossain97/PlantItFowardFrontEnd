import React from "react";
import styled from "styled-components";
import axios from "axios";
import Item from "./Item";

const ItemBox = styled.div`
  background-color: #e6c300;
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Items = ({ items, updateItemState, user }) => {
  const deleteItem = (id) => {
    axios.delete(`http://localhost:8000/item/${id}`).then((res) => {
      console.log(res);
      updateItemState(id);
    });
  };

  return (
    <ItemBox>
      {items.length === 0
        ? "Sorry! No plants available to trade at this time."
        : items.map((item) => {
            return (
              <Item
                key={item._id}
                item={item}
                deleteItem={deleteItem}
                user={user}
              />
            );
          })}
    </ItemBox>
  );
};
export default Items;
