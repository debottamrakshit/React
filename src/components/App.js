import React from 'react';
import Main from '../components/kart/Main.js';
import '../styles/styles.css';
import Header from '../components/common/Header';

class App extends React.Component{

    constructor(state){
        super(state);
    }
    render(){
        return (
            <div className="app">
            <Header />
             <Main />
            </div>
        );
    }
}

export default App;