import React,{useEffect, useState} from 'react'
import {MdOutlineQrCodeScanner} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";
import {Link,useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import { requirePropFactory } from '@material-ui/core';

const Wrapper = styled.div`
  display : flex; 
  justify-content: space-between;
  align-items: start;

  width:100vw;
  height: 10vh;
  margin-bottom: 1rem;

  svg{
    min-height: 1rem;
    min-width: 1rem;
    margin-left:10%;
    margin-right: 10%;
    margin-top: 2rem;
    color: black; 
    font-size: 1.5rem;
  }
`;
const ContentWrap = styled.div`
  display : flex; 
  justify-content: center;
  align-items: center;
  width:100vw;
  height: 90vh;
  margin-top:1rem;
  padding-top: 0.5rem;
  img{

    height: 100%;
    width: 100%;
    
  }
`;


//Content Screen with Icons for going to Qr Scanner and for open Settings 
function Content() {
  
   const [error,setError] = useState(false);
   
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('hello')
    if (params.id === 'NoResult'){
        setError(true);
        console.log(error)
    } 
  },[params.id]);

  return (
    
    <div>
      <Wrapper>
        
        <MdOutlineQrCodeScanner onClick={()=> {navigate('/QRScanner')}}/> 
        <IoSettingsOutline />
      </Wrapper>  
        <ContentWrap>
        {!error && <img src={require('../img/'+params.id+'b.png')}/>}
        </ContentWrap>
    </div> 
  )
}

export default Content