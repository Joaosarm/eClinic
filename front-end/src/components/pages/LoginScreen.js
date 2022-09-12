import axios from 'axios'
import styled from 'styled-components';
import { useState, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Loading from '../Loading'
import StyledButton from '../styledButton'
import UserContext from '../../contexts/userContext';





export default function LoginScreen() {

  const {user, setUser} = useContext(UserContext);
  const navigator = useNavigate();

  
  const [hidePassword, setHidePassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState(
    {
      email: '',
      password: '',
    }
  )

  async function enterApp() {
    try {
      const response = await axios.post("http://localhost:5000/sign-in", login);

      setUser(response.data);
      setLoading(!loading);
      navigator("/");
      
    } catch (error) {
      alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
      console.log(error);
    }
  }

  function Button() {
    if (loading) {
      return <Loading />
    } else {
      return (
        <StyledButton text='Login' onclick={enterApp} />
      )
    }
  }

  function ShowHidePassword() {
    return (
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
    )
  }

  // componentes principais

  return !user? (
    <Container>
      <h1><a className='e'>e</a>Clinic</h1>
      <input
        type={'text'}
        placeholder={'Email'}
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      />
      <input
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
        type={hidePassword ? 'password' : 'text'}
        placeholder={'Senha'}
      />
      <ShowHidePassword />

      <Button />
      <Link to={'/signUp'}>
        <div className='link-text'>
          <p>Primeira vez? Cadastre-se!</p>
        </div>
      </Link>
      <Link to={'/'}>
        <div className='link-text'>
          <p>Retornar ao Site</p>
        </div>
      </Link>
    </Container>
  ):(
    <Container>
      <h1>Olá, {user.name}</h1>
      <button onClick={deleteAccount}>Deletar minha conta</button>
      
      <button onClick={logOut}>Sair</button>
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
  align-items: center;
  width: 100vw;
  height: 80vh;
  background: white;
  margin-top: 150px;
  
  p{
    margin: 5px;
  }
  .link-text{
    font-family: var(--primaryFont);
    color: var(--highlightColorDarker);
  }
  h1{
    font-size: 45px;
    font-family: var(--logoFont);
    color: #ac5940;
  }
  .e{
    color: #c79958;
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
    /* color: black; */
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
    transition: .3s;
    cursor: pointer;
    margin-bottom: 15px;
    background-color: black;
  }
  button p{
    font-family: var(--primaryFont);
  }
  button:hover{
    transform: scale(1.05);
  }
  .show-and-hide-password{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
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
