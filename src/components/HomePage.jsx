import { Col, Container, Row } from "react-bootstrap";
import tavolo from "../file/Moldavia-tavola-imbandita-1024x684.jpg";
import nonna from "../file/45170843-la-cucina-della-nonna-è-extra-bene-perché-è-fatto-con-amore.jpg";
const HomePage = () => {
  return (
    <>
      <Container fluid>
        <img src={tavolo} alt="tavolo" className="home_img" />
        <Row className="align-items-center">
          <Col xs={8}>
            <h1>Bonta Della Tradizione Moldave</h1>
            <p>Vieni a scoprire la cucina Moldava con dei gustosissimi pasti preparati da la nonna Nina</p>
          </Col>
          <Col xs={4}>
            <img src={nonna} alt="nonna" className="nonna" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
