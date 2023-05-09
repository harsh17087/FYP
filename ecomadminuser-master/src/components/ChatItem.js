import React from 'react'
import styled from 'styled-components'

function ChatItem({chatPersonImg, chatPersonName, lastSeen, msgCount, mssgPrev, handleChatClick}) {
    return (
        <ChatItemWrap onClick={handleChatClick}>
            <ChatPerson>
                <div className='chat_person'>
                <img src={chatPersonImg} alt="" />
                <div className='name_seen__box'>
                    <label className='chat_per_name'>{chatPersonName}</label>
                    <label className='chat_last_seen'>{lastSeen}</label>
                </div>

                </div>
                <label className='chat_count'>{msgCount}</label>
            </ChatPerson>  
               
            <ChatPreview>
                <p>{mssgPrev}</p>
            </ChatPreview>
        </ChatItemWrap>
    )
}

export default ChatItem

const ChatItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.body};
    width: 85%;
    height: 7rem;
    padding: 0.8rem;
    margin: 0.4rem 0rem;
    border-radius: 6px;

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
        font-size: 14px;
        line-height: 16px;
        color: ${({ theme }) => theme.text}
    }

    .chat_count {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.text};
        font-size: 0.8rem;
        background: var(--p-red);
        width: 20px;
        height: 20px;
        border-radius: 100%;
    }
`
const ChatPreview = styled.div`
  
p {
    font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 26px;
color: ${({ theme }) => theme.text};
padding: 1rem;
margin: 1rem 0rem;
}
`