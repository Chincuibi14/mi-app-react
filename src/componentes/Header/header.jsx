import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">App Médica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/medico/dashboard">Medico</Nav.Link>
            <Nav.Link as={Link} to="/paciente/dashboard">Paciente</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;