import styled from "styled-components"


export default function Contact() {
    return (
        <Container>
            <div id="contact">
                <h1>CONTATO</h1>
                <div>
                    <p>
                        eClinic
                        <p></p>
                        EDC Exta Doctor Center
                        <p></p>
                        Av. Algum Lugar, 370, Torre Business, Sala 3342. Testing
                    </p>
                    <p>
                        EMAIL - eClinic@eClinic.com
                        <p></p>
                        Telefone - (84) 99999-9999
                    </p>
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
    background: #32A1B1;
    padding: 10px 0 30px 0;

    #contact>div{
        display: flex;
    }

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px 0;
        border-bottom: 1px solid white;
        border-top: 1px solid white;
        color: white;
    }
    p{
        font-weight: 600;
        width:330px;
        margin: 5px 50px 0 0;
        font-size: 18px;
    }
    img{
        width:350px;
        border-radius: 40px;
    }
    #contacts>div{
        display:flex;
    }

    @media (max-width:600px) {
        h1{
            font-size: 20px;
            margin: 10px 0;
        }
        p{
            width:100px;
            font-size: 10px;
        }
    }
`