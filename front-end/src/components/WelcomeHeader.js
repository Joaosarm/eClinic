import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../contexts/userContext';
import { Link } from 'react-router-dom';


export default function WelcomeHeader() {
  const { user } = useContext(UserContext);

  return (
    <Welcome>
      <h2>Bem vindo, 
        <Link to={'/meu-perfil'}> {user.name}</Link>
      </h2>
    </Welcome>
  )
}

const Welcome = styled.div`
margin-right: 25px;
  h2{
    margin-top: -4px;
    font-size: 22px;
    font-family: var(--primaryFont);
    color: var(--highlightColorDarker)
  }

  @media (max-width:600px) {
    h2{
      font-size: 17px;
    }
  }
`
