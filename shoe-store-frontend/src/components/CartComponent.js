import React, {useState} from 'react';
import { Toast, ToastBody, ToastHeader, Button, Modal, 
ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import Loading from './LoadingComponent';

let content;
let selectedProduct = null;
var items = [null, null, null];

//Error: Too much re-rendering because of the button in the loop.
//When you press the the button the re-rendering error occurs

const Cart = (props) => {



  function renderProducts(){
    //items = props.cart.products;


    if(props.cart.products.length === 0){
        <div>
          <h1>Cart Is Empty</h1>
        </div>

    }

    else{
    
     content = [items.length];

     items.map((item) => {
       content.push(
        <div className="p-3 my-2 rounded"  style={{ background: 'black' }}> 
        <Toast style={{ background: 'white' }}>
         <ToastHeader>
           {item.name}
         </ToastHeader>
         <ToastBody>
         <img src={item.url}
           width="100px" height="90px"/>
           <h6>Size: {item.size}M</h6>
           <h6>Size: {item.size2}F</h6>
           <h6>${item.price}</h6>
         </ToastBody>
       </Toast>
       <Button outline color="danger" href="/cart" onClick={props.removeShoeFromCart(item)}>Remove</Button> 
     </div>
       )
     })
    }
    
  }

  if(props.cart === null){
    return(
     <Loading/>
    );
  }
  else{
    items = props.cart.products;
    renderProducts();
    console.log(props)
    return(
      <div className="container">
      <h1>Cart</h1>
      {content}
   <div className="col-sm-12">
     <h2>Subtotal: ${props.cart.amount}</h2> 
     <h6>+ shipping costs:${5.99}</h6>
     <h1>Total:${props.cart.amount}</h1>
     <Button size="lg" href="/shop">Keep Shopping</Button>
    <br/>
    <br/>
    <Button size="lg"  href="/paymentform">Check Out</Button>
    <br/>
    <br/>
    <Button color="danger" href="/cart" onClick={props.clearCart}>Clear</Button>
   
  </div>
  <br/>
</div>

  );
 }
}

export default Cart;