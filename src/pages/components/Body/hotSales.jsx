import React from 'react';
import Bbread from '../../../Pictures/b-bread.png';
import cinnamon from '../../../Pictures/cinnamons.png';
import cake from '../../../Pictures/cake.png';
import HotSalesItem from './HotSalesItem';
import hotSalesItems from '../../../hot-sales-list';

export default function HotSales() {
  let hotSalesImgs = [Bbread, cake,cinnamon];
  return (
    <div className="hot-sales row">
      <h1>Hot Sales</h1>
      <hr />
      {hotSalesItems.map((item, index) => (
        <HotSalesItem src={hotSalesImgs[index]} alt={item.name} name={item.name} desc={item.desc} amount={item.amount}></HotSalesItem>
      ))}
    </div>
  );
}
