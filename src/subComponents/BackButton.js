// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Back from '../assets/Images/back.png'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(20,226,233,0.6);
    box-shadow: 0 0 8px 6px rgba(20,226,233,0.3);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const BackButton = () => {
    return (
        <Power>
        <NavLink to="/">
            <img src={Back} alt="UFO" width={30} height={30}/>
        </NavLink>
        </Power>
    )
}

export default BackButton
