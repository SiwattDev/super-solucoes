import { ChangeEvent, useState } from 'react'
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

const FormWrapper = styled.form`
    background: white;
    color: #000;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 800px;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`

const CheckboxWrapper = styled.div`
    margin-bottom: 20px;
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

interface FormData {
    businessName: string
    cnpj: string
    legalNeighborhood: string
    legalCity: string
    legalState: string
    legalZipCode: string
    legalPhone: string
    legalEmail: string
    responsibleName: string
    cpf: string
    individualNeighborhood: string
    individualCity: string
    individualState: string
    individualZipCode: string
    individualPhone: string
    individualEmail: string
    sameAddress: boolean
}

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        businessName: '',
        cnpj: '',
        legalNeighborhood: '',
        legalCity: '',
        legalState: '',
        legalZipCode: '',
        legalPhone: '',
        legalEmail: '',
        responsibleName: '',
        cpf: '',
        individualNeighborhood: '',
        individualCity: '',
        individualState: '',
        individualZipCode: '',
        individualPhone: '',
        individualEmail: '',
        sameAddress: true,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleCheckboxChange = () => {
        setFormData({ ...formData, sameAddress: !formData.sameAddress })
    }

    return (
        <Container id='form'>
            <Title>Formulário de Interesse</Title>
            <FormWrapper>
                <InputWrapper>
                    <label htmlFor='businessName'>Razão Social:</label>
                    <Input
                        id='businessName'
                        type='text'
                        value={formData.businessName}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='cnpj'>CNPJ:</label>
                    <Input
                        id='cnpj'
                        type='text'
                        value={formData.cnpj}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='legalNeighborhood'>Bairro Jurídico:</label>
                    <Input
                        id='legalNeighborhood'
                        type='text'
                        value={formData.legalNeighborhood}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='legalCity'>Cidade Jurídica:</label>
                    <Input
                        id='legalCity'
                        type='text'
                        value={formData.legalCity}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='legalState'>Estado Jurídico:</label>
                    <Input
                        id='legalState'
                        type='text'
                        value={formData.legalState}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='legalZipCode'>CEP Jurídico:</label>
                    <Input
                        id='legalZipCode'
                        type='text'
                        value={formData.legalZipCode}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='legalPhone'>Telefone Jurídico:</label>
                    <Input
                        id='legalPhone'
                        type='text'
                        value={formData.legalPhone}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='legalEmail'>E-mail Jurídico:</label>
                    <Input
                        id='legalEmail'
                        type='email'
                        value={formData.legalEmail}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='responsibleName'>
                        Nome do Responsável:
                    </label>
                    <Input
                        id='responsibleName'
                        type='text'
                        value={formData.responsibleName}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='cpf'>CPF:</label>
                    <Input
                        id='cpf'
                        type='text'
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='individualPhone'>
                        Telefone Pessoa Física:
                    </label>
                    <Input
                        id='individualPhone'
                        type='text'
                        value={formData.individualPhone}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='individualEmail'>
                        E-mail Pessoa Física:
                    </label>
                    <Input
                        id='individualEmail'
                        type='email'
                        value={formData.individualEmail}
                        onChange={handleChange}
                    />
                </InputWrapper>
                {!formData.sameAddress && (
                    <>
                        <InputWrapper>
                            <label htmlFor='individualNeighborhood'>
                                Bairro Pessoa Física:
                            </label>
                            <Input
                                id='individualNeighborhood'
                                type='text'
                                value={formData.individualNeighborhood}
                                onChange={handleChange}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor='individualCity'>
                                Cidade Física:
                            </label>
                            <Input
                                id='individualCity'
                                type='text'
                                value={formData.individualCity}
                                onChange={handleChange}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor='individualState'>
                                Estado Pessoa Física:
                            </label>
                            <Input
                                id='individualState'
                                type='text'
                                value={formData.individualState}
                                onChange={handleChange}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor='individualZipCode'>
                                CEP Pessoa Física:
                            </label>
                            <Input
                                id='individualZipCode'
                                type='text'
                                value={formData.individualZipCode}
                                onChange={handleChange}
                            />
                        </InputWrapper>
                    </>
                )}
                <CheckboxWrapper>
                    <label>
                        <Input
                            type='checkbox'
                            checked={formData.sameAddress}
                            onChange={handleCheckboxChange}
                            style={{ marginRight: '5px' }}
                        />
                        Usar o mesmo endereço para a pessoa física
                    </label>
                </CheckboxWrapper>
                <Button>ENVIAR</Button>
            </FormWrapper>
        </Container>
    )
}
