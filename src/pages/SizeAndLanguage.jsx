import React, { useState } from 'react'
import FontSize from '../components/FontSize';
import LanguageSelector from '../components/LanguageSelector';
import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
import {useTranslation} from 'react-i18next';

//dont need navlink anymore - app work progreammatically only forward 
//maybe later to render this component in the settings overlay 

const Wrapper = styled.div`
    margin: 4rem 0 rem
    color: #000;
`;

const Button=styled.button`
font-size:2rem;
margin: 1rem;
padding: 0.25rem 1rem; 
border-radius: 3px; 
color: #000;
background-color: #fff;
border: 2px solid #000;
width: 50vh;
`;

//color 777B7E //grey


//Let us Pick Font Size and Language for the App 
//both stored in LocalStorage of the Browser
//needs to be dynamically 
function SizeAndLanguage() {

  //useTranls hook 
  const {t} = useTranslation(); 
  //default States for font size and lang 
  const [fontSize, setFontsize] = useState('14px');
  const [selectedLang, setSelectedLang] = useState('en');
  const [selected, setSelected] = useState("Select your Language");
  const navigate = useNavigate();

  //Storing current fontSize and Language in LocalStorage so we can use App-Wide 
  const setLocalStorage = () => {
    localStorage.setItem("fontSize",fontSize);  
    localStorage.setItem("selectedLang",selectedLang);
  }

  //Function for implementing hook with chil component 
  //should be reviewed to only use State method 
  //seems like it works rn (better for now)
  const setGlobalFontSize = (fontSizeData) => {
    setFontsize(fontSizeData);
  }

  return (
      <div>
        <LanguageSelector selected={selected} setSelected={setSelected}/>
        <FontSize fontSize="14px" setGlobalFontSize={setGlobalFontSize}/>
        
            {/*<NavLink replace to={'QRScanner'} > */}
              <Button onClick={()=>{
                setLocalStorage(); 
                navigate("/ColorScreen")
                }}>
                {t('btnContinue')}
              </Button>
            {/*</NavLink>*/}
        
      
            </div>
    );
}



export default SizeAndLanguage