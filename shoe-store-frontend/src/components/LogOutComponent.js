import React from 'react';
import {Button} from 'reactstrap';

function Logout(props) {
    
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
    return (
        <span onClick={logout}>Logout</span>
    )

}
export default Logout;