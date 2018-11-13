import React, {PropTypes} from 'react';
import ItemRow from './ItemRow';

const KartItemList = ({kartItems}) => {
    return(
        <div className="container">
            <div className="row">
                {kartItems.map(item =>
                       <ItemRow product={item} /> 
                )};
            </div>
        </div> 

    ); 
};

KartItemList.propTypes = {
    kartItems: PropTypes.array.isRequired
};

export default KartItemList;

