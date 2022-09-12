import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/userContext";
import styled from 'styled-components';

export default function Sidebar() {

  const {user} = useContext(UserContext);


  return (
    <SidebarStyle>
      <h1>Ver</h1>
      <Link to={'/doctors'}>
        <h2>Médicos</h2>
      </Link>
      <h1>Minha Conta</h1>
      {user?(
      <Link to={'/myAppointments'}>
        <h2>Meus agendamentos</h2>
        
      </Link>
      ):(
        <h2 onClick={() => alert('Você precisa entrar para ver seus agendamentos!!')}>Meus agendamentos</h2>
      )
      }
    </SidebarStyle>
  )
}

const SidebarStyle = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: var(--fundo);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 5;
  animation: showSidebar .4s;
  border-right: 1px solid var(--fundo2);

  h1{
    color: black;
    font-family: var(--logoFont);
    margin: 0;
    font-size: 26px;
    margin-top: 60px;
    margin-left: 20px;
    border-bottom: 1px solid gray;
  }

  h2{
    color: black;
    font-family: var(--primaryFont);
    margin-top: 10px;
    font-size: 16px;
    margin-left: 20px;
    cursor: pointer;
    background-color: var(--fundo2);
    padding: 5px;
  }

  h2:hover{
    background-color: var(--highlightColor)
  }

  @keyframes showSidebar{
    from{
      opacity: 0;
      width:0;
    }
    to {
      opacity: 1;
      width: 25vw;
    }
  }
`