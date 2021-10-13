import {Form, FormGroup, Label, Input, Button, Col} from 'reactstrap';
const contact = () => {
    return(
        <div className="container">
            <h1>Contact Us</h1>
            <Form>
                <FormGroup className="col-sm-6" row>
                    <Label for="name">First Name</Label>
                    <Col sm={10}>
                     <Input type="name" name="firstName" id="firsName" placeholder="First Name"/>
                     </Col>
                </FormGroup>
                <FormGroup className="col-sm-6" row>
                     <Label for="name" >Last Name</Label>
                     <Col sm={10}>
                     <Input type="name" name="lastName" id="lastName" placeholder="Last Name"/>
                     </Col>
                </FormGroup>
            <FormGroup row className="col-sm-6">
             <Label for="email" sm={2}>Email</Label>
               <Col sm={10}>
                <Input type="email" name="email" id="email" placeholder="example@mail.com" />
              </Col>
            </FormGroup>
                <FormGroup>
                <Col md={10}>
                  <Label for="exampleText">Text Area</Label>
                  <Input type="textarea" name="text" id="exampleText" 
                  className="form-control" rows="12"/>
                </Col>
                </FormGroup>
                <FormGroup className="col-sm-2" row>
                <Col sm={10}>
                    <Button>Submit</Button>
                </Col>
                </FormGroup>
            </Form>

        </div>
    );
}

export default contact;