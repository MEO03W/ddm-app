import React,{useEffect, useState} from 'react'
import {MdOutlineQrCodeScanner} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";
import {Link,useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display : flex; 
  justify-content: space-between;
  align-items: start;

  width:100vw;
  height: 100vh;

  svg{
    margin-left:20%;
    margin-top: 2rem;
    color: black; 
    font-size: 1.5rem;
  }
`;


//Content Screen with Icons for going to Qr Scanner and for open Settings 
function Content() {

  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(params)

  },[]);

  return (
    
    
      <Wrapper>
        
        <MdOutlineQrCodeScanner onClick={()=> {navigate('/QRScanner')}}/> 
        <IoSettingsOutline />
      
        <img></img>
      </Wrapper>
  )
}

export default Content