import * as React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Image
} from 'react-bootstrap';

import NavLogo from '../../images/GM_logo.svg';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row className="footer-upper-row">
          <Col md={3}>
            <Navbar.Brand href="/">
              <Image src={NavLogo} className="logo-footer" />
            </Navbar.Brand>
          </Col>
          <Col md={4}>
            <span className="footer-heading">Contact Us</span>
            <Nav className="footer-col"
            >
              <Nav.Link href="tel:6475090893">TEL: 647-509-0893</Nav.Link>
              <Nav.Link href="mailto:admin@goldenmaplelaw.com">admin@goldenmaplelaw.com</Nav.Link>
              <Nav.Link href="https://www.google.com/maps/place/333+Sheppard+Ave+E+SUITE+210,+North+York,+ON+M2N+3B3,+Canada/@43.7658614,-79.3924302,17z/data=!3m1!4b1!4m5!3m4!1s0x882b2d4f9f655555:0x6885aff92cc229e4!8m2!3d43.7658614!4d-79.3902415" target="_blank">333 Sheppard Ave East, Suite 210 Toronto, ON M2N 3B3</Nav.Link>
            </Nav>
          </Col>
          <Col md={2}>
            <span className="footer-heading">Our Company</span>
            <Nav className="footer-col">
              <Nav.Link href="/About/">About Us</Nav.Link>
              <Nav.Link href="/OurTeam/">Our team</Nav.Link>
              <Nav.Link href="/Blog">Our blog</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <span className="footer-heading">Our Services</span>
            <Nav className="footer-col">
              <Nav.Link href="/Services">Use of Services</Nav.Link>
              <Nav.Link href="/Services">Resident Applications</Nav.Link>
              <Nav.Link href="/Services">Citizenship</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            {/* <span>Stay Updated</span>
            <span>
              Subscribe to Caravan Law to stay up to date with current leading insights on laws, trends, news, events, and services.
            </span>
            <div>FORM</div>
            <PrimaryButton buttonText="Submit" buttonPath="mailto:admin@goldenmaplelaw.com"/> */}
          </Col>
        </Row>
        <Row className="footer-lower-row">
          <Col md={{span:6, offset:3}}>
            <Nav className="footer-col-2">
              <Nav.Link href="/Privacy/">Privacy Policy</Nav.Link>
              <Nav.Link href="/Disclaimer/">Disclaimer</Nav.Link>
              <Nav.Link href="/Accessibility/">Accessibility</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <div className="social-wrapper">
              <Nav.Link href=""><i className="fab fa-facebook-square"></i></Nav.Link>
              <Nav.Link href=""><i className="fab fa-instagram"></i></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/company/golden-maple-law-llp/about/" target="_blank"><i className="fab fa-linkedin"></i></Nav.Link>
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