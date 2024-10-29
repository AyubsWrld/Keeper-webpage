import React from 'react' ; 
import '../stylesheets/PageOne.css' ; 
import Tag from '../components/Tag.jsx' ; 


export default function PageOne(){
  return(
  <>
    <div className='pageOneContainer'>
      <Tag text='Introducing Keeper'/>
      <div className='Header'>
        Every Moment <br/> 
        Accounted  For
      </div>
    </div>
  </>
  )
};
