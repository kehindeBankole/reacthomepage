import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './logo.png'
import Image from 'react-bootstrap/Image'
import './styles/link.css'




const Sitelink = ()=> {
    return(
        <Container>
            <Row > 
              <Col sm={6}className="mt-5  text-center">
              <p><i className="fab fa-twitter mt-2 mr-2"></i>@vergegames</p>
              <p><i className="fab fa-facebook mt-2 mr-2"></i>@vergegames</p>
              <p><i className="fab fa-twitch mt-2 mr-2"></i>@vergegames</p>
              <p><i className="fas fa-envelope mt-2 mr-2"></i>verge@gmail.com</p>
              <p><i className="fas fa-phone mt-2 mr-2"></i>+2349023453212</p>
              </Col>
              <Col sm={6}>
                  <Image src={logo} alt="logo"fluid/>
              </Col>
            </Row>
            <hr style={{border:"1px solid black"}}/>
        </Container>
    )
}
export default Sitelink