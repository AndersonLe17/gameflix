import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from "react-bootstrap/Offcanvas";
import { SiXbox } from "react-icons/si";
import { MdGames, MdEventSeat, MdSmartToy } from "react-icons/md";
import { BsFillMouse3Fill, BsHeadphones } from "react-icons/bs";

export const OffcanvasCategory = ({show, handleClose}) => {
  
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categorias</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <ListGroup className="rounded-0">
            <ListGroup.Item action href="#link1">
              <SiXbox/> Consolas
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <MdGames/> Juegos
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <BsFillMouse3Fill/> Perifericos
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              <MdEventSeat/> Sillas Gamer
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              <MdSmartToy/>Funko
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              <BsHeadphones/> Audio
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
