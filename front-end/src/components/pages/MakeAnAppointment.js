import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import styled from 'styled-components';
import axios from 'axios';


export default function MakeAnAppointment() {
    const [days, setDays] = useState();
    const [shifts, setShifts] = useState();
    const [appointments, setAppointments] = useState();
    const { user } = useContext(UserContext);
    const navigator = useNavigate();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const doctor = urlParams.get('doctor');
    const doctorId = parseInt(doctor);

    const tradutor = { 1:'monday',2 : 'tuesday',3 : 'wednesday',4 : 'thursday', 5: 'friday'};

    useEffect(() => {
        (async () => {
            try {
                const appoint = await axios.get(`http://localhost:5000/doctorSchedules/${doctor}`);
                setAppointments(appoint.data);
                const request = await axios.get(`http://localhost:5000/days/${doctor}`);
                setDays(request.data);
                // setDays({ '1': true, '2': false, '3': true, '4': false, '5': true });
                const shift = await axios.get(`http://localhost:5000/shifts/${doctor}`);
                setShifts(shift.data);
                // setShifts({ morning: true, afternoon: true })
            } catch (error) {
                alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
                console.log(error);
            }
        })();
    }, [setDays, setShifts]);

    const dayjs = require('dayjs')
    const today = dayjs().format('d DD/MM/YYYY');
    const oneDay = dayjs().add(1, 'day').format('d DD/MM/YYYY');
    const twoDays = dayjs().add(2, 'day').format('d DD/MM/YYYY');
    const threeDays = dayjs().add(3, 'day').format('d DD/MM/YYYY');
    const fourDays = dayjs().add(4, 'day').format('d DD/MM/YYYY');
    const fiveDays = dayjs().add(5, 'day').format('d DD/MM/YYYY');
    const sixDays = dayjs().add(6, 'day').format('d DD/MM/YYYY');
    const sevenDays = dayjs().add(7, 'day').format('d DD/MM/YYYY');

    const nextdays = [today, oneDay, twoDays, threeDays, fourDays, fiveDays, sixDays, sevenDays];

    let workHours = [];

    if (shifts) {
        if (shifts.afternoon) {
            workHours = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
        }
        if (shifts.morning) {
            workHours = ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', ...workHours];
        }
    }


    async function makeAppointment(hour, day) {
        if (!user) alert("Você precisa fazer login para agendar uma consulta!");
        else {
            try {
                await axios.post("http://localhost:5000/schedules", { doctorId, day, hour }, {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                });
                alert("Consulta agendada com sucesso!");
                navigator("/");

            } catch (error) {
                alert("Esse Horário ja foi pego!");
                console.log(error);
            }
        }
    }

    console.log(appointments);

    return (
        <Container>
            <div id='doctors'>
                <h2 id='title'>Horários Disponiveis</h2>

                {days && shifts ? (
                    <ul>
                        {nextdays.map(next => {
                            const now = next.split(' ');

                            return days[tradutor[now[0]]] ? (
                                <li>
                                    <h3>{now[1]}</h3>
                                    <div>
                                        {workHours.map((hour, index) => {
                                            let isThereThisAppointment = false;
                                                appointments.map(appointment =>{
                                                    if(appointment.day===now[1]){
                                                        if(appointment.hour===hour){
                                                            isThereThisAppointment = true;
                                                        };
                                                    };
                                                })
                                                
                                            return (<>
                                                <AppointmentButton app={isThereThisAppointment} onClick={() => makeAppointment(hour, now[1])}>{hour}</AppointmentButton>
                                                {index === 5 ? (<p></p>) : (<></>)}
                                            </>)
                                        })}
                                    </div>
                                </li>
                            ) : (
                                <></>
                            )
                        })}
                    </ul>) : (
                    <h3>CARREGANDO</h3>
                )}
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 80px);
    font-family: var(--primaryFont);
    h2{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 150px 0 0 0;
        border-bottom: 1px solid #32A1B1;
        border-top: 1px solid #32A1B1;
        color: rgb(1, 137, 49);
        font-size: 35px;
    }
    ul{
        padding:0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        button{
            margin-left: 10px;
            height: 30px;
            width: 50px;
            background-color: transparent;
            border: solid 3px rgb(89, 142, 101);
            border-radius: 15px;
            font-size: 15px;
            font-weight: 300;
            color:#ac5940;
            text-align: center;
            :hover{
                cursor: pointer;
            }
        }
        p{
            margin:5px;;
        }
    }

    @media (max-width:600px) {
        h2{
            font-size: 25px;
        }
    }
`

const AppointmentButton = styled.button`
    opacity:${props => props.app? (0.3): (1)};
`
