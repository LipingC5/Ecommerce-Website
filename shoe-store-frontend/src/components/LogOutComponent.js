import React,{useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

const Logout = (props) => {

    
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }

    return (
        <div>
        <span onClick={logout}>Logout</span>
        </div>
    );

}
export default Logout;