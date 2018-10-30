import React from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
  return (    
      <div>
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>    
      </div>
  );
};


export default Header;
