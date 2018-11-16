import React, {PropTypes} from 'react';
import ItemRow from './ItemRow';

const KartItemList = ({kartItems, actionLabel}) => {
    return(
        <div className="container">
            <div className="row">
                {kartItems.map(item =>
                       <ItemRow product={item} lable={actionLabel} /> 
                )};              
            </div>
        </div> 

    ); 
};

KartItemList.propTypes = {
    kartItems: PropTypes.array.isRequired,
    actionLabel:PropTypes.object.isRequired
};

export default KartItemList;

