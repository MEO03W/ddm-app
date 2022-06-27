import React from 'react'

import blue from '../img/blue_blind.png';
import green from '../img/green_blind.png';
import red from '../img/red_blind.png';
import mono from '../img/monochromatic.png';


function ColorScreen() {
  return (
    <div>

      <img src={blue} alt="A picture of Art in ColorBlindMode for not seeing the blue spectrum" /> 
      <img src={green} alt="A picture of Art in ColorBlindMode for not seeing the green spectrum" /> 
      <img src={red} alt="A picture of Art in ColorBlindMode for not seeing the red spectrum" /> 
      <img src={mono} alt="A picture of Art in ColorBlindMode for not seeing the mono spectrum" /> 
    </div>
  )
}

export default ColorScreen