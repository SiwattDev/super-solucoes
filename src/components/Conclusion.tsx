import styled from 'styled-components'
import logo from '../assets/logo.png'

const Container = styled.div`
    position: relative;
    padding: 0 20px;
    color: #e4bf5e;
    max-width: 800px;
    margin: 0 auto;
`

const Logo = styled.div`
    position: absolute;
    top: -120px;
    right: -300px;
    width: 700px;
    height: 700px;
    background-image: url(${logo});
    background-size: cover;
    background-position: top right;
    opacity: 0.2;
    pointer-events: none;
    border-radius: 8px;
`

const Title = styled.h2`
    font-size: 1.8rem;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    color: #e4bf5e;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 1rem;
    color: #fff;
    line-height: 1.5;
    text-align: justify;
`

const NextSteps = styled.div`
    background-color: #333;
    padding: 20px;
    margin-top: 20px;
    text-align: justify;
`

const NextStepsTitle = styled.h3`
    font-size: 1.25rem;
    color: #e4bf5e;
    margin-bottom: 10px;
`

const NextStepsText = styled.p`
    font-size: 1rem;
    color: #fff;
    line-height: 1.5;
`

function Conclusion() {
    return (
        <div style={{ width: '100%', position: 'relative' }}>
            <Logo />
            <Container>
                <Title>Conclusão</Title>
                <Text>
                    O modelo de licença de marca do Grupo Super Soluções é uma
                    proposta sólida para investidores que buscam ingressar em um
                    mercado dinâmico e em crescimento. Com uma estrutura bem
                    definida, suporte contínuo e uma oferta diversificada de
                    produtos, esta proposta de capital fechado tem o potencial
                    de se tornar uma referência no mercado de licença de marca.
                    Convidamos você a fazer parte desta revolução e a contribuir
                    para o crescimento sustentável e financeiro do país.
                </Text>
                <NextSteps>
                    <NextStepsTitle>Próximos Passos</NextStepsTitle>
                    <NextStepsText>
                        Os interessados em participar deste modelo de capital
                        fechado devem entrar preencher o cadastro de seleção ou
                        entrar em contato com o Grupo Super Soluções para
                        maiores informações sobre o processo de adesão e os
                        requisitos necessários.
                    </NextStepsText>
                </NextSteps>
            </Container>
        </div>
    )
}

export default Conclusion
