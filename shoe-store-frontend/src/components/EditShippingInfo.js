import {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ShippingAddress extends Component{

    constructor(props){
        super(props);
    }

   render(){
    return (
     <div className="container">
        <br/>
       <h1>Sign-Up Form</h1>
       <br/>
        <Form>
      <Row>
      <Col md={6}>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      </Col>
      </Row>

      <Row>
      <Col md={6}>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      </Col>
      </Row>

      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col sm={1}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <Button>Submit</Button>
    </Form>
    <br/>

    </div>
    );
   }
}

export default ShippingAddress;