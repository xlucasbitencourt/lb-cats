import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function CatList() {
  return (
    <div id="motivos" className="cat-list">
      <Container>
      <h1>Lista de conteúdos</h1>
        <ListGroup variant="flush">
        <ListGroup.Item action variant="danger">Está é uma lista</ListGroup.Item>
        <ListGroup.Item action variant="success">Ela tem várias funções</ListGroup.Item>
        <ListGroup.Item action variant="primary">Pode ser usada para lista características de algo</ListGroup.Item>
        <ListGroup.Item action variant="warning">Também pode ser usada para citar motivos para adquirir um produto ou serviço</ListGroup.Item>
        <ListGroup.Item action variant="info">Entre várias outras opções!</ListGroup.Item>
      </ListGroup>
    </Container>
    </div>
    
  );
}

export default CatList;
