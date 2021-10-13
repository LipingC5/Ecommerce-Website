import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';
import Loading from './LoadingComponent';



const PaymentForm = (props) => {
  
  const[PaymentForm, setPaymentForm] = useState({cardNumber: null});
   
  const handleSubmit =  (event) => {
    event.preventDefault();
    alert(JSON.stringify(PaymentForm));
    props.makeOrder(PaymentForm);
 
    }

   if(props.cart === null){
    return(
      <Loading/>
    );
  }
  else{

   console.log(props);
    return(
        <div className="container">
            <h1>Payment Form</h1>
            <h2>Price:${props.cart.amount}</h2>
            <br/>
            <div className="row">
            <div className="col-sm-4"/>
            <div className="col-sm-5">
            <Form  onSubmit={handleSubmit} >
                <FormGroup row>
                  <Label for="cardHolderName">Name</Label>
                  <Col>
                  <Input type="cardHolder" name="name" id="cardHolderName" placeholder="Full Name On Card" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="card">Card</Label>
                  <Col>
                  <Input type="cardNumber" name="card" id="card" placeholder="card number" value={PaymentForm.cardNumber}
                  onChange={ev => setPaymentForm({cardNumber: ev.target.value})}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="expirationDate">Expiration Date</Label>
                    <Col sm={3}>
                    <Input type="month-year" name="expirationDate" id="expirationDate" placeholder="mm/yyyy"/>
                    </Col>
                    <Label for="cvCode">CV Code</Label>
                    <Col sm={3}>
                    <Input type="cvCode" name="cvCode" id="cvCode" placeholder="CVC"/>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Col sm={10}>
                    <Button type="submit" value="submit" href="/user">Confirm Payment</Button>
                    </Col>
                </FormGroup>
            </Form> 
            </div>
          </div>  
        </div>
    );

  }
}

export default PaymentForm;