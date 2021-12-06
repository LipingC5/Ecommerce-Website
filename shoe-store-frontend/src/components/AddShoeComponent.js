import {Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";

class AddShoe extends Component{

    constructor(props){
        super(props);

        this.state = {
          name: "",
          url: "",
          price: null,
          brand: "",
          size: 4,
          color1: "",
          color2: "",
          color3: "",
          color4: ""
        }
    }

    handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(this.state));
      this.props.addProductToStore(this.state);
      //window.location.href = "/shop";
    }

    
    handleNameChange = (event) => {
      const val = event.target.value;
      this.setState({
        name: val
      })
    }

    handleUrlChange = (event) => {
      const val = event.target.value;
      this.setState({
        url: val
      })
    }

    handlePriceChange = (event) => {
      var val = event.target.value;
      val = Number(val);
      this.setState({
        price: val
      })
    }

    handleBrandChange = (event) => {
      const val = event.target.value;
      this.setState({
        brand: val
      })
    }

    handleSizeChange = (event) => {
      var val = event.target.value;
      val = Number(val);
      this.setState({
        size: val
      })
    }

    handleColor1Change = (event) => {
      const val = event.target.value;
      this.setState({
        color1: val
      })
    }

    handleColor2Change = (event) => {
      const val = event.target.value;
      this.setState({
        color2: val
      })
    }

    handleColor3Change = (event) => {
      const val = event.target.value;
      this.setState({
        color3: val
      })
    }

    handleColor4Change = (event) => {
      const val = event.target.value;
      this.setState({
        color4: val
      })
    }
    

   render(){
     console.log(this.props);
    return (
     <div className="container">
        <br/>
       <h1>Add Product</h1>
       <br/>
        <Form onSubmit={this.handleSubmit} className="bg-gray">
      
      <Row>
      <Col md={5}>
      <FormGroup>
        <Label for="name">name</Label>
        <Input type="text" name="name" id="name" placeholder="name" 
        onChange={this.handleNameChange}/>
      </FormGroup>
      </Col>
      </Row>

      <Row>
      <Col md={5}>
      <FormGroup>
        <Label for="url">Image URL</Label>
        <Input type="text" name="url" id="url" placeholder="www.example.com" onChange={this.handleUrlChange}/>
      </FormGroup>
      </Col>
      </Row>

      <Row>
        <Col md={5}>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input type="text" name="price" id="price"
            onChange={this.handlePriceChange}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
      <Col md={5}>
          <FormGroup>
            <Label for="brand">Brand</Label>
            <Input type="text" name="brand" id="brand" onChange={this.handleBrandChange}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
      <Col md={5}>
          <FormGroup>
            <Label for="size">Size</Label>
            <Input type="text" name="size" id="size" onChange={this.handleSizeChange}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
      <Col md={5}>
          <FormGroup>
            <Label for="color1">Color 1</Label>
            <Input type="text" name="color1" id="color1" onChange={this.handleColor1}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
      <Col md={5}>
          <FormGroup>
            <Label for="color2">Color 2</Label>
            <Input type="text" name="color2" id="color2" onChange={this.handleColor2}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
      <Col md={5}>
          <FormGroup>
            <Label for="color3">Color 3</Label>
            <Input type="text" name="color3" id="color3" onChange={this.handleColor3}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
      <Col md={5}>
          <FormGroup>
            <Label for="color4">Color 4</Label>
            <Input type="text" name="color4" id="color4" onChange={this.handleColor4}/>
          </FormGroup>
        </Col>
      </Row>
      <br/>

      <Row>
      <Col md={5}>
      <Button type="submit" onClick={this.props.addProductToStore(this.state)}>Submit</Button>
      </Col>
      </Row>

    </Form>
    <br/>

    </div>
    );
   }
}

export default AddShoe;