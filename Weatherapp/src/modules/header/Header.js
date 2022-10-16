import React from "react";
import "./Header.css";
import {Navbar , Nav, Container ,Button ,Form  } from "react-bootstrap";
import { NavLink} from 'react-router-dom';
import { TiWeatherPartlySunny } from "react-icons/ti";

function Header(){
    return (
        <div>
            <Navbar bg="light"  expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><TiWeatherPartlySunny size={32}/><b>Weather Forecast </b></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={NavLink}  to="/">HOME</Nav.Link>
              <Nav.Link as={NavLink}  to="homepage">FIND WEATHER</Nav.Link>
              <Nav.Link as={NavLink}  to="aboutus">ABOUT US</Nav.Link>
              <Nav.Link as={NavLink}   to="faqs">FAQ's</Nav.Link>
              <Nav.Link as={NavLink}   to="contactus">CONTACT US</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button className='m-2' variant="outline-primary">Signin/Signup</Button>
           </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default Header;