import { useState  , useEffect } from 'react' ;
import reactLogo from './assets/react.svg' ;
import viteLogo from '/vite.svg' ;
import Header from '../src/components/Header.jsx'  ; 
import PageOne from './pages/PageOne' ; 
import PageTwo from './pages/PageTwo' ; 
import LoadingAnimation from './pages/Animation'
import Tag from './components/Tag.jsx' ; 
import './App.css'

function App() {
  const [ isVisible , setIsVisible ] = useState(true) ;  // This toggles the animation 


  //Runs on mount 
  useEffect(() => { 
    setAnimationVisibility() ; 
  }, []) ; 

  //Toggles animation visibility 
  function setAnimationVisibility(){
    setTimeout(() => {
      console.log('Setting visiblity : ', isVisible ) ; 
      setIsVisible(false) ; 
      console.log('New visiblity : ', isVisible ) ; 
    }, 5000);
  }
  return (
    <>

      { isVisible && (
        <LoadingAnimation/> 
      )}  

      { !isVisible && 
      (<div className='app-container'>
        <Header /> 
        <div className='page-containers'>
          <PageOne />
        </div>
      </div>)
      }
    </>
  )
}

export default App
