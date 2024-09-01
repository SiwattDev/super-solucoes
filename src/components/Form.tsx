import {
    formatToCEP,
    formatToCNPJ,
    formatToCPF,
    isCEP,
    isCNPJ,
    isCPF,
} from 'brazilian-values'
import React, { ChangeEvent, useState } from 'react'
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

const InputWrapper = styled.div<{ $haserror?: boolean }>`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: ${(props) => (props.$haserror ? '1px solid red' : 'none')};
    padding: ${(props) => (props.$haserror ? '8px' : '0')};
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

const ErrorMessage = styled.span`
    color: red;
    font-size: 0.875rem;
    margin-top: 5px;
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

interface FormErrors {
    [key: string]: string
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

    const [formErrors, setFormErrors] = useState<FormErrors>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        let formattedValue = value

        if (id === 'cnpj') {
            formattedValue = formatToCNPJ(value)
        } else if (id === 'cpf') {
            formattedValue = formatToCPF(value)
        } else if (id === 'legalZipCode' || id === 'individualZipCode') {
            formattedValue = formatToCEP(value)
        }

        setFormData({ ...formData, [id]: formattedValue })
    }

    const handleCheckboxChange = () => {
        setFormData({ ...formData, sameAddress: !formData.sameAddress })
    }

    const createWhatsAppMessage = (formData: FormData) => {
        const {
            businessName,
            cnpj,
            legalNeighborhood,
            legalCity,
            legalState,
            legalZipCode,
            legalPhone,
            legalEmail,
            responsibleName,
            cpf,
            individualNeighborhood,
            individualCity,
            individualState,
            individualZipCode,
            individualPhone,
            individualEmail,
            sameAddress,
        } = formData

        let message = `Olá, estou interessado no modelo de licença de marca da Super Soluções. Seguem os dados informados:\n\n`

        message += `Razão Social: ${businessName}\n`
        message += `CNPJ: ${cnpj}\n`
        message += `Bairro Jurídico: ${legalNeighborhood}\n`
        message += `Cidade Jurídica: ${legalCity}\n`
        message += `Estado Jurídico: ${legalState}\n`
        message += `CEP Jurídico: ${legalZipCode}\n`
        message += `Telefone Jurídico: ${legalPhone}\n`
        message += `E-mail Jurídico: ${legalEmail}\n`
        message += `Nome do Responsável: ${responsibleName}\n`
        message += `CPF: ${cpf}\n`
        message += `Telefone (Pessoa Física): ${individualPhone}\n`
        message += `E-mail (Pessoa Física): ${individualEmail}\n`

        if (!sameAddress) {
            message += `\nEndereço Físico:\n`
            message += `Bairro (Pessoa Física): ${individualNeighborhood}\n`
            message += `Cidade (Pessoa Física): ${individualCity}\n`
            message += `Estado (Pessoa Física): ${individualState}\n`
            message += `CEP (Pessoa Física): ${individualZipCode}\n`
        } else {
            message += `\nO endereço físico e jurídico são iguais.\n`
        }

        return encodeURIComponent(message)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const errors: FormErrors = {}
        const requiredFields = [
            'businessName',
            'cnpj',
            'legalNeighborhood',
            'legalCity',
            'legalState',
            'legalZipCode',
            'legalPhone',
            'legalEmail',
            'responsibleName',
            'cpf',
            'individualPhone',
            'individualEmail',
        ]
        requiredFields.forEach((field) => {
            if (!formData[field as keyof FormData]) {
                errors[field] = 'Este campo é obrigatório'
            }
        })

        if (!isCNPJ(formData.cnpj)) {
            errors.cnpj = 'CNPJ inválido'
        }

        if (!isCPF(formData.cpf)) {
            errors.cpf = 'CPF inválido'
        }

        if (!isCEP(formData.legalZipCode)) errors.legalZipCode = 'CEP inválido'

        if (!formData.sameAddress) {
            if (!isCEP(formData.individualZipCode))
                errors.individualZipCode = 'CEP inválido'
        }

        if (Object.keys(errors).length) {
            setFormErrors(errors)
        } else {
            // Gerar mensagem para WhatsApp
            const message = createWhatsAppMessage(formData)
            const whatsappUrl = `https://wa.me/5577999919494?text=${message}`

            // Redirecionar para a URL do WhatsApp
            window.location.href = whatsappUrl

            // Limpar erros e dados do formulário, se necessário
            setFormErrors({})
            setFormData({
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
        }
    }

    return (
        <Container id='form'>
            <Title>Formulário de Interesse</Title>
            <FormWrapper onSubmit={handleSubmit}>
                <InputWrapper $haserror={!!formErrors.businessName}>
                    <label htmlFor='businessName'>Razão Social:</label>
                    <Input
                        id='businessName'
                        type='text'
                        value={formData.businessName}
                        onChange={handleChange}
                    />
                    {formErrors.businessName && (
                        <ErrorMessage>{formErrors.businessName}</ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.cnpj}>
                    <label htmlFor='cnpj'>CNPJ:</label>
                    <Input
                        id='cnpj'
                        type='text'
                        value={formData.cnpj}
                        onChange={handleChange}
                    />
                    {formErrors.cnpj && (
                        <ErrorMessage>{formErrors.cnpj}</ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.legalNeighborhood}>
                    <label htmlFor='legalNeighborhood'>Bairro:</label>
                    <Input
                        id='legalNeighborhood'
                        type='text'
                        value={formData.legalNeighborhood}
                        onChange={handleChange}
                    />
                    {formErrors.legalNeighborhood && (
                        <ErrorMessage>
                            {formErrors.legalNeighborhood}
                        </ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.legalCity}>
                    <label htmlFor='legalCity'>Cidade Jurídica:</label>
                    <Input
                        id='legalCity'
                        type='text'
                        value={formData.legalCity}
                        onChange={handleChange}
                    />
                    {formErrors.legalCity && (
                        <ErrorMessage>{formErrors.legalCity}</ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.legalState}>
                    <label htmlFor='legalState'>Estado:</label>
                    <Input
                        id='legalState'
                        type='text'
                        value={formData.legalState}
                        onChange={handleChange}
                    />
                    {formErrors.legalState && (
                        <ErrorMessage>{formErrors.legalState}</ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.legalZipCode}>
                    <label htmlFor='legalZipCode'>CEP:</label>
                    <Input
                        id='legalZipCode'
                        type='text'
                        value={formData.legalZipCode}
                        onChange={handleChange}
                    />
                    {formErrors.legalZipCode && (
                        <ErrorMessage>{formErrors.legalZipCode}</ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.legalPhone}>
                    <label htmlFor='legalPhone'>Telefone:</label>
                    <Input
                        id='legalPhone'
                        type='text'
                        value={formData.legalPhone}
                        onChange={handleChange}
                    />
                    {formErrors.legalPhone && (
                        <ErrorMessage>{formErrors.legalPhone}</ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.legalEmail}>
                    <label htmlFor='legalEmail'>E-mail:</label>
                    <Input
                        id='legalEmail'
                        type='email'
                        value={formData.legalEmail}
                        onChange={handleChange}
                    />
                    {formErrors.legalEmail && (
                        <ErrorMessage>{formErrors.legalEmail}</ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.responsibleName}>
                    <label htmlFor='responsibleName'>
                        Nome do Responsável:
                    </label>
                    <Input
                        id='responsibleName'
                        type='text'
                        value={formData.responsibleName}
                        onChange={handleChange}
                    />
                    {formErrors.responsibleName && (
                        <ErrorMessage>
                            {formErrors.responsibleName}
                        </ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.cpf}>
                    <label htmlFor='cpf'>CPF:</label>
                    <Input
                        id='cpf'
                        type='text'
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                    {formErrors.cpf && (
                        <ErrorMessage>{formErrors.cpf}</ErrorMessage>
                    )}
                </InputWrapper>
                {!formData.sameAddress && (
                    <React.Fragment>
                        <InputWrapper
                            $haserror={!!formErrors.individualNeighborhood}
                        >
                            <label htmlFor='individualNeighborhood'>
                                Bairro (Pessoa Física):
                            </label>
                            <Input
                                id='individualNeighborhood'
                                type='text'
                                value={formData.individualNeighborhood}
                                onChange={handleChange}
                            />
                            {formErrors.individualNeighborhood && (
                                <ErrorMessage>
                                    {formErrors.individualNeighborhood}
                                </ErrorMessage>
                            )}
                        </InputWrapper>
                        <InputWrapper $haserror={!!formErrors.individualCity}>
                            <label htmlFor='individualCity'>
                                Cidade (Pessoa Física):
                            </label>
                            <Input
                                id='individualCity'
                                type='text'
                                value={formData.individualCity}
                                onChange={handleChange}
                            />
                            {formErrors.individualCity && (
                                <ErrorMessage>
                                    {formErrors.individualCity}
                                </ErrorMessage>
                            )}
                        </InputWrapper>
                        <InputWrapper $haserror={!!formErrors.individualState}>
                            <label htmlFor='individualState'>
                                Estado (Pessoa Física):
                            </label>
                            <Input
                                id='individualState'
                                type='text'
                                value={formData.individualState}
                                onChange={handleChange}
                            />
                            {formErrors.individualState && (
                                <ErrorMessage>
                                    {formErrors.individualState}
                                </ErrorMessage>
                            )}
                        </InputWrapper>
                        <InputWrapper
                            $haserror={!!formErrors.individualZipCode}
                        >
                            <label htmlFor='individualZipCode'>
                                CEP (Pessoa Física):
                            </label>
                            <Input
                                id='individualZipCode'
                                type='text'
                                value={formData.individualZipCode}
                                onChange={handleChange}
                                disabled={formData.sameAddress}
                            />
                            {formErrors.individualZipCode && (
                                <ErrorMessage>
                                    {formErrors.individualZipCode}
                                </ErrorMessage>
                            )}
                        </InputWrapper>
                    </React.Fragment>
                )}
                <InputWrapper $haserror={!!formErrors.individualPhone}>
                    <label htmlFor='individualPhone'>
                        Telefone (Pessoa Física):
                    </label>
                    <Input
                        id='individualPhone'
                        type='text'
                        value={formData.individualPhone}
                        onChange={handleChange}
                    />
                    {formErrors.individualPhone && (
                        <ErrorMessage>
                            {formErrors.individualPhone}
                        </ErrorMessage>
                    )}
                </InputWrapper>
                <InputWrapper $haserror={!!formErrors.individualEmail}>
                    <label htmlFor='individualEmail'>
                        E-mail (Pessoa Física):
                    </label>
                    <Input
                        id='individualEmail'
                        type='email'
                        value={formData.individualEmail}
                        onChange={handleChange}
                    />
                    {formErrors.individualEmail && (
                        <ErrorMessage>
                            {formErrors.individualEmail}
                        </ErrorMessage>
                    )}
                </InputWrapper>
                <CheckboxWrapper>
                    <label>
                        <input
                            type='checkbox'
                            checked={formData.sameAddress}
                            onChange={handleCheckboxChange}
                            className='me-2'
                        />
                        Endereço físico e jurídico são iguais
                    </label>
                </CheckboxWrapper>
                <Button type='submit'>Enviar</Button>
            </FormWrapper>
        </Container>
    )
}
