import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { AlignJustify,Link,Home} from 'react-feather';

import { Link as Link2 } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            
            <Link2 class="navbar-brand" to="/">VillandSaga</Link2>
              
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"> <Home /> </Nav.Link>
                <Nav.Link href="#link"><Link/></Nav.Link>
                <NavDropdown title=<AlignJustify/> id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Thorfinn</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Askelad
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Thorkell</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;