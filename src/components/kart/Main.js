import React from 'react';
import {jumbotron} from 'bootstrap';
import Checkout from './Checkout';


export default class Main extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                    This is main page
                </div>
                <div>
                      <Checkout />
                </div>    
            </div>
        );
    }  
}