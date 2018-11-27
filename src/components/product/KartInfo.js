import React, {PropTypes} from 'react';


const KartInfo = ({count}) => {
    return(
        <div className="container">
            <div className="row">
                <p>{count}</p>
            </div>
        </div> 

    ); 
};

KartInfo.propTypes = {
    count: PropTypes.array.isRequired
};

export default KartInfo;

