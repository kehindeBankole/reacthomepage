import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.png'

const Nav=()=>{
    return(
        <>
        <Navbar className="bg-dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Navbar>
      </>
     
    )
}
export default Nav;