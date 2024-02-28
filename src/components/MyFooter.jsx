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
            <Row>
              <h2>Contatti</h2>
            </Row>
            <Row className="justify-content-center">P.IVA: 04733010260</Row>
            <Row className="justify-content-center">Via Giacomo Matteotti 14</Row>
            <Row className="justify-content-center">remzi@info.com</Row>
          </Col>
          <Col>
            <Row>
              <h2>Link Utili</h2>
            </Row>
            <Row className="justify-content-center">I Nostri Segreti</Row>
            <Row className="justify-content-center"> Franciazing</Row>
            <Row className="justify-content-center">News & Eventi</Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
