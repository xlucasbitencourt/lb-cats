import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Menu() {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Landing Cats</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#cards">Cards</Nav.Link>
            <Nav.Link href="#motivos">Motivos</Nav.Link>
            <NavDropdown title="Mais" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contato">Contato</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://lucasbitencourt.com.br/">Link para portfólio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text><a href="https://lucasbitencourt.com.br/">Link para contato</a></Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Menu;
