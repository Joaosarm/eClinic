import styled from "styled-components"


export default function Footer() {
    return(
        <Container>
            <div id="green"></div>
            <div><p id='logo'><a>e</a>Clinic</p><p>©eClinic 2022 | Todos os direitos reservados.</p></div>
        </Container>
    )
}

const Container = styled.footer`
    #green{
        background: rgb(137, 187, 63);
    }
    div{
        display: flex;
        align-items: center;
        height: 40px;
        width: 100vw;
        justify-content: space-between;
    }
    #logo{
        color: #ac5940;
        font-size: 30px;
        font-weight: 700;
        font-family: var(--logoFont);
    }
    p{
        margin: 0 15px;
    }
    a{
        color: #c79958;
    }

    @media (max-width:600px) {
        #logo{
            font-size: 20px;
        }
    }
    p{
        font-size: 10px;
    }
`