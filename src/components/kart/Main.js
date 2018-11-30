import React from 'react';
import {jumbotron} from 'bootstrap';
import Checkout from './Checkout';

export default class Main extends React.Component{
    render(){
        return (
            <div className="container">
                <div>
                   <Checkout />
                </div>    
            </div>
        );
    }  
}

