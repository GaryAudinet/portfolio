import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import BackButton from '../subComponents/BackButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import Coding from '../assets/Images/coding.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
max-width: 60%;
max-height: 60%;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<BackButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <img src={Coding} alt="coding" width={40} height={40} /> Développement Web
</Title>
<Description>
<strong>Développement</strong>
<p>
HTML5, CSS3, SASS, JavaScript, React, DOM, AJAX, Bootstrap
</p>
<strong>Données</strong>
<p>
SQL, MySQL, MongoDB
</p>
<strong>Back-end</strong>
<p>
Node.js, Express
</p>
<strong>Front-end</strong>
<p>
React
</p>
<strong>Outils</strong>
<p>
VScode, Lighthouse, WAVE, CCA, etc.
</p>
<strong>Plugins</strong>
<p>
Bcrypt, Jsonwebtoken, Multer, Dotenv, Helmet, Sequelize, Formik, Yup, Axios, etc.
</p>
</Description>


            </Main>

            <BigTitle text="COMPETENCES" top="80%" right="20%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
