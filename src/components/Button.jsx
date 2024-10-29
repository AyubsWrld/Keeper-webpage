import React from 'react' ; 
import '../stylesheets/Button.css' ;

function defaultCallback() {
  console.log("Default callback triggered");
}

export default function Button({ text = 'Button', callback = defaultCallback }) {
  return (
    <button onClick={callback} className='button-style'>
      {text}
    </button>
  );
}
