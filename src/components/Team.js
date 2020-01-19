import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const team=[
    {
        name:"victor Aremu",
        role:"lead unity developer",
        src:"http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"
    },
    {
        name:"john doe",
        role:"visual artist",
        src:"http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"
    },
    {
        name:"kakashi san",
        role:"graphics designer",
        src:"http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg"
    }
]

const Team = () =>{
    return(
        <div>
  <Container className="mt-5 bg-dark" fluid>
      <h3 className="text-center mb-3 mt-3 text-white">meet the team</h3>
            <Row>
              {
                  team.map((lal , i)=>{
                     return <Col className="mb-5" key={i}>
                     <Accordion className="text-center">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <Image src={lal.src} width="200" height="200" roundedCircle/>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
        <div className="text-center"> <p>{lal.role}</p>
               <p className="text-muted">{lal.name}</p>
        </div>
    </Accordion.Collapse>
</Accordion>
                      </Col>
                  })
              }
            </Row>
        </Container>
        </div>
     )
}
export default Team