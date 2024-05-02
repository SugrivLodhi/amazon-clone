import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { removeBasket } from "../Redux/Action";
import { toast } from "react-toastify";
const CheckoutProduct = ({ id, title, image, rating, price,isHide }) => {
  let dispatch = useDispatch();
  const handleRemoveBasket = () => {
    dispatch(removeBasket(id));
    toast.success("Remove Item from cart successfully")
  };
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-image" />
      <div className="checkout-product-info">
        <h4 className="checkout-product-title">{title}</h4>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>*</p>
            ))}
        </div>
        <h4>
          price :<span>${price}</span>
        </h4>
       {!isHide && (
         <button onClick={handleRemoveBasket}>
         <i>
           <ShoppingCartIcon />
         </i>
         remove from basket
       </button>
       )}
       
      </div>
    </div>
  );
};

export default CheckoutProduct;
