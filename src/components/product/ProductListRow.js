import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProductListRow = ({index, product, addToCart }) => {
  return (
    <div className="col-lg-3 col-md-4 col-xs-6">
      <div className="jumbotron text-center">


        <div className="view overlay my-8">
          <img className="img-fluid img-thumbnail" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="" />
          <a href="#">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        <h5 className="indigo-text h5 mb-4">Photography</h5>

        <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
        <p><a href="#" onClick={(e) => addToCart(e, index, product)} className="btn btn-info btn-xs" role="button">Button</a> <a href="#" className="btn btn-default btn-xs" role="button">Button</a></p>

      </div>
    </div>

  );
  
};

function handleEvent(params){
  console.log(params);
}
ProductListRow.propTypes = {
  index: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductListRow;