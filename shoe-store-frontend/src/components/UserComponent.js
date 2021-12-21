import React from 'react';
import {Row, Col, Button, Table} from 'reactstrap';
import Loading from './LoadingComponent';



var ordersList = [null];
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
       {/* <Button size="sm" href="editprofile">Edit Profile</Button>*/}
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

function renderOrders(orders){
  if((orders !== undefined && localStorage.getItem('token') !== null)){
    if(orders === null){
      return (
        <div>
          <h1>No orders has been made</h1>
        </div>
      );
    }
     else{
      content = [];
     return(
       ordersList.map((item) => {
         content.push(
           <Row>
          <Col  xs="5" md="5">
          <h3>Order number:{item.orderNumber} </h3>
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
        {item.products.map((product) => {
          return(
           <tr>
           <th scope="row">{product.sku}</th>
          <td>{product.name}</td>
           <td><img src={product.url}
           width="30%" height="30%"/></td>
           <td>${product.price}</td>
         </tr>
          );

        })}
        <tr>
        <th>Total: </th>
         <td> <h5>${item.amount}</h5></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <th>Delivery Status: </th>
         <td> <h5>{item.delivered}</h5></td>
        <td></td>
        <td></td>
        </tr>
      </tbody>
        </Table>
        </Col>
        </Row>

         );
       })
         
     );
     }
  }
}

const User = (props) => {

   //style={{border: '3px solid rgba(0, 0, 0, 1)',}}
   
   if((props.customer !== undefined && localStorage.getItem('token') !== null) && (props.customer.shippingInfo !== undefined)){
    console.log(props.orders);
    ordersList = props.customer.orders;
    renderOrders(props.orders);
    return(
       <div className="container">
          
            {renderUserPage(props.customer)}
            <Row>
             <br/>
           </Row>
           {content}

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
