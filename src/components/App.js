import React from 'react';
import Main from '../components/kart/Main.js';

class App extends React.Component{

    constructor(state){
        super(state);
    }
    render(){
        return (
            <div className="App">
             <Main />
            </div>
        );
    }
}

export default App;