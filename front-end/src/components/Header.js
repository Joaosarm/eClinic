import React, { useContext, useState } from 'react';
import UserContext from '../contexts/userContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WelcomeHeader from './WelcomeHeader';



export default function Header() {
  const {user} = useContext(UserContext);

  return (
    <Container>
    <Head></Head>
    <HeaderContainer>
      <Link to={'/'}>
      <h1><a>e</a>Clinic</h1>
      </Link>
      {!user?(
      <Link className='login' to={'./login'}>
          <ion-icon name="person-outline" />
          Login
      </Link>
      ):(
         <WelcomeHeader/>
      )}
    </HeaderContainer >
    <Menu>
      <a href="#title">
        <li >Quem somos</li>
      </a>
      <a href="#banner">
        <li>Especialidades</li>
      </a>
      <a href="#contact">
        <li>Contato</li>
      </a>
      <Link to={'/medicos'}>
        <li>Médicos</li>
      </Link>
      <Link to={'/agendamentos'}>
        <li>Agende agora!</li>
      </Link>
    </Menu>
    </Container>
  )
}

const Container = styled.header`
  position: absolute;
  z-index: 3;
`
const HeaderContainer = styled.div`
        height: 90px;
        width: 100%;
        display: flex;
        font-size: 24px;
        overflow-y: hidden;
        background:rgb(132, 215, 224);
        justify-content: space-between;
        align-items: center;

        h1{
          font-size: 60px;
          font-family: var(--logoFont);
          color: #ac5940;
          margin-left: 60px;
          margin-top: -10px;
          margin-bottom: 0;
        }
        a{
          color: #c79958;
        }
        .login{
          margin-top: -27px;
          display:flex;
          border: solid 2px #ac5940;
          border-radius: 5px;
          width: 130px;
          height: 35px;
          justify-content: center;
          align-items: center;
          margin-right: 25px;
          color: #ac5940;
          font-weight: 600;
          background: #EABB79;
          ion-icon{
            margin-right: 5px;
          } 
        }

        @media (max-width:1100px) {
          .login{
            width: 80px;
            height: 25px;
            font-size: 18px;
          }
          h1{
            font-size: 40px;
            margin: 0 0 15px 20px;
          }
        }
`

const Head = styled.div`
        background-color: #11A1B1;
        height: 30px;
        width: 100vw;
`

const Menu = styled.ul`
padding: 0;
  display: flex;
  height: 40px;
  align-items: center;
  background-color: rgb(234, 187, 121);
  margin-top: -30px;
  justify-content: space-around;
  font-size: 20px;
  font-family: var(--primaryFont);
  font-weight: 600;
  color: rgb(112, 51, 35);
  margin-bottom:0;

  @media (max-width:600px) {
    font-size: 10px;
    width: 100vw;
    padding: 0;
  }
`