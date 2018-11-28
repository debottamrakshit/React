import React, {PropTypes} from 'react';


const KartInfo = ({count}) => {
    return(
        <div className="container kartInfo">
            <span><strong>Cart Items:</strong> {count}</span>
        </div> 

    ); 
};

KartInfo.propTypes = {
    count: PropTypes.array.isRequired
};

export default KartInfo;

