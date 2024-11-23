import { useState } from 'react' ;
import reactLogo from './assets/react.svg' ;
import viteLogo from '/vite.svg' ;
import Header from '../src/components/Header.jsx'  ; 
import PageOne from './pages/PageOne' ; 
import PageTwo from './pages/PageTwo' ; 
import Tag from './components/Tag.jsx' ; 
import './App.css'

function App() {

  return (
    <>
      <div className='app-container'>
        <Header />
        <div className='page-containers'>
          <PageOne />
          <PageTwo />
        </div>
      </div>
    </>
  )
}

export default App
