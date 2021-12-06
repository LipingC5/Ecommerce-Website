import React from 'react';
import {Card, Button, Container, Row, Col, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, NavLink} from'reactstrap';
import Loading from './LoadingComponent';

const Admin = (props) => {
    return(
        <div>
            <br/>
            <h1>Administration</h1>
            <br/>

            <Row>
            <Col xs="6" sm="4">
                <Card className="bg-darker">
                <CardImg variant="top" 
                />
                <CardBody>
                <CardTitle className="white">Add Shoe</CardTitle>
                <CardText>Text</CardText>
               <Button outline color="danger" href="/addshoe">Click</Button>
                </CardBody>
            </Card>
            </Col>

            <Col xs="6" sm="4">
                <Card className="bg-darker">
                <CardImg variant="top" 
                />
                <CardBody>
                <CardTitle className="white">Remove Shoe</CardTitle>
                <CardText>Text</CardText>
               <Button outline color="danger">Click</Button>
                </CardBody>
            </Card>
            </Col>

            <Col xs="6" sm="4">
                <Card className="bg-darker">
                <CardImg variant="top" 
                />
                <CardBody>
                <CardTitle className="white">View Shoes</CardTitle>
                <CardText>Text</CardText>
               <Button outline color="danger" href="">Click</Button>
                </CardBody>
            </Card>
            </Col>
            </Row>

            <br/>

            <Row>
            <Col xs="6" sm="4">
                <Card className="bg-darker">
                <CardImg variant="top" 
                />
                <CardBody>
                <CardTitle className="white">Title</CardTitle>
                <CardText>Text</CardText>
               <Button outline color="danger">Click</Button>
                </CardBody>
            </Card>
            </Col>

            <Col xs="6" sm="4">
                <Card className="bg-darker">
                <CardImg variant="top" 
                />
                <CardBody>
                <CardTitle className="white">Title</CardTitle>
                <CardText>Text</CardText>
               <Button outline color="danger">Click</Button>
                </CardBody>
            </Card>
            </Col>

            <Col xs="6" sm="4">
                <Card className="bg-darker">
                <CardImg variant="top" 
                />
                <CardBody>
                <CardTitle className="white">Title</CardTitle>
                <CardText>Text</CardText>
               <Button outline color="danger">Click</Button>
                </CardBody>
            </Card>
            </Col>
            </Row>
            <br/>
        </div>
    );
}

export default Admin;