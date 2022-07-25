import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function CatList() {
  return (
    <div className="cat-list">
      <Container>
      <h1>Motivos para ter um gato</h1>
        <ListGroup variant="flush">
        <ListGroup.Item action variant="danger">São adoráveis</ListGroup.Item>
        <ListGroup.Item action variant="success">São dóceis</ListGroup.Item>
        <ListGroup.Item action>Depois do primeiro, você vai sempre querer mais um</ListGroup.Item>
        <ListGroup.Item action>Todos gosam de gatos!</ListGroup.Item>
        <ListGroup.Item action>Se ainda não tem um, adote já!</ListGroup.Item>
      </ListGroup>
    </Container>
    </div>
    
  );
}

export default CatList;
