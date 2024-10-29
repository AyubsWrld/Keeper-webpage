import { useState } from 'react' ;
import reactLogo from './assets/react.svg' ;
import viteLogo from '/vite.svg' ;
import Header from '../src/components/Header.jsx'  ; 
import PageOne from './pages/PageOne' ; 
import Tag from './components/Tag.jsx' ; 
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header />
        <PageOne />
      </div>
    </>
  )
}

export default App
