import React, {useState} from 'react'
import styled from 'styled-components';
import {QrReader} from 'react-qr-reader';
import {useNavigate} from 'react-router-dom';

{/*Button Styling */}
const Button=styled.button` 
font-size:2rem;
margin: 1rem;
padding: 0.25rem 1rem; 
border-radius: 3px; 
color: #ffffff;
background-color: #000000;
border: 2px solid #ffffff;
`;

//change Wrapper use localstorage font size 
const Wrapper=styled.div`
min-height:            50vh;
max-height:            75vh;
margin:                2rem;
background-color:   #030321;
font-size:             2rem;
font-family:       'Roboto';
color:              #ffffff;

`; 

//Our QR Scanner 
//Result is text right now 
//remember to Start Server as https (otherwise the QrScanner doesnt Work on Mobile devices) - ($env:HTTPS = "true") -and (npm start)
//check the location before with npm start
function QrScanner() {

  const [data,setData] = useState('No Result'); //useState Hook for data 
  const navigate = useNavigate();

  return (
    
    <div>
      <Wrapper>
      <QrReader
        delay={300}                   //delay in ms after each is scanned  
        constraints={{                //mediaConstraints
          facingMode: 'environment'   //choose the camera (face or environment)
        }}
       
        onResult={(result, error) => {  //result Handling 
          if (!!result) {
            setData(result?.text)       //setData in useState hook to the result 
          }

          //if (!!error) {                //trivial error Handling 
           // console.log(error);       
          //}
        }}
        
        //ViewFinder={} component ? ? need to find out how to render that out 
        containerStyle={{ width: '75vw'  }}      //compnentContainer 
        videocontainerStyle={{ witdth: "50vw" }} //videoContainer
      /> 
      <p style={{color:'#ffffff'}}>{data}</p>                   {/* display the data in paragraph*/}
      <Button onClick={()=>{navigate('/Content')}}>SCAN SCAN</Button>      {/* trivial Button*/}
      </Wrapper>
    </div>      
  );
}

export default QrScanner