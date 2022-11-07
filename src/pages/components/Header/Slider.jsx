import React from 'react';
import {Link} from "react-router-dom";

export default function Slider() {
  return (
      <div class="slider position-relative overflow-hidden text-center">
        <div class="slider-child mx-auto">
          <h1 class="display-4 font-weight-normal">Banana Bread</h1>
          <p class="lead font-weight-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <Link to="/menu">
          <a class="button" href="#">
            ORDER NOW
          </a></Link>
        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
  );
}
