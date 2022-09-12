import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import Footer from '../Footer';


export default function MainScreen() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get("http://localhost:5000/doctors");
        setDoctors(request.data);
      } catch (error) {
        alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
        console.log(error);
      }
    })();
  }, [setDoctors]);
  return (
    <Container>
      <img id='banner' className='banner' src='./assets/banner.png'></img>
      <div id='specializations' >
        <h2>Especialidades</h2>
        <ul>
          <li>Ginecologia</li>
          <li>Pediatria</li>
          <li>Ultrassom</li>
        </ul>
      </div>
      <div id='doctors'>
        <h2 id='title'>Médicos</h2>
        <ul>
          {doctors.map((doctor) => {
            return (
              <li key={doctor.name}>
                <img src={doctor.picture} />
                <p id='name'>{doctor.name}</p>
                <p>{doctor.specializations.name}</p>
              </li>
            )

          })}
        </ul>
        <Link to={'/medicos'}>
          <button>Mais Informações</button>
        </Link>
      </div>
      <AboutUs />
      <Contact />
    </Container>
  )
}

const Container = styled.div`
  margin-top:130px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  font-family: var(--primaryFont);

  img.banner{
    width: 100vw;
  }
  #specializations,#doctors{
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;
  }
  h2{
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    border-bottom: 1px solid #32A1B1;
    border-top: 1px solid #32A1B1;
    color: rgb(1, 137, 49);
    font-size: 27px;
  }
  #doctors{
    background: #32A1B1;
    h2{
      border-bottom: 1px solid white;
      border-top: 1px solid white;
      color: white;
    }
  }
  ul{
    width: 80vw;
    padding-top: 30px;
    margin: 0;
    display:flex;
    font-size: 20px;
    font-weight: 600;
    justify-content: space-between;

    li{
      img{
        width: 140px;
        height: 140px;
        border-radius: 70px;
        margin-bottom: 20px;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
        font-weight: 400;
        font-size: 20px;
        margin: 0;
        color: white;
      }
      #name{
        font-weight: 500;
        font-size: 24px;
        color: black;
      }
    }
  }
  button{
    height: 50px;
    width: 180px;
    background-color: rgb(89, 142, 101);
    font-family: var(--primaryFont);
    border: solid 3px #ac5940;
    color: white;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 300;
    margin-top: 30px;
    :hover{
      cursor: pointer;
    }
  }

  @media (max-width:600px) {
    #doctors, #specializations{
      padding: 30px 0;
    }
    ul{
      padding-top: 30px;
      padding-left: 0;
      display:flex;
      font-size: 16px;
  
      li{
        img{
          width: 80px;
          height: 80px;
          border-radius: 40px;
        }
        p{
          font-size: 10px;
        }
        #name{
          font-size: 20px;
        }
      }
    }
    button{
      height: 43px;
      width: 100px;
      font-size: 14px;
    }
  }
`