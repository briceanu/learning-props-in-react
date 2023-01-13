import React from 'react';
// eslint-disable-next-line
import cards from '../style/cards.scss';
import swimmer from '../assets/swimmer.jpg';
// eslint-disable-next-line
import bike from '../assets/bike.jpg';
// eslint-disable-next-line
import bride from '../assets/bride.jpg';

function Cards() {
  return (
    <div className='cards_container'>
      <div className='swimmer card'>
        <img src={swimmer} alt='swimmer' />
        <p>
          <span>5.0</span>(6) USA
        </p>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <b>From $136 </b>/ person
        </p>
      </div>
      <div className='bride card'>
        <img src={bride} alt='bride' />
        <p>
          <span>5.0</span>(30) USA
        </p>
        <p>Learn wedding photography</p>
        <p>
          <b>From $125 </b>/ person
        </p>
      </div>
      <div className='bike card'>
        <img src={bike} alt='bike' />
        <p>
          <span>4.8</span>(2) USA
        </p>
        <p>Group Mountain Bike</p>
        <p>
          <b>From $50 </b>/ person
        </p>
      </div>
    </div>
  );
}

export default Cards;
