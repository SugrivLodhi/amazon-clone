import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Img1 from "../Img/amazon_offer.jpg";
import { products } from "../ProductItem";
import "./SingleProduct.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addInBasket } from "../Redux/Action";
const SingleProduct = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  const addToCart = () => {
    let item = {
      id: singleProduct.id,
      title: singleProduct.title,
      price: singleProduct.price,
      rating: singleProduct.rating,
      image: singleProduct.image,
    };
    dispatch(addInBasket(item));
  };
  return (
    <div className="single-product-container">
      <img src={Img1} alt="banner_offer" className="single-product-ad" />
      <div className="single-product">
        <img
          src={singleProduct.image}
          alt=""
          className="single-product-image"
        />
        <div className="single-product-info">
          <div className="single-product-title">{singleProduct.title}</div>
          <div className="single-product-rating">
            {Array(singleProduct.rating)
              .fill()
              .map((_, index) => (
                <p key={index}>*</p>
              ))}
          </div>
          <p className="single-product-price">
            Price : <strong>$</strong>
            <strong>{singleProduct.price}</strong>
          </p>
          <div className="single-product-specification">
            <h4>Product Specification</h4>
          </div>
          <div className="single-product-description">
            <h4>Product Description</h4>
            <p>{singleProduct.detail}</p>
          </div>
          <button onClick={addToCart}>
            <i>
              <ShoppingCartIcon />
            </i>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
