import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const signUp = () => {
    return (
     <div className="container">
        <br/>
       <h1>Sign-Up Form</h1>
       <br/>
        <Form>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username" id="username" placeholder="Username" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
          </FormGroup>
        </Col>
      </Row>


      <Row>
      <Col md={4}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="example@mail.com"/>
      </FormGroup>
      </Col>

      <Col md={4}>
      <FormGroup>
        <Label for="phoneNumber">Phone Number</Label>
        <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="123-456-7890"/>
      </FormGroup>
      </Col>
      </Row>
      
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
      <Button>Sign in</Button>
    </Form>
    <br/>

    </div>
    );
}

export default signUp;