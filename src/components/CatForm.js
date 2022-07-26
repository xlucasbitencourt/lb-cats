import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";

function CatForm() {
  const [enviou, setEnviou] = useState(false);

  const catSub = (e) => {
    e.preventDefault();
    console.log("oi");
    setEnviou(true);
    setTimeout(() => {
      setEnviou(false);
    }, 2000);
  };

  return (
    <div id="contato" className="cat-form">
      <Container>
        <h1>Entre em contato</h1>
        <Form onSubmit={catSub}>
          <FloatingLabel controlId="floatingInput" label="Nome:" className="mb-3">
            <Form.Control type="text" placeholder="Nome" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="E-mail:" className="mb-3">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Isso é só uma demonstração, seus dados não serão coletados.
            </Form.Text>
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Deixe aqui seu comentário">
            <Form.Control
              as="textarea"
              placeholder="Deixe aqui seu comentário"
              style={{ height: "100px" }}
            />
          </FloatingLabel>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Clique aqui para não acontecer nada" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <br />
          {
            enviou && <Form.Text className="text-muted">{"Mensagem enviada (Ou não.)."}</Form.Text>
          }
        </Form>
      </Container>
    </div>
  );
}

export default CatForm;
