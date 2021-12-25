import {Card, Button, Container, Row, Col, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, NavLink} from'reactstrap';
import {Component} from 'react';
import { useHistory, Link } from 'react-router-dom';
import Loading from './LoadingComponent';

let content;

 function renderProducts(shoes, addShoeToCart){
   var sku = "";
    for(let i = 0; i < shoes.length; i+=63){
      if(sku != shoes[i].sku){
        sku = shoes[i].sku;
            content.push(
              
                 <Col xs="6" sm="4">
                <Card key={shoes[i].id}>
                <CardImg variant="top" 
                src={shoes[i].url}/>
                <CardBody>
                <CardTitle>{shoes[i].name}</CardTitle>
                <CardText>${shoes[i].price}</CardText>
                <Link to={{
                   pathname: `/shoe/${shoes[i].id}`,
                   state : {
                    shoe:shoes[i],
                    //addShoeToCart: addShoeToCart
                  }
                }}>
               <Button outline color="danger">Click</Button>
               </Link>
                </CardBody>
            </Card>
            </Col>
           
            );
            }
        }
    }

   const Store = (props) => {

    if (!props.shoes) {
        return (

        <div>
          <Loading/>
        </div>

     );
    }
    else if(props.shoes.length === 0){
        return (
            <div>
              <Loading/>
            </div>
         );
    }
    else{
        
        content = [];

        console.log(props.addShoeToCart);
        
        renderProducts(props.shoes[0], props.addShoeToCart);
        return(
            <Container className="res">
               <Row>
                {content}
                </Row>
            </Container>
        );

    }
    }

export default Store;