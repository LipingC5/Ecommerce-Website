import {Component} from 'react';
import {Container, Nav} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return(
        <div className="main-footer" >
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="row">
                        <h3 className="white">Buy</h3>
                        <br></br>
                        <br></br>
                    </div>

                    <div className="row">
                    <a className="white" href="Store"><p>STORE</p></a>
                    </div>

                    <div className="row">
                    <a className="white" href="Purchases&Returns"><p>PURCHASES & RETURNS</p></a>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <h3 className="white">Support</h3>
                        <br/>
                        <br/>
                    </div>

                    <div className="row">
                    <a className="white" href="Store"><p>CONTACT US</p></a>
                    </div>

                    <div className="row">
                    <a className="white" href="Store"><p>FAQS</p></a>
                    </div>

                    <div className="row">
                    <a className="white" href="Store"><p>PRIVACY</p></a>
                    </div>
                </div>

                <div className="col">

                    <div className="row">
                    <h3 className="white">About</h3>
                    <br/>
                    <br/>
                    </div>

                    <div className="row">
                    <a className="white" href="Store"><p>ABOUT US</p></a>
                    </div>

                    <div className="row">
                    <a className="white" href="Store"><p>MEET OUR TEAM</p></a>
                    </div>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <SocialIcon url="http://www.facebook.com/profile.php?id=" fgColor="#FFFFFF" bgColor="#000000"/>
                <SocialIcon url="http://www.instagram.com" fgColor="#FFFFFF" bgColor="#000000"/>
                <SocialIcon url="http://www.twitter.com" fgColor="#FFFFFF" bgColor="#000000"/>

                <div className="row">
                    <p className="col-sm white">
                        &copy; {new Date().getFullYear()} Enzo Technologies | All rights reserved
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer;