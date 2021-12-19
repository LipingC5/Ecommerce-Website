import {Component, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { API_ENDPOINT} from '../api/APIKey';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Login extends Component{

  constructor(props){
    super(props)


    this.state = {
      username: "",
      password: "",
      token: null,
      role: null,
      modal: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
        modal: !this.state.modal
    });
}



   handleUsernameChange = (event) => {
    const val = event.target.value;
        this.setState({
           username: val,
        })
  };

  handlePasswordChange = (event) => {
    const val = event.target.value;
        this.setState({
           password: val,
        })
  };

  
  handleSubmit = (event) => {

    event.preventDefault();
       var payload = {
         "username": this.state.username,
         "password": this.state.password
     }
     fetch(API_ENDPOINT + 'authenticate',{
         method: 'POST',
         body: JSON.stringify(payload),
         headers: {
          'Content-Type': 'application/json',
         }
     })
     .then(res => res.json())
     .then(Object => {
         this.setState({
             token: Object.jwt,
             role: Object.roles
         });
         localStorage.setItem('token',this.state.token);

         localStorage.setItem('role',this.state.role);
         localStorage.setItem('username',this.state.username);

         console.log(this.state.token);
         console.log(this.state.role);

         if (this.state.token != null) {

             if (this.state.role == "[ROLE_ADMIN]") {
                 this.props.history.push("/admin");
             } else{
                 this.props.history.push("/user");
             }
         } else {
             localStorage.clear();
             this.props.history.push("/login");
             this.toggleModal();
             console.log(this.state.modal);
         }
     })
     .catch(err => console.log(err.message));  

  }
  
  render(){
    return(
      <div className="container">
           <img src="../images/user_logo.png" alt="user" height="15%" width="15%"
           style={{
            marginTop: 20,
            marginBottom:20
          }}/> 

          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField id="username" label="username"  style={{ margin: 8 }}margin="normal" onChange={this.handleUsernameChange}/>
          <br/>
          <TextField id="password" label="password" margin="normal" type="password" onChange={this.handlePasswordChange}/>
          <br/>
          <div>
          <Button variant="outlined" color="default" type="submit" size="large">Login</Button>

          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
           <ModalHeader>Not Authorized</ModalHeader>
            <ModalBody>
              Invalid username or password. Please try again.
            </ModalBody>
            <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>Ok</Button>
        </ModalFooter>
           </Modal>
          </div>

          <br/>
          <h6>or</h6>
          <div className="col-sm-12">
          <Button href="/signupform" variant="outlined" color="default" 
          type="submit" size="small">Sign-Up</Button>

         
          </div>
          </form>  
          <br/> 
        </div>
     
    );
  }
}


export default Login;