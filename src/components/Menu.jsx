import { Col, Container, Row } from "react-bootstrap";
import mamaliga from "../file/cosa-mangiare-in-moldavia-mamaliga.webp";
import zeama from "../file/piatti-tipici-moldavia-zeama.webp";
import sarmale from "../file/piatti-tipici-moldavia-sarma.webp";
import frigarui from "../file/piatti-tipici-moldavia-frigurui.webp";
import placinta from "../file/piatti-tipici-moldavia-placinta.webp";
import tort from "../file/cosa-mangiare-in-moldavia-baba-neagra.webp";

const Menu = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <h1>Il Nostro Menu</h1>
        </Row>
        <Row>
          <Col xs={2}>
            <img src={mamaliga} alt="Dish" className="dish" />
          </Col>
          <Col xs={6}>
            <Row>
              <h4>Mămăliga</h4>
            </Row>
            <Row>
              La Mămăliga è, probabilmente, il piatto tipico moldavo più famoso del Paese. Lo si trova in tutti i
              ristoranti e, sicuramente, in tutte le case.
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <img src={zeama} alt="Dish" className="dish" />
          </Col>
          <Col xs={6}>
            <Row>
              <h4>Zeamă moldovenească cu tăieței</h4>
            </Row>
            <Row>
              La Zeamă moldovenească cu tăieței è un altro dei piatti tipici del Paese e si tratta di una zuppa di brodo
              di gallina e finissime tagliatelle fatte a mano. Questo piatto viene spesso servito con la celebre panna
              acida, ingrediente quasi irrinunciabile da queste parti!
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <img src={sarmale} alt="Dish" className="dish" />
          </Col>
          <Col xs={6}>
            <Row>
              <h4>Sarmale</h4>
            </Row>
            <Row>
              Tra le cose da mangiare in Moldavia non possono mancare le Sarmale, piccoli involtini di foglie di vite
              ripieni di riso e carne. Gli involtini vengono fatti cucinare all’interno di contenitori di terracotta
              smaltati, generalmente nel forno
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <img src={frigarui} alt="Dish" className="dish" />
          </Col>
          <Col xs={6}>
            <Row>
              <h4>Frigărui</h4>
            </Row>
            <Row>
              Se sei un amante del barbecue non puoi perderti i Frigărui, dei semplici spiedini di maile o pollo che
              vengono cotti sulla brace dopo essere stati qualche oretta a marinare in un condimento di olio, aglio e
              cipolla.
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <img src={placinta} alt="Dish" className="dish" />
          </Col>
          <Col xs={6}>
            <Row>
              <h4>Plăcintă</h4>
            </Row>
            <Row>
              La storia di questo piatto è davvero molto antica e sembra essere greca. L’etimologia del nome, però,
              sembra risalire al periodo della dominazione dell’Impero Romano su queste terre.
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <img src={tort} alt="Dish" className="dish" />
          </Col>
          <Col xs={6}>
            <Row>
              <h4>Babă neagră</h4>
            </Row>
            <Row>
              La torta al cacao è uno dei dolci tipici moldavi delle campagne al nord del Paese. La torta viene cotta
              nel forno e per prepararla servono farina, uova, cacao, zucchero e kefir (latte fermentato).
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
