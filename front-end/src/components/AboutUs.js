import styled from "styled-components"


export default function AboutUs() {
    return(
        <Container>
            <div id="aboutUs">
            <h1>QUEM SOMOS</h1>
            <div>
                <p>
                    Somos uma empresa com o objetivo de tornar mais fácil a atuação no mercado,
                    para que todos consigam de forma fácil e segura agendar uma consulta.
                    <p></p>
                    Buscando sempre melhorar a qualidade de vida dos pacientes, tornando cada vez mais 
                    simples o contato entra médico paciente, a eClinic está sempre em busca de melhorias.
                </p>
                <img src="./assets/clinica.png"></img>
            </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    margin-top:0;
    font-family: var(--primaryFont);
    background: white;
    padding: 10px 0 30px 0;

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px 0;
        border-bottom: 1px solid #32A1B1;
        border-top: 1px solid #32A1B1;
        color: rgb(1, 137, 49);
    }
    p{
        font-weight: 600;
        width:330px;
        margin-right: 50px;
        font-size: 18px;
    }
    img{
        width:350px;
        border-radius: 40px;
    }
    #aboutUs>div{
        display:flex;
    }

    @media (max-width:600px) {
        h1{
            font-size: 20px;
            margin: 10px 0;
        }
        p{
            width:150px;
            font-size: 10px;
            margin: 8px;
        }
        img{
            width:175px;
            height: 175px;
        }
    }
`