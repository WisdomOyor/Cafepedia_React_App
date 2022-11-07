import React from 'react';
import Footer from './components/Footer';
import '../App.css';
import Bbread from '../Pictures/b-bread.png';
import cinnamon from '../Pictures/cinnamons.png';
import cake from '../Pictures/cake.png';
import yogurt from '../Pictures/yogurt.png';
import coffee from '../Pictures/coffee.png';
import MenuItem from './components/Body/MenuItem';
import MenuItems from '../menu-items-list';
import hotSalesItems from '../hot-sales-list';

export default function Menu() {
  let hotSalesImgs = [Bbread, cake, cinnamon];
  let menuImgs = [yogurt, coffee];

  return (
    <div>
      <div className="body dark-img-bg-div">
        <div className="body-child row">
          <h1>Menu</h1>
          <hr />
          {hotSalesItems.map((item, index) => (
            <MenuItem src={hotSalesImgs[index]} alt={item.name} name={item.name} desc={item.desc} amount={item.amount}></MenuItem>
          ))}
          {MenuItems.map((item, index) => (
            <MenuItem src={menuImgs[index]} alt={item.name} name={item.name} desc={item.desc} amount={item.amount}></MenuItem>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
