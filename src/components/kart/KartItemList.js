import React, {PropTypes} from 'react';
import ItemRow from './ItemRow';

const KartItemList = ({kartItems, onClick, operation}) => {
    return(
        <div className="container">
            <div className="row">
                {kartItems.map(item =>
                       <ItemRow key={item.id} product={item} onClick={onClick} operation={operation}/> 
                )}            
            </div>            
        </div> 

    ); 
};

KartItemList.propTypes = {
    kartItems: PropTypes.array.isRequired,
    onClick: PropTypes.object.isRequired
};

export default KartItemList;

