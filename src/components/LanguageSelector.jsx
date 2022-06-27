import React, { useState } from 'react'
import Glider from 'react-glider';

import 'glider-js/glider.min.css';


/*const Pane = ({ children, style, className }) => (
  <div className={`slide ${className}`} style={style}>
    <h1>{children}</h1>
  </div>
);*/

function LanguageSelector() {

    const [languages,setlanguages] = useState(['de','en','fr']);
    const [chosenLang, setLang] = useState('de')
    const gliderRef = React.useRef(null)
  return (
   <div style={{color:'#ffffff',
               

                }}>
   
    {/*
    languages.map((lang)=>{
    <button>lang </button>})
    } 
  */}

<Glider draggable={true} scrollLock={true} hasDots={true} hasArrows={true} >
				<div>Content 1!</div>
				<div>Content 2!</div>
				<div style={{border:'2px solid white'}}>Content 3!</div>
				<div>Content 4!</div>
				<div>Content 5!</div>
			</Glider>

   {/* <Glider 
    ref={gliderRef}
    hasArrows={true}
    hasDots={false}
    draggable
    slidesToShow={0.5}
    slidesToScroll={1}
    scrollToSlide={5}

    >
      <Pane >English</Pane>
      <Pane>Deutsch</Pane>
      <Pane style={{border: '2px solid white'}}>Francais</Pane>
      <Pane>Espanol</Pane>
      <Pane>English</Pane>

    </Glider>
*/}
    </div>  
  )
}

export default LanguageSelector