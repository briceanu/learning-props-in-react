import React from 'react';
// eslint-disable-next-line
import cards from '../style/cards.scss';

function Card({ description, price, stock, image, country }) {
  return (
    <div className='card'>
      <p className='sold'> {stock}</p>
      <img src={image} alt='swimmer' />
      <p>
        <span>5.0</span>(6) {country}
      </p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
export default Card;
