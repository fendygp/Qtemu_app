import React from 'react';

import {
  Container, Row, Col, Button, Navbar, Nav,
   NavLink, NavItem,
} from 'reactstrap';


const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <h1><strong>QTemu</strong></h1>
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-light" href="/">Create Meetup</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-light" href="/">Explore</NavLink>
              </NavItem>
            </Nav>
          </Col>

        
          <Col className="d-none d-lg-flex justify-content-end">
            
              <Button type="submit" color="secondary" outline>login</Button>
          </Col>

        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
