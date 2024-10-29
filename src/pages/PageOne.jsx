import React from 'react' ; 
import '../stylesheets/PageOne.css' ; 
import Tag from '../components/Tag.jsx' ; 
import Button from '../components/Button.jsx' ; 


export default function PageOne(){
  return(
  <>
    <div className='page-one-container'>
      <Tag text='Introducing Keeper'/>
      <div className='text-container'>
        <div className='page-one-header'>
          Every Moment <br/> 
          Accounted  For
        </div>
        <div className='page-one-subext'>
          Enhance focus and track progress by locking <br/> applications
        </div>
      </div>
      <Button text='Learn more'/>
    </div>
  </>
  )
};
