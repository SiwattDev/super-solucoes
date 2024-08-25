import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(45deg, #e4bf5e, #846e34);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 1.8rem;
    font-family: 'Exo 2', sans-serif;
    color: white;
    margin-bottom: 20px;
`

const FormContainer = styled.form`
    background: white;
    color: #000;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 800px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid black;
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
    width: 100%;
    &:hover {
        background-image: linear-gradient(45deg, #e4bf5e, #846e34);
        box-shadow: 0px 0px 10px #e4bf5e;
    }
`

export default function Form() {
    return (
        <Container id='form'>
            <Title>Formulário</Title>
            <FormContainer>
                <InputContainer>
                    <label htmlFor='input-name'>Seu Nome:</label>
                    <Input
                        id='input-name'
                        type='text'
                    />
                </InputContainer>
                <InputContainer>
                    <label htmlFor='input-email'>Seu Melhor E-mail:</label>
                    <Input
                        id='input-email'
                        type='email'
                    />
                </InputContainer>
                <InputContainer>
                    <label htmlFor='input-phone'>Seu telefone:</label>
                    <Input
                        id='input-phone'
                        type='tel'
                    />
                </InputContainer>
                <InputContainer>
                    <label htmlFor='input-city'>A Cidade que Você Mora:</label>
                    <Input
                        id='input-city'
                        type='text'
                    />
                </InputContainer>
                <InputContainer>
                    <label htmlFor='input-state'>O Estado que Você Mora:</label>
                    <Input
                        id='input-state'
                        type='text'
                    />
                </InputContainer>
                <Button>ENVIAR</Button>
            </FormContainer>
        </Container>
    )
}
