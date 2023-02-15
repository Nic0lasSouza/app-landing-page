import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
          <h2>{props.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, eros et auctor tincidunt, lectus ipsum tristique nunc, tincidunt porttitor nulla arcu tincidunt odio. Curabitur ex libero, finibus in turpis eget, porttitor lacinia lectus. Nunc.</p>
          <button>{props.button}</button>
        </div>
    </div>
  )
}
// 17:46
export default About;