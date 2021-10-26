import {Card, Button, Container, Row, Col, Form, FormGroup, Label, Input} from'reactstrap';
import {Redirect} from 'react-router-dom';
import React, {useState} from 'react';








const ShoePage = (props) => {

    const [Size, setSize] = useState(props.shoe[0]);
    const[selectedShoe, setSelectedShoe] = useState(props.shoe[0].size);

    let authorized = localStorage.getItem('token');
    let sizeOptions = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5];
    var options = [];
    if (authorized === null) {
        return <Redirect to="/login" />
    }

   
     let stock = props.shoes[0];
     const data = props.shoe[0];

     const search = (sku) => {
        console.log(Size);
        setSelectedShoe(stock.filter((shoe) => (shoe.sku == sku && shoe.size == Size) && shoe.inStock === true)[0]);
        console.log(selectedShoe);
     }

     function renderSizeOptions (options, sizeOptions) {
        options = sizeOptions.map((option) => {
            options.push(
               <div>
                   <Col style={{border:'3px solid black'}}>
                   <Row>
                    <Col>
                    <h4>{option}M</h4>
                    </Col>
                    <Col>
                    <h4>{option + 1.5}F</h4>
                    </Col>
                   </Row>  
                   <Button onClick={() => {setSize(option); search(data.sku)}} active={Size == option}>Select</Button>
                   </Col>
               </div>
           );
       })
    }


    renderSizeOptions(options, sizeOptions);
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
              {options}
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
        <Button size="md" onClick={props.addShoeToCart(selectedShoe)} href="/cart">Buy Now</Button>
        </Col>

        <Col sm ="2" md="4">
        <Button  onClick={props.addShoeToCart(selectedShoe)} href="/cart">Add To Cart</Button>
        </Col>
        </Row> 

        </Col>

        </Row>

         </Container>
        </div>
    );
}

export default ShoePage;