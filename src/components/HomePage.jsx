import { Container } from "react-bootstrap";
import tavolo from "../file/Moldavia-tavola-imbandita-1024x684.jpg";
const HomePage = () => {
  return (
    <>
      <Container fluid>
        <img src={tavolo} alt="tavolo" className="home_img" />
      </Container>
    </>
  );
};

export default HomePage;
