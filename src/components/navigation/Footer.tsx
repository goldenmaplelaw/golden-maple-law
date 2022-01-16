import * as React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar
} from 'react-bootstrap';

const Footer = () => {
    return (
      <Container className="footer-wrapper">
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand href="#home">Golden Maple Law</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#pricing">contact</Nav.Link>
                <div className="social-wrapper">
                  <Nav.Link href=""><i className="fab fa-facebook-square"></i></Nav.Link>
                  <Nav.Link href=""><i className="fab fa-instagram"></i></Nav.Link>
                  <Nav.Link href=""><i className="fab fa-github"></i></Nav.Link>
                </div>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    )
}

export default Footer;