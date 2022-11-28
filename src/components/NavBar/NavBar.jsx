import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SlUser } from "react-icons/sl";
import { IoGameControllerOutline } from "react-icons/io5";
import { OffcanvasCategory } from '../OffcanvasCategory';
import { CartWidget } from "../CartWidget";

const NavBar = ({ img }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid="md">
          <Navbar.Brand>
            <Link to="/">
              <img
                alt=""
                src={img}
                className="align-middle" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className='justify-content-between mt-1 mt-lg-0' id="navbarScroll">
            <Form className="d-flex mx-auto mx-lg-5 w-100">
              <Form.Control
                type="search"
                placeholder="Search"
                className="rounded-pill"
                aria-label="Search" />
            </Form>
            <Nav
              className="my-2 my-lg-0 lh-1"
              navbarScroll
            >
              <Nav.Link href="#" className='text-center align-middle'>
                <SlUser className='fs-2' />
                <span className='d-block'>Mi Cuenta</span>
              </Nav.Link>
              <Nav.Link href="#" className='text-center align-middle' onClick={handleShow}>
                <IoGameControllerOutline className='fs-2' />
                <span className='d-block'>Categorias</span>
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/cart")} className="text-center align-middle position-relative">
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <OffcanvasCategory show={show} handleClose={handleClose}/>
    </>
    
  );
};

export default NavBar;