import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigation = useNavigate();

  return (
    <Container fluid>
      <Navbar>
        <Navbar.Brand>
          <div>REMZI</div>
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                navigation("/");
              }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                navigation("/chisiamo");
              }}
            >
              Chi Siamo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                navigation("/menu");
              }}
            >
              Il Nostro Menu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Recensioni</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
