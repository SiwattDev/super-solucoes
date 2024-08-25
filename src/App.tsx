import styled from 'styled-components'
import Advantages from './components/Advantages'
import Conclusion from './components/Conclusion'
import Footer from './components/Footer'
import Form from './components/Form'
import Introduction from './components/Introduction'
import LicenseModels from './components/LicenseModels'
import Video from './components/Video'
const Container = styled.div`
    background: #01060b;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #e4bf5e;
    }
`

function App() {
    return (
        <Container>
            <Introduction />
            <div className='my-4'></div>
            <LicenseModels />
            <div className='my-4'></div>
            <Advantages />
            <div className='my-4'></div>
            <Conclusion />
            <div className='my-4'></div>
            <Video />
            <div className='my-4'></div>
            <Form />
            <div className='my-4'></div>
            <Footer />
        </Container>
    )
}

export default App
