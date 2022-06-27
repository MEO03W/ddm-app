import React, { useState } from 'react'
import {Slider} from '@material-ui/core';
import styled from 'styled-components';
import { green } from '@material-ui/core/colors';

function FontSize(props) {
    
    //font Size State
    const [data, setData] = useState()

    //Dynamic font sizing
    // 
    const Wrapperfont = styled.div`
    font-size: ${data}px; 
    margin-bottom:3rem;
    color: #ffffff;
    `;
    
  return (

    <div >
        <Wrapperfont>
        Please set the Font-Size to your personal preference
        My Prop is <h1>{props.fontSize}</h1>
        </Wrapperfont> 
        <Slider defaultValue={14} 
                aria-label="Always Visible" 
                valueLabelDisplay="on" 
                onChange={(event, value) => {
                  setData(value);
                  props.setGlobalFontSize(value);
                }}
                min={12}
                max={40}
                style={{color:'#777B7E'
                        }}/>
        
        
        </div>
     
  )
}




export default FontSize 