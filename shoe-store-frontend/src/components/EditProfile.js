import {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class EditProfile extends Component{

  constructor(props){
    super(props);
  }

   render(){
    return (
     <div className="container">
        <br/>
       <h1>Edit Profile</h1>
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
      
      <Button>Submit</Button>
    </Form>
    <br/>

    </div>
    );
  }
}

export default EditProfile;