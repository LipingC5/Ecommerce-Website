import {Component} from 'react';
import {Navbar, Container, Row, Col, Nav ,Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logout from './LogOutComponent';


    const Header = () => {

        let authorized = localStorage.getItem('token');

        if(authorized === null){

        return(
              
               <Navbar bg="darker" variant="dark" expand="lg" sticky="top">
                   <Container>
                       <Navbar.Brand href="/" >Shoe Store</Navbar.Brand>
                       <Nav>
                         
                         <Nav.Link href="/">Home</Nav.Link>
                         <Nav.Link href="/shop">Shop</Nav.Link>
                         <Nav.Link href="/aboutus">About Us</Nav.Link>
                         <Nav.Link href="/contactus">Contact</Nav.Link>
                         <Nav.Link href="/login">Login</Nav.Link>
                      </Nav>
                   </Container>
               </Navbar>  
          );
        }
        else{
            if(localStorage.getItem('role') == '[ROLE_USER]'){

            return(
            <Navbar bg="darker" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" >Shoe Store</Navbar.Brand>
                <Nav>

                  <Link to="/">
                  <Nav.Link href="/">Home</Nav.Link>
                  </Link>
                  <Link to="/shop">
                  <Nav.Link href="shop">Shop</Nav.Link>
                  </Link>
                  <Link to="/aboutus">
                  <Nav.Link href="aboutus">About Us</Nav.Link>
                  </Link>
                  <Link to="/contactus">
                  <Nav.Link href="contactus">Contact</Nav.Link>
                  </Link>
                  <Link to="/login">
                  <Nav.Link href="login">
                      <Logout/>
                  </Nav.Link>
                  </Link>
                  <Link to ="/cart">
                  <Nav.Link href="cart">
                  <img src="https://assets.webiconspng.com/uploads/2017/09/Shopping-Cart-PNG-Image-72455.png"
                  width="30" height="30"  className="d-inline-block align-top" alt="cart"/>
                  </Nav.Link>
                  </Link>
                  <Link to="/user">
                  <Nav.Link href="/user">
                  <img src="../images/user_logo.png" 
                  width="30" height="30"  className="d-inline-block align-top"/>
                  </Nav.Link>
                  </Link>
               </Nav>
            </Container>
        </Navbar>
            );

            }
            else{

                return(
                    <Navbar bg="darker" variant="dark" expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand href="/" >Shoe Store</Navbar.Brand>
                        <Nav>
        
                          <Link to="/">
                          <Nav.Link href="/">Home</Nav.Link>
                          </Link>
                          <Link to="/shop">
                          <Nav.Link href="shop">Shop</Nav.Link>
                          </Link>
                          <Link to="/aboutus">
                          <Nav.Link href="aboutus">About Us</Nav.Link>
                          </Link>
                          <Link to="/contactus">
                          <Nav.Link href="contactus">Contact</Nav.Link>
                          </Link>
                          <Link to="/login">
                          <Nav.Link href="login">
                              <Logout/>
                          </Nav.Link>
                          </Link>
                          <Link to="/admin">
                          <Nav.Link href="/admin">
                          <img src="../images/user_logo.png" 
                          width="30" height="30"  className="d-inline-block align-top"/>
                          </Nav.Link>
                          </Link>
                       </Nav>
                    </Container>
                </Navbar>
                    );

            }

        }
    }


export default Header;