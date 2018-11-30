import React, {PropTypes} from 'react';
import {Link} from 'react-router';

// export default function IncludeRemoveOperation(product, onClick, operation){
//     return(
//         <div className="card-body">            
//             {operation &&
//                 <a href="#" onClick={() => onClick(product.id)} class="badge badge-pill badge-primary" aria-pressed="true">Remove</a>       
//             }
//         </div>
//     );
// } 


const ItemRowOperation = ({product, onClick, operation}) => {
  return(      
    <div className="card-body"> 
    {operation &&
       <a href="#" onClick={() => onClick(product.id)} className="badge badge-pill badge-primary" aria-pressed="true">Remove</a>       
    }           
    </div>
  );
}

ItemRowOperation.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired
}

export default ItemRowOperation;