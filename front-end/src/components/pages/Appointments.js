import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Appointments() {
    return(
        <Background>
            <img src="./assets/doctor-office.jpeg"/>
            <p>Fazer um agendamento pode ser fácil assim!</p>
            <Link to={'/medicos'}>
                <button>Agendar consulta</button>
            </Link>
        </Background>
    )
}

const Background = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    margin-top:0;
    margin-bottom: 0;
img{
    width: 100vw;
    height: calc(100vh - 80px);
    position:relative;
    opacity: 0.8;
}
p{
    position: absolute;
    font-size: 40px;
    font-family: var(--primaryFont);
    width: 270px;
    font-weight: 700;
    top:140px;
    left:80px;
}
button{
    position: absolute;
    top:380px;
    left:80px;
    z-index: 2;
    height: 60px;
    width: 200px;
    background-color: transparent;
    font-family: var(--primaryFont);
    border: solid 3px rgb(89, 142, 101);
    border-radius: 15px;
    font-size: 20px;
    font-weight: 300;
    color:#ac5940;
}
@media (max-width:600px) {
    p{
        font-size: 20px;
        width: 150px;
        top:250px;
        left:30px;
    }
    button{
        top:380px;
        left:30px;
        height: 35px;
        width: 150px;
        font-size: 15px;
    }
}
`