import React, {PropTypes} from 'react';


const KartInfo = ({kartItems}) => {
    return(
        <div className="container">
            <div className="row">
                <p>{kartItems.length}</p>
            </div>
        </div> 

    ); 
};

KartInfo.propTypes = {
    kartItems: PropTypes.array.isRequired
};

export default KartInfo;

