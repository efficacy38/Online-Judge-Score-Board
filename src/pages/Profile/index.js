import React from 'react';
import Profile from './Profile';

function index(props) {
    console.log('render')
    return (
        <div style={{height: "100%"}}>
            <Profile {...props}/>
        </div>
    )
}

export default index
