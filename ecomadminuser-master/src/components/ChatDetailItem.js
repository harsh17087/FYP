import React,{useState} from 'react'
import styled from 'styled-components'
import {ImAttachment} from 'react-icons/im'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaRegSmile} from 'react-icons/fa'
import {IoNavigate} from 'react-icons/io5'

function ChatDetailItem({chatPersonName, lastSeen, chatPersonImg, messagesArr}) {
   
   const messages = [
    {
        name: 'Aditya',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        lastModified: '10:20 AM',
        message: 'Hey how is it Going? ',
        status: 'sent'
    },
    {
        name: 'Aditya',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        lastModified: '10:20 AM',
        message: 'Hey how is it Going? ',
        status: 'sent'
    },
    {
        name: 'Aditya',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        lastModified: '10:20 AM',
        message: 'Hey how is it Going? ',
        status: 'sent'
    },
    {
        name: 'Aditya',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        lastModified: '10:20 AM',
        message: 'Hey how is it Going? ',
        status: 'sent'
    },
    {
        name: 'Aditya',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        lastModified: '10:20 AM',
        message: 'Hey how is it Going? ',
        status: 'sent'
    },
    {
        name: 'Aditya',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        lastModified: '10:20 AM',
        message: 'Hey how is it Going? ',
        status: 'sent'
    },
    {
        name: 'Aditya',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        lastModified: '10:20 AM',
        message: 'Hey how is it Going? ',
        status: 'sent'
    }
]
    const [inputMssg, setInputMssg] = useState('')
   
    const messagestemp = 
        {
            name: 'Aditya',
            photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            lastModified: '10:20 AM',
            message: inputMssg,
            status: 'sent'
        }
    
    return (
        <ChatDetailWrap>
            <HorizontalChatOption>
            <ChatPerson>
                <div className='chat_person'>
                <img src={chatPersonImg} alt="" />
                <div className='name_seen__box'>
                    <label className='chat_per_name'>{chatPersonName}</label>
                    <label className='chat_last_seen'>{lastSeen}</label>
                </div>

                </div>
            </ChatPerson>  
            
            </HorizontalChatOption>
            <ChatBubbleComp>
                    {messages.length != 0 &&
                        messages.map((item, index) => ( <MessageItem key={index}>
                            <p>{item.message}</p>
                    </MessageItem>))
                    }
            </ChatBubbleComp>
            <ChatInputBar>
                <div className='inputoption_plusicon'>
                <AiOutlinePlus className='input_option_icon' size={18} color="#fff" />
                </div>

                <ChatInputField value={inputMssg} onChange={(e) => setInputMssg(e.target.value)} placeholder='Type a message...'>

                </ChatInputField>
                <div className='input_option_rhs'>
                <FaRegSmile className='input_option_icon_emoji' size={18} color="#3A3A3A" />
                <IoNavigate onClick={() => {messages.push(messagestemp); console.log(messages)}} className='input_option_icon' size={18} color="#fff" />
                </div>
            </ChatInputBar>
        </ChatDetailWrap>
    )
}

export default ChatDetailItem

const ChatDetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.text};
`

const HorizontalChatOption = styled.div`
    display: flex;
    background: ${({ theme }) => theme.background};
    height: 5rem;
    padding: 0rem 1rem;

`
const ChatPerson = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    


    .chat_person {
        display: flex;
        align-items: center;
    }  

    .chat_person img {
        width: 40px;
        height: 40px;
        border-radius: 100%;

    }
    .name_seen__box {
        display: flex;
        flex-direction: column;
        padding-left: 0.6rem;
        height: 100%;
        justify-content: space-between;
    }
    .chat_per_name {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;

    }
    .chat_last_seen {
        font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 16px;
color: var(--font-PG)
    }

    .chat_count {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        font-size: 0.8rem;
        background: #F73859;
        width: 20px;
        height: 20px;
        border-radius: 100%;
    }
`
const ChatOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15%;

    @media (max-width: 768px) {
        width: 35%;
    }

    .chat_option_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--white);
        padding: 0.5rem;
        border-radius: 100%;
    }
`
const ChatBubbleComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${({theme}) => theme.body};
    width: 100%;
    height: 75%;
    position: relative;
    overflow-y: auto;
    padding: 3rem 0;
`
const ChatInputBar = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    background: ${({ theme }) => theme.background};
    border-top: 1.5px solid var(--font-PG);

    @media(max-width: 768px){

    }
    .input_option_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--p-red);
        padding: 0.5rem;
        border-radius: 100%;
    }

    .inputoption_plusicon {
        display: flex;
        width: 15%;
        align-items: center;
        justify-content: center;
    }

    .input_option_rhs {
        display: flex;
        align-items:center;
        justify-content: space-evenly;
        width: 15%;

        @media (max-width: 768px){
            width: 25%;
            justify-content: space-between;
            padding-right: 0.4rem;
        }
    }
`

const ChatInputField = styled.input`
    width: 80%;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.background};
    margin-left: 0.4rem;
    color: ${({ theme }) => theme.text};

    :focus {
        outline: none;
        border: none;
    }
`
const MessageItem = styled.div`
    display: flex;
    background: ${({theme}) => theme.accent};
    border-radius: 20px;
    padding: 0 0.5rem;
    align-items: center;
    width: fit-content;
    right: 1rem;
    margin: 10px;
    margin-left: 60%;
    /* position: absolute; */

    img {
        display: none;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-right: 5px;
    }

    .status {
        font-size: 8px;
        float: bottom;
        display: none;
    }

`