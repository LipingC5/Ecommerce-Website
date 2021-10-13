import React from 'react';
import {Row, Col, Button, Table} from 'reactstrap';
import Loading from './LoadingComponent';



let content;

function renderUserPage(customer){
  if((customer !== undefined && localStorage.getItem('token') !== null) && (customer.shippingInfo !== undefined)){
  return(
   <div>
  <Row><br/></Row>
  <Row> 
      <Col sm="2" >
         <img src="../images/user_logo.png" width="90%" height="90%"/>
      </Col>
      <Col xs="4" md="2">
        <div>
        <h4>{customer.firstName}</h4>
        <h4>{customer.lastName}</h4>
        </div>
        <h6>{customer.email}</h6>
        <h4>{customer.number}</h4>
        <Button size="sm" href="editprofile">Edit Profile</Button>
      </Col>
      
      <Col xs="4" md="4">
        <h4>{customer.shippingInfo.address}</h4>
        <h4>{customer.shippingInfo.city}, {customer.shippingInfo.state}</h4>
        <h4>{customer.shippingInfo.postcode}</h4>
        <Button size="sm" href="editshipping">Edit Shipping Address</Button>
      </Col>
  </Row>
  <Col>
  <Row>
  </Row>
  </Col>
  <Row>
    <br/>
    <br/>
  </Row>
  <Row >
      <h1>Welcome, {customer.firstName}  {customer.lastName}!</h1>
  </Row>
  </div>
  );
  }
}

const User = (customer) => {

   //style={{border: '3px solid rgba(0, 0, 0, 1)',}}

   if((customer.customer !== undefined && localStorage.getItem('token') !== null) && (customer.customer.shippingInfo !== undefined)){
    return(
       <div className="container">
          
            {renderUserPage(customer.customer)}
            <Row>
             <br/>
           </Row>
           <Row >
               <Col  xs="5" md="5">
               <h3>Order number: </h3>
      <Table>
      <thead>
        <tr>
          <th>Sku</th>
          <th>Name</th>
          <th>Image</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Air Jordan 1 Blue</td>
          <td><img src="https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-1-retro-high-white-university-blue-555088-134_1_gdxkyn_1800x1800.jpg?v=1615473630"
          width="30%" height="30%"/></td>
          <td>$120</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Air Jordan 1 Blue</td>
          <td><img src="https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-1-retro-high-white-university-blue-555088-134_1_gdxkyn_1800x1800.jpg?v=1615473630"
          width="30%" height="30%"/></td>
          <td>$120</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Air Jordan 1 Blue</td>
          <td><img src="https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-1-retro-high-white-university-blue-555088-134_1_gdxkyn_1800x1800.jpg?v=1615473630"
          width="30%" height="30%"/></td>
          <td>$120</td>
        </tr>
        <tr>
        <th>Total: </th>
        <td> <h5>$360</h5></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <th>Delivery Status: </th>
        <td> <h5>Pending</h5></td>
        <td></td>
        <td></td>
        </tr>
      </tbody>
        </Table>
        </Col>
        </Row>

       </div> 
    );

   }

   else{
    return(
      <div>
        <Loading/>
        
      </div>
    )
  }
  
   
}


export default User;
