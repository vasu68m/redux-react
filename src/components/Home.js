import React from "react";

const Home = () => {
  return (
    <div>
      <div className="cart">
        <img
          src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png"
          alt="_blank"
        />
      </div>
      <h1>home component</h1>
      <div className="cart-wrapper item">
        <div className="img-wrapper">
          <img
            src="https://www.91-img.com/pictures/146919-v6-apple-iphone-14-pro-max-mobile-phone-large-7.jpg?tr=h-241,c-at_max,q-80"
            alt="_blank"
          />
        </div>

        <div className="text-wrapper">
          <span>name: i-phone</span>
          <span> price: 1500$</span>
        </div>

        <div className="btn-wrapper">
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
