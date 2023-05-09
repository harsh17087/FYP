import React from 'react';
import styled from 'styled-components'
import BG from '../assets/image/contactBG.svg'




const ContactForm = ({
    nameVal,
emailVal,
messageVal,
handleNameChange,
handleEmailChange,
handleMessageVal,
}) => {
  return (
  <FormWrap>
      <img src={BG} alt="" />
      <FormContainer>
      <Title>Contact Form</Title>
      <div className="input_cont">
          <FormInput placeholder='Your Name'  value={nameVal} onChange={handleNameChange}/>
          <FormInput placeholder='Your Email'value={emailVal} onChange={handleEmailChange}/>
          <FormInput placeholder='Your Message'value={messageVal} onChange={handleMessageVal}/>

      </div>
        <SendButton>
            Send Now
        </SendButton>
      </FormContainer>
  </FormWrap>);
};

export default ContactForm;
const FormWrap = styled.div`
    /* width: 100vw; */
    display: flex;
    justify-content: center;
    height: 40rem;
    margin: 2rem 0;
    position: relative;
    img {
        top: 0;
        object-fit: cover;
        position: absolute;
        width: 50px;
        height: 35rem;
        width: 100%;

    }

`
const Title = styled.h3`
    font-size: 1.5rem;
    color: ${({theme}) => theme.text};

`

const FormContainer = styled.form`
    position: absolute;
    align-items: center;

    display: flex;
    flex-direction: column;
    width: 75%;
    z-index: 10;

    
    .input_cont {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 25rem;
        width: 100%;
    }

`
const FormInput = styled.input`
    width: 90%;
    height: 1rem;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    border: none;
    background: ${({theme}) => theme.body};

    :focus {
        outline: none;
    }
`

const SendButton = styled.button`
    height: 2.8rem;
    background: ${({theme}) => theme.accent};
    border: none;
    color: ${({theme}) => theme.text};
    border-radius: 5px;
    font-size: 1rem;
    padding: 0rem 4rem;
    cursor: pointer;
`
