import React from 'react';
import styled from 'styled-components';
import {NavLink, useNavigate} from 'react-router-dom';



const Wrapper=styled.div`
min-height: 50vh;
margin: 2rem;
background-color:   #030321;
font-size:             2rem;
font-family: 'Roboto';
color:              #ffffff;
display:               flex;  
align-items:        center;
justify-content:    center;
`; 

const Button=styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 7px;
background-color: #000000;

color: #ffffff;
border: 2px solid #ffffff; 
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