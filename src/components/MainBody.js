import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import cards from "../docs/cards";
import { useState } from "react";

function MainBody() {

  return (
    <div id="cards" className="main-body">
      <Container>
        <h1>Cards dos gatos</h1>
        <div className="card-container">
          {cards.map((card, index) => (
            <Card className="card-item" key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card.pic} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant={card.button}>Clique Aqui</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MainBody;
