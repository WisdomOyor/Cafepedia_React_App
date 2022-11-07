import React from 'react';
import HotSales from './hotSales';
import Works from './how-it-works';
import Offers from './what-we-offer';

export default function Body() {
  return (
    <div>
      <Offers></Offers>
      <HotSales></HotSales>
      <Works></Works>      
    </div>
  );
}
