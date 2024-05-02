import React from "react";
import "./Home.css";
import { headerItems } from "./ProductItem";
import Slider from "./SlidersComponent/Slider";
import Img1 from "./BannerImages/Banner1.jpg";
import Img2 from "./BannerImages/Banner2.jpg";
import Img3 from "./BannerImages/Banner3.jpg";
import Img4 from "./BannerImages/Banner4.jpg";
import Img5 from "./BannerImages/Banner5.jpg";
import Img6 from "./BannerImages/Banner6.jpg";
import Product from "./Products/Product";
import Backtotops from "./BackToTop/Backtotops";
import { useSelector } from "react-redux";
import ProductNotFoundPage from "./NotFound/ProductNotFound";
const Home = () => {
  const {product} = useSelector((state) => state.data);
  const bannerImages = [Img1, Img2, Img3, Img4, Img5, Img6];
  return (
    <div>
      <div className="item-container">
        {headerItems &&
          headerItems.map((item, index) => <p key={index}>{item}</p>)}
      </div>
     {product?.length?(  <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-row">
            {product?.slice(0, 2).map((item, index) => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  detail={item.detail}
                  image={item.image}
                  specification={item.specification}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="home-row">
            {product?.slice(2, 5).map((item, index) => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  detail={item.detail}
                  image={item.image}
                  specification={item.specification}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="home-row">
            {product?.slice(5, 6).map((item, index) => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  detail={item.detail}
                  image={item.image}
                  specification={item.specification}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
          </div>
          <div style={{ marginTop: "4rem" }}>
            <Backtotops />{" "}
          </div>
        </div>
      </div>):(
        <ProductNotFoundPage
         title="Product Not Found"
        subTitle="Sorry, the product you are looking for does not exist."
        />
      )} 
    
    </div>
  );
};

export default Home;
