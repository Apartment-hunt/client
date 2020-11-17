import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NabBar.scss";
import logo from "../../images/logos/Logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Container>
      <Navbar expand="md">
        <Navbar.Brand as={Link} to="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#concerns">Concerns</Nav.Link>
            <Nav.Link href="#event">Event</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Link to="/login">
              <Button className="px-4">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
