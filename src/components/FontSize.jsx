import React, { useState } from 'react'
import {Slider} from '@material-ui/core';
import styled from 'styled-components';
import { green } from '@material-ui/core/colors';
import {useTranslation} from 'react-i18next';

function FontSize(props) {
   //transl
   const {t} = useTranslation();   

    //font Size State
    const [data, setData] = useState()

    //Dynamic font sizing
    // 
    const Wrapperfont = styled.div`
    font-size: ${data}px; 
    margin-bottom:3rem;
    color: #000;
    `;

    
  return (
   
    <div >
        <Wrapperfont>
        {t('fontSelectText')}
        {/*My Prop is <h1>{props.fontSize}</h1>*/}
        </Wrapperfont> 
        <Slider defaultValue={14} 
                aria-label="Always Visible" 
                valueLabelDisplay="on" 
                onChange={(event, value) => {
                  setData(value);
                  props.setGlobalFontSize(value);
                }}
                min={12}
                max={35}
                style={{color:'#000'
                        }}/>
        
        
        </div>
     
  )
}




export default FontSize 