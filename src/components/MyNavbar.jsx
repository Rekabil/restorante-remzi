import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Container fluid>
      <Navbar>
        <Navbar.Brand>
          <div>REMZI</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Chi Siamo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Il Nostro Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Dove Siamo</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
