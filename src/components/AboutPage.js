import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import BackButton from '../subComponents/BackButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import UFO from '../assets/Images/UFO.svg'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const SpaceUFO = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<BackButton />
<ParticleComponent theme='dark' />

        <SpaceUFO>
            <img src={UFO} alt="UFO" />
        </SpaceUFO>    
        <Main>
        Polyvalent et organisé, après un BTS SIO spécialisé en systèmes et réseaux. Qui m'a permis de découvrir le développement web, qui s'est par la suite transformé en une forte volonté de l'approfondir. 
        <br /> <br/>
        Cela m'a donc finalement amené à la réalisation d'une formation de Développeur Web.
        <br/> <br/>
        Très motivé à l'idée de développer mes aptitudes et par la suite évoluer en développeur full-stack.
        </Main>

        <BigTitle text="À PROPOS" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
