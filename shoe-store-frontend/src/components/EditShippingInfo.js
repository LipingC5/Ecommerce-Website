import {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";

class ShippingAddress extends Component{

    constructor(props){
        super(props);

        this.state = {
          address: "",
          city: "",
          state: "",
          postcode: ""
        }
    }

    handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(this.state));
      window.location.href = "/user";
    }

    handleAddressChange = (event) => {
      const val = event.target.value;
      this.setState({
        address: val
      })
    }

    handleCityChange = (event) => {
      const val = event.target.value;
      this.setState({
        city: val
      })
    }

    handleStateChange = (event) => {
      const val = event.target.value;
      this.setState({
        state: val
      })
    }

    handlePostCodeChange = (event) => {
      const val = event.target.value;
      this.setState({
        postcode: val
      })
    }

   render(){
    return (
     <div className="container">
        <br/>
       <h1>Shipping Address</h1>
       <br/>
        <Form onSubmit={this.handleSubmit}>
      <Row>
      <Col md={6}>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="address" placeholder="1234 Main St" 
        onChange={this.handleAddressChange}/>
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
            <Input type="text" name="city" id="city"
            onChange={this.handleCityChange}/>
          </FormGroup>
        </Col>
        <Col sm={1}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="state" onChange={this.handleStateChange}/>
          </FormGroup>
        </Col>
        <Col md={1}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="postcode" id="postcode" onChange={this.handlePostCodeChange}/>
          </FormGroup>  
        </Col>
      </Row>
      <Button type="submit" onClick={this.props.editShippingInfo(this.state)}>Submit</Button>
    </Form>
    <br/>

    </div>
    );
   }
}

export default ShippingAddress;