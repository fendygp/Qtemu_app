import React, { Fragment } from 'react';

import {
  Media, Row, Col
 
} from 'reactstrap';


const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Content = () => (
  <Fragment>
    <div className="position-relative">
       <span className="d-block pb-2 mb-0 h4 text-uppercase text-dark font-weight-bold">
            Next Meetup
       </span>
       <span className="d-block h5 text-dark">Awesome Meetup and Event</span>
       <span className="d-block pb-4 h7 text-muted  border-bottom border-gray">25 January 2019</span>
       <p>Hello Java Script Nijas!
        <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus efficitur laoreet.
        <br/> Donec ullamcorper bibendum tellus. Sed faucibus nulla et turpis cursus, ut bibendum ante dictum. 
        <br/>In dapibus sem vel lacinia dapibus. Ut aliquam mattis condimentum. Cras id metus hendrerit, blandit velit at,
        <br/> ultrices urna. Phasellus eget ipsum metus. Etiam vitae turpis malesuada lectus sagittis efficitur. 
        <br/> 
        <br/>Nullam vitae urna at eros dapibus consequat ac id sem. Morbi tortor orci, gravida nec purus vel, sollicitudin sodales justo.
        <br/> .....
        <br/> See you there!
        </p>
    </div>
    <div className="position-relative">
       <span className="d-block pb-2 mb-0 h5 text-uppercase text-dark font-weight-bold">
            About Meetup
       </span>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus efficitur laoreet.
         Donec ullamcorper bibendum tellus. Sed faucibus nulla et turpis cursus, ut bibendum ante dictum. 
        In dapibus sem vel lacinia dapibus. Ut aliquam mattis condimentum. Cras id metus hendrerit, blandit velit at,
        ultrices urna. Phasellus eget ipsum metus. Etiam vitae turpis malesuada lectus sagittis efficitur. 
        </p>
    </div>
    <div className="position-relative">
      <Row noGutters>
         <Col  className="d-none d-lg-flex justify-content-start">
         <span className="d-block pb-2 mb-0 h5 text-uppercase text-dark font-weight-bold">
            Members
       </span>
         </Col>
         <Col className="d-none d-lg-flex justify-content-end">
         <span className="d-block pb-2 mb-0 h7 text-dark font-weight-light">
            See all
       </span>
         </Col>
      </Row>
      <Row noGutters className="pt-5 pb-5 ml-3  mr-3 bg-secondary">
      <Media>
        <Media left className="pl-3">
          <Media object src={AVATAR} alt="Generic placeholder image" style={{width:'64px'}}/>
        </Media>
        <Media body className="h6 pl-2">
          <Media heading className="h6">
           Organizers
          </Media>
          Ardhy Wiranata 4 Others
        </Media>
      </Media>
      </Row>
       
    </div>
  </Fragment>
);

export default Content;
