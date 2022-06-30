import React from "react";
import { Card } from "./styles/Card.styled";
function Cards({ item }) {
  return (
    <Card layout={item.id%2===0 && "row-reverse"}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <div>
        <img src={`./images/${item.image}`} alt="dreams" />
      </div>
    </Card>
  );
}

export default Cards;
