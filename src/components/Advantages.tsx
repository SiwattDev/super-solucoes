import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface AdvantageItemProps {
    isVisible: boolean
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
    color: #e4bf5e;
    font-family: 'Exo 2', sans-serif;
`

const Title = styled.h2`
    color: #e4bf5e;
    margin-bottom: 30px;
    text-align: center;
`

const AdvantageList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const AdvantageItem = styled.li<AdvantageItemProps>`
    display: flex;
    margin-bottom: 20px;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.isVisible ? 'translateY(0)' : 'translateY(40px)'};
    transition: all 0.6s ease-out;
`

const NumberCircle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e4bf5e;
    color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 20px;
    font-family: 'Exo 2', sans-serif;
`

const AdvantageText = styled.div`
    flex: 1;
`

const AdvantageTitle = styled.h3`
    margin: 0;
    margin-bottom: 10px;
    color: #e4bf5e;
    font-weight: bold;
    font-family: 'Exo 2', sans-serif;
`

const AdvantageDescription = styled.p`
    margin: 0;
    color: #fff;
    line-height: 1.5;
    text-align: justify;
`

export default function Advantages() {
    const [visibleItems, setVisibleItems] = useState<boolean[]>([
        false,
        false,
        false,
        false,
    ])
    const itemRefs = useRef<(HTMLLIElement | null)[]>([])

    useEffect(() => {
        const currentRefs = itemRefs.current
        const observers: IntersectionObserver[] = []

        currentRefs.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                setVisibleItems((prev) => {
                                    const updated = [...prev]
                                    updated[index] = true
                                    return updated
                                })
                            }, index * 300)
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
                if (currentRefs[index]) observer.unobserve(currentRefs[index]!)
            })
        }
    }, [])

    return (
        <Container>
            <Title>Benefícios do Modelo de Capital Fechado</Title>
            <AdvantageList>
                <AdvantageItem
                    ref={(el) => (itemRefs.current[0] = el)}
                    isVisible={visibleItems[0]}
                >
                    <NumberCircle>1</NumberCircle>
                    <AdvantageText>
                        <AdvantageTitle>
                            Retorno Rápido e Elevado
                        </AdvantageTitle>
                        <AdvantageDescription>
                            O modelo oferece uma oportunidade de retorno rápido,
                            com a previsão de altos ganhos mensais devido ao
                            amplo portfólio de produtos e serviços.
                        </AdvantageDescription>
                    </AdvantageText>
                </AdvantageItem>
                <AdvantageItem
                    ref={(el) => (itemRefs.current[1] = el)}
                    isVisible={visibleItems[1]}
                >
                    <NumberCircle>2</NumberCircle>
                    <AdvantageText>
                        <AdvantageTitle>
                            Baixo Investimento Inicial
                        </AdvantageTitle>
                        <AdvantageDescription>
                            Com uma taxa de licenciamento acessível, o modelo é
                            atrativo para pequenos investidores e empreendedores
                            que desejam iniciar seu próprio negócio com baixo
                            capital.
                        </AdvantageDescription>
                    </AdvantageText>
                </AdvantageItem>
                <AdvantageItem
                    ref={(el) => (itemRefs.current[2] = el)}
                    isVisible={visibleItems[2]}
                >
                    <NumberCircle>3</NumberCircle>
                    <AdvantageText>
                        <AdvantageTitle>
                            Sustentabilidade e Inovação
                        </AdvantageTitle>
                        <AdvantageDescription>
                            A inclusão de produtos de energia solar no portfólio
                            garante que os franqueados estejam na vanguarda do
                            mercado sustentável, um dos setores que mais crescem
                            no Brasil.
                        </AdvantageDescription>
                    </AdvantageText>
                </AdvantageItem>
                <AdvantageItem
                    ref={(el) => (itemRefs.current[3] = el)}
                    isVisible={visibleItems[3]}
                >
                    <NumberCircle>4</NumberCircle>
                    <AdvantageText>
                        <AdvantageTitle>
                            Suporte e Treinamento Contínuos
                        </AdvantageTitle>
                        <AdvantageDescription>
                            Além do treinamento inicial, os franqueados
                            continuarão a ter acesso a novos cursos e
                            atualizações através da SuperUni, garantindo uma
                            constante evolução e adaptação ao mercado.
                        </AdvantageDescription>
                    </AdvantageText>
                </AdvantageItem>
            </AdvantageList>
        </Container>
    )
}
