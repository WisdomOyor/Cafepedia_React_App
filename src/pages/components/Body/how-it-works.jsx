import React from 'react';
import menu from "../../../Pictures/menu.png"
import sendMail from "../../../Pictures/send-mail.png"
import takeaway from "../../../Pictures/take-away.png"

export default function Works() {
    return (
      <div className="how-it-works yellow-div row">
      <h1>How it works</h1>
      <hr></hr>
        <div className="col-lg-4 col-div">
          <div>
          <img src={menu} alt="Logo" className='icon'></img>
            <h3>Choose your meal</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-div">
          <div>
          <img src={sendMail} alt="Logo" className='icon'></img>
            <h3>Send us your order with your location</h3>
            <p>Once you have chosen your meal, send your order to use on any of our socials. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-div">
          <div>
          <img src={takeaway} alt="Logo" className='icon'></img>
            <h2>Enjoy your meal</h2>
            <p>Your order gets delivered to you, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    );
  }
  