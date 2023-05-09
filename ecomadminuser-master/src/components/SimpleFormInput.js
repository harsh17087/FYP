import React from 'react'
import styled from "styled-components";

const SimpleFormInput = ({handleOnChange, value, placeholder, label, btnLabel}) => {
    return (
        <InputWrap>
            <label htmlFor="inputfbox">
                {label}
            </label>
            <InputField type="text" placeholder={placeholder} value={value} onChange={handleOnChange} />
            <InputActionBtn>
                {btnLabel}
            </InputActionBtn>
        </InputWrap>
    )
}

export default SimpleFormInput

const InputWrap = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    background:  ${({theme}) => theme.background};
    border-radius: 5px;
    margin: 5px 0px;

    label {
        padding: 0rem 1rem;
        color:  ${({ theme }) => theme.secondryText};
    font-size: 0.8rem;
    font-family: Montserrat;
font-style: normal;
font-weight: normal;
    }
`
const InputField = styled.input`
    width: 85%;
    height: 2.5rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.secondryText};
    
    :focus {
        outline: none;
    }
`
const InputActionBtn = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.secondryText};
    font-size: 0.8rem;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
`