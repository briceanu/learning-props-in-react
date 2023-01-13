import React from 'react';
// eslint-disable-next-line
import hero from '../style/hero.scss';
import ambassador from '../assets/ambassador.jpg';
import child from '../assets/child.jpg';
import fashion from '../assets/fashion.jpg';
import man from '../assets/man.jpg';
import person_640 from '../assets/person_640.jpg';
import portrait from '../assets/portrait.jpg';
import student from '../assets/student.png';
import suitcase from '../assets/suitcase.jpg';
import woman from '../assets/woman.jpg';

function Hero() {
  return (
    <section>
      <div className='images_container'>
        <img src={ambassador} alt='ambasador' />
        <img src={child} alt='child' />
        <img src={man} alt='man' />
        <img src={portrait} alt='portrait' />
        <img src={fashion} alt='fashion' />
        <img src={suitcase} alt='suitcase' />
        <img src={student} alt='student' />
        <img src={woman} alt='woman' />
        <img src={person_640} alt='person_640' />
      </div>
      <h1 className='hero_header'>Online Experiences</h1>
      <p className='hero_paragraph'>
        Join unique interactive activities let by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
