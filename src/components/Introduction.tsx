import styled from 'styled-components'
import Background from '../assets/background.png'
import Logo from '../assets/logo-with-text.png'

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(${Background}) no-repeat center center;
    background-size: cover;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #01060b 50%, rgba(0, 0, 0, 0));
        z-index: 1;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
    z-index: 2;
    width: 90%;
    max-width: 1200px;
    padding: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        justify-content: space-between;
    }
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    z-index: 2;
`

const TextContainer = styled.div`
    z-index: 2;
    text-align: justify;
    max-width: 600px;
    @media (max-width: 768px) {
        max-width: 100%;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    @media (max-width: 768px) {
        justify-content: center;
    }
`

const Button = styled.button`
    border: none;
    outline: none;
    background-image: linear-gradient(45deg, #846e34, #e4bf5e);
    color: white;
    border-radius: 5px;
    padding: 12px 24px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.5s;
    font-family: 'Exo 2', sans-serif;
    font-weight: bolder;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 80%;
    &:hover {
        background-image: linear-gradient(45deg, #e4bf5e, #846e34);
        box-shadow: 0px 0px 10px #e4bf5e;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Title = styled.h1`
    color: #e4bf5e;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export default function Introduction() {
    const handleButtonClick = () => {
        const a = document.createElement('a')
        a.href = '#form'
        a.click()
        a.remove()
    }

    return (
        <Container>
            <Content>
                <ImageContainer>
                    <img
                        src={Logo}
                        alt='Logo Super Soluções'
                        width={180}
                        style={{ filter: 'drop-shadow(2px 4px 2px #e4bf5e)' }}
                    />
                    <TextContainer>
                        <Title>SUPER SOLUÇÕES</Title>
                        <p style={{ marginBottom: '0px' }}>
                            O Grupo <strong>Super Soluções</strong>, líder em
                            soluções financeiras e energéticas, propõe um modelo
                            inovador de licença de marca voltado para a formação
                            e capacitação de intermediadores de negócios. Este
                            modelo de capital fechado oferece uma oportunidade
                            única para investidores e parceiros que desejam
                            ingressar no mercado de energia solar e serviços
                            financeiros, com a garantia de uma estrutura
                            consolidada e um vasto portfólio de produtos.
                        </p>
                    </TextContainer>
                </ImageContainer>
                <ButtonWrapper>
                    <Button onClick={handleButtonClick}>
                        QUERO PARTICIPAR!
                    </Button>
                </ButtonWrapper>
            </Content>
        </Container>
    )
}
