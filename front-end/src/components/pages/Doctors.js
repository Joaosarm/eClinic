import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Doctors() {
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
            <div id='doctors'>
                <h2 id='title'>Médicos</h2>
                <ul>
                    {doctors.map((doctor) => {
                        return (
                            <div key={doctor.name} id='doctor'>
                                <li>
                                    <div>
                                        <img src={doctor.picture} />
                                        <p id='name'>{doctor.name}</p>
                                        <p>{doctor.specializations.name}</p>
                                    </div>
                                    <div>
                                        <p id='description'>{doctor.description}</p>
                                    </div>
                                </li>
                                <Link to={`/agendamento/?doctor=${doctor.id}`}>
                                    <button>Agendar Consulta</button>
                                </Link>
                            </div>
                        )

                    })}
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
    font-family: var(--primaryFont);
    min-height: calc(100vh - 80px);
    #doctors{
        display: flex;
        flex-direction: column;
        margin-top: 150px;
        align-items:center;
        width: 100vw;
    }
    img{
        width: 140px;
        height: 140px;
        border-radius: 70px;
        margin-right: 30px;
    }
    h2{
        border-bottom: 1px solid #32A1B1;
        border-top: 1px solid #32A1B1;
        color: rgb(1, 137, 49);
        font-size: 35px;
        margin: 0;
        margin-top: 40px;
    }
    #doctor,li{
        width: 80vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 40px;
            #name{
                font-weight: 600;
                font-size: 20px;
            }
        
            p{
                font-weight:400;
                color: rgb(50, 161, 177);
                margin: 2px 32px 0 0;

            }
            #description{
                width: 300px;
                color: black;
            }
        }
    }
    button{
        margin-bottom: 60px;
        margin-right: 20px;
        height: 60px;
        width: 100px;
        background-color: transparent;
        font-family: var(--primaryFont);
        border: solid 1px rgb(89, 142, 101);
        border-radius: 15px;
        font-size: 17px;
        font-weight: 500;
        color:#ac5940;
    }

    @media (max-width:700px) {
        h2{
            font-size: 25px;
            margin: 10px 0;
        }
        #doctor,li{
            width: 80vw;
            div{
                display: flex;
                margin: 0 10px 15px 0;
                #name{
                    font-size: 12px;
                }
                p{
                    margin: 2px 2px 0 0;
                    font-size: 10px;
    
                }
                #description{
                    font-size: 10px;
                    width: 130px;
                }
                img{
                    height: 70px;
                    width: 70px;
                    margin: 0;
                }
            }
        }
        button{
            height: 30px;
            width: 60px;
            font-size: 10px;
            margin: 0 20px 30px 0;
            border-radius: 7px;
        }
    }
`