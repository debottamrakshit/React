import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/Header';
class App extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Header /> 
                <div className="container">
                    {this.props.children}                  
                </div>
                <div className="footer">All Rights Reserved</div>
            </div>
        )
    }
}
App.propTypes={
    children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        
        };
}
export default connect(mapStateToProps)(App);
