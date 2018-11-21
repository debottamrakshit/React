import React from 'react';
import {jumbotron} from 'bootstrap';
import Checkout from './Checkout';

export default class Main extends React.Component{
    render(){
        return (
            <div className="container">
                <img src="/shared/images/header.jpg" width="100%" height="10%"/>  
                <div>
                   <Checkout />
                </div>    
            </div>
        );
    }  
}

