import React from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
  return (    
      <div>
        <img src="/shared/images/header.jpg" height="100" width="100%"/>  
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/checkout" activeClassName="active">Checkout</Link>
        </nav>    
      </div>
  );
};


export default Header;
