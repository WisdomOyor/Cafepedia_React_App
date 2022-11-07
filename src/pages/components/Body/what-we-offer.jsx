import React from 'react';
import phoneIcon from "../../../Pictures/smartphone.png";
import bread from "../../../Pictures/bread.png";
import delivery from "../../../Pictures/delivery-truck.png"

export default function Offers() {
  return (
    <div className="what-we-offer yellow-div row">
      <div className="col-lg-4 col-div">
        <div>
        <img src={bread} alt="Logo" className='icon'></img>
          <h3>ORIGINAL RECIPES</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="col-lg-4 col-div">
        <div>
        <img src={phoneIcon} alt="Logo" className='icon icon2x'></img>
          <h3>SMOOTH ORDERING</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="col-lg-4 col-div">
        <div>
        <img src={delivery} alt="Logo" className='icon icon2x'></img>
          <h2>FASTEST DELIVERY</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}
