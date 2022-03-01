import * as React from "react";
import { Link } from "gatsby";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Image
} from 'react-bootstrap';

import NavLogo from '../../images/GM_logo.svg';

const PrimaryNav = () => {
    return (
      <Container>
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand href="/">
                <Image src={NavLogo} className="logo-1" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Link className="nav-item" to="/About/">About</Link>
                  <Link className="nav-item" to="/WhyGoldenMaple/">Why Golden Maple Law</Link>             
                  <Link className="nav-item" to="/Services/">Services</Link>           
                  <NavDropdown title="Company" className="drop-down" id="collasible-nav-dropdown">
                    <Link to="/OurTeam/">Our Team</Link>
                    <Link to="/Careers/">Careers</Link>
                    <Link to="/Blog/">Blog</Link>              
                  </NavDropdown>
                  <Link to="/Contact/">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    )
}

export default PrimaryNav;