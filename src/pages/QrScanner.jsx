import React, {useEffect,useState} from 'react'
import styled from 'styled-components';
import {QrReader} from 'react-qr-reader';
import {useNavigate, useParams} from 'react-router-dom';
import { MdOutlineDirectionsRailwayFilled } from 'react-icons/md';
import {useTranslation} from 'react-i18next';

{/*Button Styling */}
const Button=styled.button` 
font-size:2rem;
margin: 1rem;
padding: 0.25rem 1rem; 
border-radius: 3px; 
color: #000;
background-color: #fff;
border: 2px solid #000;
`;

//change Wrapper use localstorage font size 
const Wrapper=styled.div`
min-height:            50vh;
max-height:            99vh;
margin:                0;
padding:               0;
background-color:   #fff;
font-size:             2rem;
font-family:       'Roboto';
color:              #ffffff;

`; 

//Our QR Scanner 
//Result is text right now 
//remember to Start Server as https (otherwise the QrScanner doesnt Work on Mobile devices) - ($env:HTTPS = "true") -and (npm start)
//check the location before with npm start
function QrScanner() {
  let params = useParams();

  const {t} = useTranslation();
  const [data,setData] = useState('NoResult'); //useState Hook for data 
  const navigate = useNavigate();
  const [colorMode,setcolorMode] = useState('m')
 // const [isMounted,setisMounted] = useEffect(false);
{/*
  useEffect(() => {
    setisMounted(true);
    return () => setisMounted(false); 

  },[]);*/}

  useEffect(() => {
    setcolorMode(params.mode)
     
  },[params.mode]); //if the mode changes in runtime 
  
  useEffect(() => {
       
     if (data !=='NoResult') {
      navigate('/Content/'+data);
     }

  },[data]);

 //isMounted && to the brackets in front of Qr Reader comp 
  return (
    
    <div>
      <p>{t('qrText')}</p>
      <p>{/*isMounted.toString*/}</p>
      <Wrapper>
      <p>{t('qrText')}</p>
      { <QrReader
        delay={300}                   //delay in ms after each is scanned  
        constraints={{                //mediaConstraints
          facingMode: 'environment'   //choose the camera (face or environment)
        }}
       
        onResult={(result, error) => {  //result Handling 
          if (!!result) {
            setData(result?.text)       //setData in useState hook to the result 
          }

          if (!!error) {                //trivial error Handling 
            console.log('error##');       
          }
        }}
        
        //ViewFinder={} component ? ? need to find out how to render that out 
        containerStyle={{ width: '100vw'  }}      //compnentContainer 
        videocontainerStyle={{ witdth: "100%" }} //videoContainer
      />}
      <p style={{color:'#ffffff'}}>{data}</p>                   {/* display the data in paragraph*/}
      {/*<Button onClick={()=>{navigate('/Content/'+data)}}>SCAN SCAN</Button> */}      {/* trivial Button*/}
      </Wrapper>
    </div>      
  );
}

export default QrScanner