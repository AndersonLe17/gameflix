import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from "react-bootstrap/Offcanvas";
import { SiXbox } from "react-icons/si";
import { MdGames, MdEventSeat, MdSmartToy } from "react-icons/md";
import { BsFillMouse3Fill, BsHeadphones } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const links = [{categoria: "Consolas", icon: <SiXbox/>}, {categoria: "Juegos", icon: <MdGames/>}, {categoria: "Perifericos", icon: <BsFillMouse3Fill/>}, 
{categoria: "Sillas Gamer", icon: <MdEventSeat/>}, {categoria: "Funkos", icon: <MdSmartToy/>}, {categoria: "Audio", icon: <BsHeadphones/>}];

const OffcanvasCategory = ({show, handleClose}) => {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categorias</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <ListGroup className="rounded-0">
            <ListGroup.Item action onClick={() => navigate("/category/all")} active={(categoryName === "all")}>
              <FaFire/> Todos los productos
            </ListGroup.Item>
            
            {links.map((elemento, index) => {
              return (
                <ListGroup.Item key={elemento+index} action onClick={() => navigate(`/category/${elemento.categoria.toLowerCase()}`)} active={(categoryName===elemento.categoria.toLowerCase())}>
                  {elemento.icon} {elemento.categoria}
                </ListGroup.Item>
              );
            })}
          
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasCategory;