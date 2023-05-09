import React,{useState} from 'react'
import styled from 'styled-components'
import ChatItem from '../components/ChatItem'
import {FaUserFriends} from 'react-icons/fa'
import NavBar from '../components/NavBar'
import { FiSearch } from 'react-icons/fi'
import ChatDetailItem from '../components/ChatDetailItem'

const ChatScreenMobo = () => {
    const [selectedChat, setSelectedChat] = useState('')
    
    const chatitm = {
        'name': 'Aditya',
        'lastSeen': 'today',
        'profilePic': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    }

    const handleChatItemClick = () => {
        setSelectedChat(chatitm)
    }

    return (
        <>
        <NavBar/>
        <ChatComp>
           {
                    !selectedChat   && 
                    <ChatListCont>
                    <ChatHeader>
                        <label htmlFor="">Chats</label>
                        <FaUserFriends size={25} color="#000" />
                    </ChatHeader>
                    <ChatSearchBox>
                        <FiSearch size={20} color='#888888' />
                        <SearchInput>
                        </SearchInput>
                    </ChatSearchBox>
                   <ChatItem 
                    handleChatClick={handleChatItemClick}
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                   <ChatItem 
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                   <ChatItem 
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                   <ChatItem 
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                   <ChatItem 
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                   <ChatItem 
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                   <ChatItem 
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                   <ChatItem 
                    chatPersonImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                    chatPersonName={"Aditya"}
                    lastSeen={"1 minute ago"}
                    msgCount={'2'}
                    mssgPrev={'hey how r u doing ?'}
                    />
                </ChatListCont>
                }
                
                {
                    selectedChat?
                    <ChatDetailsCont>
                    <ChatDetailItem
                        chatPersonImg={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'}
                        chatPersonName={"John Doe"}
                        lastSeen={"a minute ago"}
                        />
                 </ChatDetailsCont>
                    :
                    null
                } 
        </ChatComp>
        </>
    )
}

export default ChatScreenMobo

const ChatComp = styled.div`
    display: flex;
    background: var(--white);
    width: 80%;
    margin-top: 2rem;

    @media(max-width: 768px){
        width: 100%;
        margin-top: 0rem;

    }

`
const ChatListCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 30%;
    align-items: center;
    overflow-y: auto;
    background: ${({ theme }) => theme.background};
    overflow-y: auto;
    height: 90vh;
    ::-webkit-scrollbar  {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb  {
        background: var(--p-red);
        border-radius: 20px;

    }

    @media(max-width: 768px){
        width: 100%;
        max-width: unset;
    }

`
const ChatDetailsCont = styled.div`
    display: flex;
    width: 70%;
    max-width: 70%;
    background: ${({theme}) => theme.body};
    @media(max-width: 768px){
        width: 100%;
        max-width: unset;
        height: 95vh;
    }
`

const ChatHeader = styled.div`
    display: none;
    justify-content: space-between;
    width: 87%;
    padding: 1rem 0rem;
    label {
        font-size: 1.2rem;
        font-weight: 500;
    }
`
const ChatSearchBox = styled.div`
display: flex;
background: ${({theme}) => theme.body};
border: 1px solid ${({theme}) => theme.background};
border-radius: 5px;
width: 85%;
height: 2rem;
align-items: center;
padding: 0.5rem;
box-shadow:  20px 20px 80px rgba(0, 0, 0, 0.1);
padding-right: 1rem;
margin: 1rem 0rem;
`

const SearchInput = styled.input`
    background:  ${({theme}) => theme.body};
    border: none;
    width: 100%;
    padding-left: 0.5rem;
    :focus {
        outline:none;

    }
`