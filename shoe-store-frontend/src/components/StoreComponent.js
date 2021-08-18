import {Card, Button, Container, Row, Col, CardImg, CardText, CardBody,
CardTitle, CardSubtitle} from'reactstrap';
import {Component} from 'react';

let content = [3];

 function renderProducts(){
    for(let i in content){
        if(i  % 3 === 0){
            content.push(
               <Row>
                 <Col xs="6" sm="4">
                <Card>
                <CardImg variant="top" 
                src="https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_air-jordan-11-concord-2018-0.jpg"/>
                <CardBody>
                <CardTitle>Air Jordan 11 Concord 2018</CardTitle>
                <CardText>$300</CardText>
               <Button variant="primary">Click</Button>
                </CardBody>
            </Card>
            </Col>

            <Col xs="6" sm="4">
                <Card>
                <CardImg variant="top" 
                src="https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_air-jordan-11-concord-2018-0.jpg"/>
                <CardBody>
                <CardTitle>Air Jordan 11 Concord 2018</CardTitle>
                <CardText>$300</CardText>
               <Button variant="primary">Click</Button>
                </CardBody>
            </Card>
            </Col>

            <Col xs="6" sm="4">
                <Card>
                <CardImg variant="top" 
                src="https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_air-jordan-11-concord-2018-0.jpg"/>
                <CardBody>
                <CardTitle>Air Jordan 11 Concord 2018</CardTitle>
                <CardText>$300</CardText>
               <Button variant="primary">Click</Button>
                </CardBody>
            </Card>
            </Col>

            </Row>

            );
          }
        }
    }

   const Store = () => {
       renderProducts();
        return(
            <Container>
                {content}
            </Container>
        );
    }

export default Store;