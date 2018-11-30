import React from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
  return (    
      <div className="navigation">      	
         <nav className="row">
	         <div className="col-sm-4 noPadding">
	      		<img src="/shared/images/logo.png" width="30%"/>
	      	</div>
      		<div className="col-sm-8 text-right navBtns noPadding">
            	<IndexLink to="/" activeClassName="active"><span className="glyphicon glyphicon-home"></span> Home</IndexLink>
            	<Link to="/checkout" activeClassName="active"><span className="glyphicon glyphicon-shopping-cart"></span> Checkout</Link>
            </div>
        </nav>            
      </div>
  );
};


export default Header;
