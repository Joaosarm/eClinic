import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Loading from '../Loading'
import StyledButton from '../styledButton'


export default function RegisterScreen() {

  const navigator = useNavigate();

  const [hidePassword, setHidePassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(
    {
      email: "",
      name: "",
      age: "",
      password: "",
      confirmPassword:""
    }
  )


  async function registerUser(e) {
    e.preventDefault();
    console.log('Confirm pass', userData.confirmPassword);
    if (userData.password !== userData.confirmPassword) {
      alert('Sua senha e a confimação não são iguais');
      return;
    }
    setLoading(!loading);
    console.log('registrando usuário');

    try {
      await axios.post("http://localhost:5000/sign-up", userData);
      alert("Cadastro feito com sucesso!");
      navigator("/login");
    } catch (error) {
      alert("Erro ao enviar dados de cadastro!");
      console.log(error);
    }
  }

  function Button() {
    if (loading) {
      return <Loading />
    } else {
      return (
        <StyledButton text='Registrar' onclick={registerUser} />
      )
    }
  }

  return (
    <Container>
      
      <div className='title'>
      <h1><a className='e'>e</a>Clinic</h1>

      </div>
      <input
        type={'text'}
        placeholder={'Nome'}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <input
        type={'text'}
        placeholder={'Email'}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type={'number'}
        placeholder={'Idade'}
        onChange={(e) => setUserData({ ...userData, age: parseInt(e.target.value) })}
      />
      <input
        type={hidePassword ? 'password' : 'text'}
        placeholder={'Senha'}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <input
        type={hidePassword ? 'password' : 'text'}
        placeholder={'Confirme a Senha'}
        onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
      />
      <Button />
      {
        hidePassword ?
          <div className='show-and-hide-password'
            onClick={() => setHidePassword(!hidePassword)} >
            <ion-icon name="eye-outline" />
            <p >
              Mostrar Senha
            </p>
          </div>
          :
          <div className='show-and-hide-password'
            onClick={() => setHidePassword(!hidePassword)} >
            <ion-icon name="eye-off-outline" />
            <p>
              Esconder Senha
            </p>
          </div>
      }
      <Link to={'/login'}>
        <div className='link-text'>
          <p>Fazer Login</p>
        </div>
      </Link>
      <Link to={'/'}>
        <div className='link-text'>
          <p>Retornar ao Site</p>
        </div>
      </Link>

    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
  width: 100vw;
  height: 80vh;
  p{
    margin:0;
  }
  h1{
    margin: 0;
    color: #ac5940;
  }
  .e{
    color: #c79958;
  }
  .title{
    display: flex;
    margin: 30px;
  }
  .leave{
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link-text{
    margin-bottom: 10px;
  }
  .link-text p{
    font-family: var(--primaryFont);
    color: var(--highlightColorDarker);
  }
  h1{
    font-size: 45px;
    font-family: var(--logoFont);
  }
  img{
    width: 100px;
    height: auto;
  }
  input{
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
    border: none;
    width: 250px;
    height: 26px;
    font-size: 18px;
    border-radius: 8px; 
    font-family: var(--primaryFont);
    background-color: #ac5940;
  }
  input:focus {
    outline: 0;
  }
  input::placeholder{
    font-family: var(--primaryFont);
    color: var(--fundo);
  }
  button{
    border: none;
    width: 250px;
    height: 26px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    cursor: pointer;
    margin-bottom: 15px;
    background-color: var(--fundo);
  }
  button p{
    font-family: var(--primaryFont);
  }
  button:hover{
    transform: scale(1.05);
    background-color: var(--highlightColor);
  }
  .show-and-hide-password{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  .show-and-hide-password p{
    margin: 0;
    cursor: pointer;
    font-family: var(--primaryFont);
    font-size: 14px;
  }
  .show-and-hide-password ion-icon{
    font-size: 20px;
  }
`
