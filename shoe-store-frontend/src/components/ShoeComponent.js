import {Card, Button, Container, Row, Col, Form, FormGroup, Label, Input} from'reactstrap';
import {Redirect} from 'react-router-dom';

const ShoePage = (props) => {

    let authorized = localStorage.getItem('token');

    if (authorized === null) {
        return <Redirect to="/login" />
    }
    
    const data = props.shoe[0];
    console.log("this is the data : ");
    console.log(data);
    console.log(props);

    return (
        <div>
        <Container>
        <Row>
            <Col>
            <Row xs="8" className="selected-image">
            <img src={data.url}
            width="500px" height="400px"/>
            </Row>
            <Row>
               <Form inline>
               <FormGroup>
                 <Label for="exampleSelect">Size</Label>
                  <Input type="select" name="select" id="exampleSelect">
                   <option>6</option>
                   <option>6.5</option>
                   <option>7</option>
                   <option>7.5</option>
                   <option>8</option>
                 </Input>
              </FormGroup>
              <br/>
               </Form>
              
         </Row>
         </Col>
       
        <Col>
        <Row>
            <br></br>
            <br></br>
            <br></br>
        </Row>
        <Row xs="8">
           <h1>{data.name}</h1>
        </Row>
        <Row>
    <h2>${data.price}</h2>  
        </Row>
        <Row>
            <br></br>
            <br></br>
        </Row>
       <Row>
        <Col sm="2" md="4" >
        <Button size="md"  onClick={props.addShoeToCart(data)} href="/cart">Buy Now</Button>
        </Col>

        <Col sm ="2" md="4">
        <Button  onClick={props.addShoeToCart(data)} href="/cart">Add To Cart</Button>
        </Col>
        </Row> 

        </Col>

        </Row>

         </Container>
        </div>
    );
}

export default ShoePage;