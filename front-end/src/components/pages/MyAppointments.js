import styled from "styled-components"
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";

export default function MyAppointments() {
    const { user } = useContext(UserContext);
    const [myAppointments, setMyAppointments] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get("http://localhost:5000/schedules", {
                    headers: {
                        "Authorization": `Bearer ${user.token}`
                    }
                }
                );
                setMyAppointments(request.data);

            } catch (error) {
                alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
                console.log(error);
            }
        })();
    }, [user]);

    return (
        <Container>
            <AppointmentList>
                <h1>Minhas Consultas</h1>
                {myAppointments.length > 0 ? (
                    myAppointments.map((appointment, index) => {
                        return (
                            <Appointment>
                                <h2>Dia {appointment.day}</h2>
                                <h3>Médico: {appointment.doctors.name}</h3>
                                <h3>Hora: {appointment.hour}</h3>
                            </Appointment>)
                    }
                    )
                ) : (
                    <h1>Não foi feito nenhum pedido</h1>
                )}
            </AppointmentList>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 60px;
  h1{
    font-family: var(--primaryFont);
  }
  
  .link-text{
      margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .link-text p{
    font-family: var(--primaryFont);
    color: var(--highlightColorDarker);
  }
  h4{
      font-size: 15px;
  }
`

const Appointment = styled.div`
    min-height: 100px;
    text-align: center;
    margin-bottom: 30px;
    h1{
    margin: 0;
    padding: 3px;
    font-family: var(--primaryFont);
    font-size: 25px;
    border-bottom: 1px solid gray;
    }
    h2{
    font-family: var(--primaryFont);
    padding: 3px;
    margin: 0;
    font-size: 25px;
    color: var(--highlightColorDarker);
    }
    h3{
    font-family: var(--primaryFont);
    padding: 3px;
    margin: 0;
    font-size: 20px;
    }
    @media (max-width:600px) {
        h1{
            font-size: 20px;
            }
            h2{
            font-size: 20px;
            }
            h3{
            font-size: 15px;
            }
    }
`

const AppointmentList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 650px;
    width: 400px;
    overflow: scroll;
`