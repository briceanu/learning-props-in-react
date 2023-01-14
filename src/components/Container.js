import React from 'react';
import Cards from '../components/Cards';
// eslint-disable-next-line
import swimmer from '../assets/swimmer.jpg';
// eslint-disable-next-line
import bike from '../assets/bike.jpg';
// eslint-disable-next-line
import bride from '../assets/bride.jpg';

function Container() {
  return (
    <div className='container'>
      <Cards
        image={bike}
        description='Riding tough'
        price='From $58 / night'
        stock='SOLD OUT'
      />
      <Cards
        image={swimmer}
        description='Swim in the ice'
        price='From $125 / person'
        stock='ONLINE'
      />
      <Cards
        image={bride}
        description='Wedding photography'
        price='From $200 / person'
        stock='IN SHOP'
      />
    </div>
  );
}

export default Container;
