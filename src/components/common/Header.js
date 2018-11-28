import React from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
  return (    
      <div>
         <nav>
            <IndexLink to="/" activeClassName="active"><span className="glyphicon glyphicon-home"></span> Home</IndexLink>
            <Link to="/checkout" activeClassName="active"><span className="glyphicon glyphicon-shopping-cart"></span> Checkout</Link>
        </nav>    
      </div>
  );
};


export default Header;
