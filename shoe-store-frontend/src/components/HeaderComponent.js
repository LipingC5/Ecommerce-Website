import {Component} from 'react';
import {Navbar, Container, Row, Col, Nav ,Form, FormControl, Button} from 'react-bootstrap';

class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
               <Navbar bg="darker" variant="dark" expand="lg" fixed="top">
                   <Container>
                       <Navbar.Brand href="#home" >Shoe Store</Navbar.Brand>
                       <Nav>
                         <Nav.Link href="/">Home</Nav.Link>
                         <Nav.Link href="shop">Shop</Nav.Link>
                         <Nav.Link href="#aboutus">About Us</Nav.Link>
                         <Nav.Link href="contact">Contact</Nav.Link>
                         <Nav.Link href="login">Login</Nav.Link>
                      </Nav>
                   </Container>
               </Navbar>  
        );
    }
}

export default Header;