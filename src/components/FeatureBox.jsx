import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing. </p>
            </div>
        </div>
    </div>
  )
}

export default FeatureBox;