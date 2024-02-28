import { Container } from "react-bootstrap";
import flag from "../file/Flag_of_Moldova.svg.png";

const ChiSiamo = () => {
  return (
    <>
      <Container fluid>
        <img src={flag} alt="moldova" />
        <h1>Chi Siamo</h1>
        <p>
          Siamo una famiglia moldava che vuole diffondere la cucina moldava. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nisi expedita deleniti aspernatur illum possimus inventore, quae illo, soluta adipisci unde
          nihil veritatis, eveniet quibusdam nesciunt? Quos corrupti nihil cumque nemo. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sit, consectetur tenetur facilis necessitatibus veritatis modi quibusdam
          consequuntur magni aperiam suscipit dignissimos temporibus sapiente nesciunt? Ducimus nihil neque esse
          aspernatur modi?
        </p>
      </Container>
    </>
  );
};

export default ChiSiamo;
