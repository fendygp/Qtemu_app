import React, { Fragment } from 'react';

import {
  Button,Col, Card, Row, CardImg,
} from 'reactstrap';

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';

const TopCard = () => (
  <Fragment>
    <Row className="bg-secondary" style={{padding: '1.5rem' }}>
      <Col xs="3" className="d-flex align-items-center" >
        <Card>
          <CardImg top width="100%" src={BANNER} alt="Card image cap" />
        </Card>
      </Col>
      <Col xs="auto" className="d-flex align-items-center" >
        <div >
        <h5 style={{color:'white'}} ><strong>Hactiv8 Meetup</strong></h5>
        <p style={{color:'white'}}>Location<a style={{marginLeft:'7rem'}}>Jakarta</a></p>
        <p style={{color:'white'}}>Members<a style={{marginLeft:'6.5rem'}}>1,078</a></p>
        <p style={{color:'white'}}>Organizers<a style={{marginLeft:'6rem'}}>Adhy Wiranata</a></p>
        <Button color="info" className="font-weight-bold">Join Us</Button>
        </div>
      </Col>
   </Row>
  </Fragment>
);

export default TopCard;
