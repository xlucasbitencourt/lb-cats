import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import carousel from "../docs/carousel";

function Header() {
  return (
    <div className="header">
      <Container>
      <Carousel fade>
        {
          carousel.map((item, index) => (
            <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.pic} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.subtitulo}</p>
          </Carousel.Caption>
        </Carousel.Item>
          ))
        }
      </Carousel>
    </Container>
    </div>
    
  );
}

export default Header;
