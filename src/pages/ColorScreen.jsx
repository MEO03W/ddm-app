import React,{useState} from 'react'
import './ColorScreen.css'
import blue from '../img/blue_blind.png';
import green from '../img/green_blind.png';
import red from '../img/red_blind.png';
import mono from '../img/monochromatic.png';
import {useTranslation} from 'react-i18next';

function ColorScreen() {

  const{t} = useTranslation();

  //state Hook for Color Mode 
  //needs to be stored local / session wide 
  const{colorMode,setcolorMode} = useState('');
  return (
    <div>
      

      
      <div 
        className='article'
        style={{backgroundImage: `url(${blue})`}}
        onClick={() => {setcolorMode('blue')}}>
          <h1 className='header'>{t('blue')}</h1>
      </div>
      <div 
        className='article'
        style={{backgroundImage: `url(${green})`}}>
          <h1 className='header'>{t('green')}</h1>
      </div>
      <div 
        className='article'
        style={{backgroundImage: `url(${red})`}}>
          <h1 className='header'>{t('red')}</h1>
      </div>
      <div 
        className='article'
        style={{backgroundImage: `url(${mono})`}}>
          <h1 className='header'>{t('mono')}</h1>
      </div>
      {/*}
      <div>
      <img src={blue} alt="A picture of Art in ColorBlindMode for not seeing the blue spectrum" /> 
      <h1 className="header"></h1>
      </div>
      <img src={green} alt="A picture of Art in ColorBlindMode for not seeing the green spectrum" /> 
      <img src={red} alt="A picture of Art in ColorBlindMode for not seeing the red spectrum" /> 
      <img src={mono} alt="A picture of Art in ColorBlindMode for not seeing the mono spectrum" /> 
    */}
    </div>
  )
}

export default ColorScreen