import '../stylesheets/Tag.css' ;  
import Star from '../assets/images/star.png';
import React from 'react' ; 

export default function Tag( { text = "example" }){
  return(
  <>
    <div className='tagContainer'>
      <img src={Star}  className='star'/>
      <div className='tagText'>
          {text}
      </div>
    </div>
  </>
  )
};
