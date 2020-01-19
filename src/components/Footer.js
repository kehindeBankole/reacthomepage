import React from 'react';
import Container from 'react-bootstrap/Container'
import './styles/footer.css'

const Footer = () =>{
    return(
        <div>
     <Container fluid className="text-center mt-5 text-white"> 
        <footer className="footer">     
       <p className="text-muted">Verge Games {new Date().getFullYear()} || All Rights Reserved</p>
        </footer>  
     </Container>
        </div>
    )
}
export default Footer
