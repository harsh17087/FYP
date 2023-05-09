import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'
import {CgMenuRight} from 'react-icons/cg'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {BsCalendar4Event, BsHandThumbsUp, BsBell} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {FaRegUserCircle} from 'react-icons/fa'
import OnOutsiceClick from 'react-outclick';
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { ThemeContext } from '../context/ThemeContext'
import ReactTooltip from 'react-tooltip';
import logo from '../assets/image/logo.png'
import SideBar from './SideBar'

const NavBar = () => {
    
    const [showDropdown, setShowDropdown] = useState(false)
    const location = useLocation();
    const {theme} = useContext(ThemeContext)
    const [iconColor, setIconColor] = useState(theme === 'light'? '#19202A': '#fff' )
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    
    const toggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen)
        console.log('toggled')
        console.log(isSideBarOpen)
    }

    //destructuring pathname from location
    const { pathname } = location;


    const colorToggle = () => {
        theme === 'light'? setIconColor('#19202A'): setIconColor("#fff")
    }
    
    useEffect(() => {
      colorToggle()
    }, [theme])

    

    //Javascript split method to get the name of the path in array
    
    const splitLocation = pathname.split("/");
    
    return (
        <>
         <OnOutsiceClick onOutsideClick={() => setIsSideBarOpen(false)}>
          <HeaderWrapper>
            <HeaderElementBox1>
                <Link  className='logo_cont' to="/">
                <img className='logo' src={logo} alt="" />
                {/* <h2 style={{color: 'red', fontWeight: 'bold'}}>Logo</h2> */}
                </Link>
                <SearchBoxContainer>
                    <FiSearch size={20} color='#888888' />
                    <SearchInput>
                    </SearchInput>
                </SearchBoxContainer>
                <NavBarIcon onClick={toggleSidebar}  size={20} color={iconColor} />
            </HeaderElementBox1>
            <HeaderElementBox2>
            <ReactTooltip />
                <NavIconLink data-tip="Events" to="/events">
                    <BsCalendar4Event size="20" color={
                        splitLocation[1] === 'events'? '#DC1D13': 
                        iconColor
                    } />
                </NavIconLink>
                <NavIconLink data-tip="Message" to="/chat" activeClassName="active">
                    <BiEnvelope size="23"color={
                        splitLocation[1] === 'chat'? '#DC1D13': 
                        iconColor
                    } />
                </NavIconLink>
                <NavIconLink data-tip="Likes" to="#">
                    <BsHandThumbsUp size="20" color={
                        splitLocation[1] === 'likes'? '#DC1D13': 
                        iconColor
                    }/>
                </NavIconLink>
                <NavIconLink data-tip="Notification" to="/notification">
                    <BsBell size="20" color={
                        splitLocation[1] === 'notification'? '#DC1D13': 
                        iconColor
                    } />
                </NavIconLink>
                <NavIconLink onMouseLeave={() => setShowDropdown(false)} onMouseEnter={() => setShowDropdown(!showDropdown)} to="#">
                    <FaRegUserCircle size="20" color={
                        splitLocation[1] === 'profile'? '#DC1D13': 
                        iconColor
                    } />
                    <div className={showDropdown? "dropdown": "dropdown_hide"}>
                        <NavIconLink to="/profile">
                            My Profile
                        </NavIconLink>
                        <NavIconLink to="/setting">
                            My Information
                        </NavIconLink>
                        {/* <NavIconLink to="/stats">
                            Statistics
                        </NavIconLink> */}
                        <NavIconLink to="#">
                           Disconnect
                        </NavIconLink>
                    </div>
                </NavIconLink>
                <NavIconLink data-tip="Help" to="/help">
                    <AiOutlineQuestionCircle size="20" color={
                        splitLocation[1] === 'help'? '#DC1D13': 
                        iconColor
                    } />
                </NavIconLink>
                <NavIconLink to="#">
                    <span>FR/EN</span>
                </NavIconLink>
            </HeaderElementBox2>
        </HeaderWrapper>  
        <SideBar 
            isSideBarOpen={isSideBarOpen}
            isOnline={true}
            loggedInUserImg={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
            loggedInUserName={"Emma Ashley"}
            />
            </OnOutsiceClick>
        </>
    )
}

export default NavBar;

const HeaderWrapper = styled.div`
    display: flex;
    background: ${({ theme }) => theme.background};
    /* width: 100%; */
    justify-content: space-between;
    padding: 0.3rem 0rem;

    @media (max-width: 768px) {
        padding: 0.3rem 0.5rem;
        /* width: 90%; */
    }
        
`
const HeaderElementBox1 = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    padding-right: 2.5rem;

    .logo_cont {
        text-decoration: none;
    }


    .logo {
        width: 3rem;
        /* height: 4rem; */
        @media (max-width: 768px) {
            width: 2rem;
        }
    }

    

    @media (max-width: 768px) {
           width: 100%;
           flex-direction: row;
           justify-content: space-between;
           padding-right: 0;
           >img {
        width: 8rem;
        height: 2.5rem;
    }
    }

    .active {
        background: red;
    }
    
`
const HeaderElementBox2 = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 2.5rem;



    .activeh {
         ::after {
            content: '';
            position: absolute;
            width: 5rem;
            height: 0.2rem;
            background: linear-gradient(89.47deg, #FA0101 -28.87%, #F69202 18.07%, #A0C31B 55.63%, #209FA7 88.06%, #5D3D90 135%);;
            border-radius: 20px;
            top: 3.2rem;
        }  
    }
    @media (max-width: 768px) {
        display: none;

    }
`
const SearchBoxContainer = styled.div`
    display: flex;
    background: ${({ theme }) => theme.body};
    border: none;
    border-radius: 20px;
    width: 20rem;
    align-items: center;
    padding: 0.5rem 0.5rem;
    box-shadow:  20px 20px 80px rgba(0, 0, 0, 0.1);
    padding-right: 1rem;

    @media (max-width: 768px) {
        width: 12rem;
        border-radius: 10px;

    }
`

const SearchInput = styled.input`
    background: ${({ theme }) => theme.body};
    border: none;
    width: 100%;
    padding-left: 0.5rem;
    color: ${({ theme }) => theme.text};
    :focus {
        outline:none;

    }
`
const NavBarIcon = styled(CgMenuRight)`
    display: none;

    @media(max-width: 768px) {
        display: block;
        margin-left: 1.2rem;
    }
`

const NavIconLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    

    :hover {
        color: ${({ theme }) => theme.primaryText};
        ::after {
            content: ""
        }
    }

    .dropdown {
        display: flex;
        flex-direction: column;
        position: absolute;
        height: 5.5rem;
        width: fit-content;
        justify-content: space-between;
        background: ${({ theme }) => theme.body};
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;
        transition: 0.2s;
    }
    .dropdown_hide {
       display: none;
    }
`
