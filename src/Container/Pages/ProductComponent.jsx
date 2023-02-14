import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
const products = useSelector((state) => state.productReducer.product);
const renderList = products.map((i) => {
  const { id, title, image, price, category,rating } = i;
  return (
    <div className="grid-container" key={id}>
      <Link to={`/product${id}`}>
        <div className="ui link cards">
          <div className="">
            <div className="">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
              <div className="meta">{rating.count}</div>
              <div className="meta">{rating.rate}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});
return <>{renderList}</>;
}

export default ProductComponent