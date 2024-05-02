import React from 'react';
import './ProductNotFound.css'; // Import CSS file

const ProductNotFoundPage = ({title,subTitle}) => {
  return (
    <div className="not-found-container">
      <div className="not-found-message">
        <h2>{title}</h2>
        { subTitle && (
           <p>{subTitle}</p>
        )}
      </div>
    </div>
  );
};

export default ProductNotFoundPage;
