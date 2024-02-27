import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <>
      <Container fluid className="footer">
        <Row className="align-items-center h-100">
          <Col>
            <h1 className="footer_title">REMZI</h1>
          </Col>
          <Col>
            <h2>Contatti</h2>
          </Col>
          <Col>
            <h2>Link Utili</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
