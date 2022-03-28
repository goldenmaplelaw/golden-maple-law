import * as React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Image
} from 'react-bootstrap';

import PrimaryButton from '../buttons/PrimaryButton';

import NavLogo from '../../images/GM_logo.svg';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row className="footer-upper-row">
          <Col md={3}>
            <span className="footer-heading">Why Golden Maple?</span>
            <Nav className="footer-col"
            >
              <Nav.Link href="/Families">Families</Nav.Link>
              <Nav.Link href="/Investors">Investors</Nav.Link>
              <Nav.Link href="/Business">Businsses</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <span className="footer-heading">Our Services</span>
            <Nav className="footer-col">
              <Nav.Link href="/Immigration">Immigration</Nav.Link>
              <Nav.Link href="/Business">Business Law</Nav.Link>
              <Nav.Link href="/Investment">Investments</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <span className="footer-heading">Our Company</span>
            <Nav className="footer-col">
              <Nav.Link href="/OurTeam">Our Team</Nav.Link>
              <Nav.Link href="/Blog">Our Blog</Nav.Link>
              <Nav.Link href="/Careers">Careers</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            {/* <span>Stay Updated</span>
            <span>
              Subscribe to Caravan Law to stay up to date with current leading insights on laws, trends, news, events, and services.
            </span>
            <div>FORM</div>
            <PrimaryButton buttonText="Submit" buttonPath="mailto:pushkar.prehar@goldenmaplelaw.com"/> */}
          </Col>
        </Row>
        <Row className="footer-lower-row">
          <Col md={3}>
            <Navbar.Brand href="/">
              <Image src={NavLogo} className="logo-footer" />
            </Navbar.Brand>
          </Col>
          <Col md={6}>
            <Nav className="footer-col-2">
              <Nav.Link href="">Privacy Policy</Nav.Link>
              <Nav.Link href="/Disclaimer/">Disclaimer</Nav.Link>
              <Nav.Link href="/Accessibility/">Accessibility</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <div className="social-wrapper">
              <Nav.Link href=""><i className="fab fa-facebook-square"></i></Nav.Link>
              <Nav.Link href=""><i className="fab fa-instagram"></i></Nav.Link>
              <Nav.Link href=""><i className="fab fa-github"></i></Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;

{/* <Navbar>
  
  <Nav className="mr-auto">
    <Nav.Link href="#pricing">contact</Nav.Link>
  </Nav>
</Navbar> */}