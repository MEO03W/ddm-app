import React from 'react';
import styled from 'styled-components';
import {NavLink, useNavigate} from 'react-router-dom';
import '../App.css'


const Wrapper=styled.div`
min-height:            50vh;
min width:             50vw;  
margin:                2rem;
background-color:   #fff;
font-size:             2rem;
font-family:       'Roboto';
color:              #000;
display:               flex;  
align-items:         center;
justify-content:     center;
`; 

const Button=styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 7px;
background-color: #000000;

color: #ffffff;
border: 2px solid #ffffff; 
box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
`;

//Welcome Screen
function Welcome() {

  const navigate = useNavigate();


  return (
    <Wrapper>
    <div>Welcome to Kunsthalle</div>
    {/*<NavLink to={'SizeAndLanguage'}>*/}
        <Button onClick={()=>navigate("/SizeAndLanguage")}>Start</Button>
    {/*</NavLink>*/}
    </Wrapper>
     )
}

export default Welcome