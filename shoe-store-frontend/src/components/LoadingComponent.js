import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {

    return(
        <div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Spinner style={{ width: '7rem', height: '7rem' }} />{' '}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Loading;