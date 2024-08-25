import styled from 'styled-components'
import Logo from '../assets/logo-with-text.png'

const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px 0;
    background-color: #191e25;
    color: white;
    font-family: 'Exo 2', sans-serif;
`

const Link = styled.a`
    text-decoration: none;
    color: #e4bf5e;
    font-weight: bold;
    font-size: 1.2rem;
    &:hover {
        text-decoration: underline;
    }
`

export default function Footer() {
    return (
        <Container>
            <img
                src={Logo}
                alt='Logo Super Soluções'
                width={25}
            />
            <p style={{ margin: 0 }}>
                Super Soluções - © {new Date().getFullYear()}, Desenvolvido por
                <Link style={{ marginLeft: '5px' }}>VANSISTEM</Link>
            </p>
        </Container>
    )
}
