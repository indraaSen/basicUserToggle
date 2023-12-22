import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
function ColorSchemesExample({bg_name, formChange,newText}) {
    console.log(bg_name)
    console.log(newText)
  return (
    <>
      <Navbar bg={bg_name} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Scammer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Career</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          <Form.Check onChange={() => formChange()} type="switch" id="custom-switch"  label={newText}/>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;