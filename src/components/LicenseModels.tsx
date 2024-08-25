import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface CardProps {
    isVisible: boolean
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    color: #e4bf5e;
    border-radius: 8px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    @media (max-width: 910px) {
        grid-template-columns: 1fr;
    }
`

const Title = styled.h2`
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    color: #e4bf5e;
    margin-bottom: 20px;
`

const Card = styled.div<CardProps>`
    background-color: #222;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: justify;
    border: 1px solid #e4bf5e;
    transition: all 0.3s ease-in-out;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.isVisible ? 'translateY(0)' : 'translateY(40px)'};
    transition: all 0.6s ease-out;

    &:hover {
        background: linear-gradient(to bottom, #222, transparent);
        transform: perspective(1000px) rotateX(15deg);
    }
`

const CardTitle = styled.h3`
    color: #e4bf5e;
    margin-bottom: 10px;
    text-align: center;
`

const CardText = styled.p`
    color: #fff;
    line-height: 1.5;
`

export default function LicenseModels() {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([
        false,
        false,
        false,
    ])
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const refs = cardRefs.current // Copia o valor atual de cardRefs.current
        const observers: IntersectionObserver[] = []

        refs.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisibleCards((prev) => {
                                const updated = [...prev]
                                updated[index] = true
                                return updated
                            })
                        }
                    },
                    { threshold: 0.1 }
                )
                observer.observe(ref)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach((observer, index) => {
                if (refs[index]) observer.unobserve(refs[index]!)
            })
        }
    }, [])

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Title>Descrição do Modelo de Licença de Marca</Title>
            <Container>
                <Card
                    ref={(el) => (cardRefs.current[0] = el)}
                    isVisible={visibleCards[0]}
                >
                    <CardTitle>Cursos de Formação e Capacitação</CardTitle>
                    <CardText>
                        Todos os licenciados terão acesso a um treinamento
                        completo através da SuperUni, a universidade corporativa
                        do Grupo Super Soluções. O treinamento abrangerá desde
                        conceitos básicos de vendas até estratégias avançadas de
                        negociação e gestão de clientes. O curso é 100% digital,
                        permitindo flexibilidade no aprendizado e garantindo que
                        os licenciados estejam prontos para iniciar suas
                        atividades dentro de 90 dias.
                    </CardText>
                </Card>
                <Card
                    ref={(el) => (cardRefs.current[1] = el)}
                    isVisible={visibleCards[1]}
                >
                    <CardTitle>
                        Licença de Marca e Plataforma de Gestão
                    </CardTitle>
                    <CardText>
                        Após a conclusão do treinamento inicial, os licenciados
                        receberão a licença de marca da Super Soluções,
                        permitindo que operem sob o nome de uma das marcas mais
                        respeitadas do mercado. A gestão dos negócios será
                        facilitada pela plataforma SIWATT, um CRM robusto
                        desenvolvido pelo grupo, que permitirá o gerenciamento
                        eficiente de clientes e vendas diretamente pelo celular
                        ou computador.
                    </CardText>
                </Card>
                <Card
                    ref={(el) => (cardRefs.current[2] = el)}
                    isVisible={visibleCards[2]}
                >
                    <CardTitle>Portfólio de Produtos</CardTitle>
                    <CardText>
                        O licenciado terá acesso a mais de 170 produtos
                        financeiros, incluindo seguros, financiamentos,
                        refinanciamentos, empréstimos, consórcios, entre outros.
                        Além disso, o franqueado poderá comercializar soluções
                        de energia solar, tanto na geração (com a Luz do Sol
                        Energia Solar) quanto na distribuição (com a Space
                        Solar).
                    </CardText>
                </Card>
            </Container>
        </div>
    )
}
