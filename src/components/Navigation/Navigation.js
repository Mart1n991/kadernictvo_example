import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo-white.png';
import "./navigation.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="transparent" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        alt="logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse >
    <Nav className="justify-content-end" style={{width: "100%"}}>
      <Nav.Link href="#about">O nás</Nav.Link>
      <Nav.Link href="#services">Služby</Nav.Link>
      <Nav.Link href="#membership">Členstvo</Nav.Link>
      <Nav.Link href="#membership">Obchod</Nav.Link>
      <Nav.Link href="#partners">Partneri</Nav.Link>
      <Nav.Link href="#careers">Kariéra</Nav.Link>
      <Nav.Link href="#contact">Kontakt</Nav.Link>
      <Button variant="danger" className="mx-5">Objednať sa</Button>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  ) 
}

export default Navigation;

