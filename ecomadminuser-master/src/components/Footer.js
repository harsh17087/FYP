import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'


const Footer = () => {
    return (
        <FooterWrap>
          <FooterElement>
            <div className='logo_container'>
                <img src={logo} alt="" />
            </div>
            <div className="menu_container">
                <label className="container_label">
                    Menu
                </label>
                <div className="menuBtnContainer">
                    <MenuBtnLink activeClassName="active" to="/">
                        Home
                    </MenuBtnLink>
                    <MenuBtnLink activeClassName="active" to="/events">
                        Event
                    </MenuBtnLink>
                    <MenuBtnLink activeClassName="active" to="/chat">
                        Message
                    </MenuBtnLink>
                    <MenuBtnLink activeClassName="active" to="/notification">
                        Notification
                    </MenuBtnLink>
                    <MenuBtnLink activeClassName="active" to="/like">
                        Like
                    </MenuBtnLink>
                    <MenuBtnLink activeClassName="active" to="/profile">
                        Profile
                    </MenuBtnLink>
                    <MenuBtnLink activeClassName="active" to="/help">
                        Help
                    </MenuBtnLink>
                </div>
            </div>
            <div className="address">
            <label className="container_label">
                    Head Office
                </label>
                <div className='addressLine_cont'>
                     <p className='address_txt'>Address- 2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                     <p className='address_txt'>Call -(603) 555-0123, (603) 555-0124</p>
                     <p className='address_txt'>Email-support@studio.com</p>
                </div>
            </div>
          </FooterElement>
          <div className="footer__footerLabel">
          <label>@2021 copyright all right reserved</label>
          </div>
        </FooterWrap>
    )
}

export default Footer

const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.background};
    .footer__footerLabel {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2rem;
    }
`
const FooterElement = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70vh;

    @media  screen and (max-width: 768px) {
        flex-direction: column;
        height: fit-content;
        align-items: center;
    }


    .logo_container{
        width: 20rem;
        display: flex;
        height: 80%;
        align-items: center;
        justify-content: center;
        img {
            width: 10rem;

            @media(max-width: 768px){
                width: 5rem;
                margin-top: 1rem;
            }
        }
    }


    .container_label{
        color: ${({ theme }) => theme.text}; 
    font-family: Montserrat;
font-weight: 600;
font-size: 1rem;
margin: 1.5rem 0rem;
text-decoration: none;
    }
    .menu_container{
        display: flex;
        flex-direction: column;
        width: 30rem;
        height: 80%;

        @media  screen and (max-width: 768px) {
            width: 80%;   

        }
    }
    .menuBtnContainer{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 18rem;
        /* justify-content: space-between; */
    }

    .address {
        display: flex;
        width: 20rem;
        flex-direction: column;
        height: 80%;
    }

    .addressLine_cont{
        display: flex;
        
        justify-content: space-evenly;
        flex-direction: column;
        p{
            color: ${({ theme }) => theme.text}; 
    font-family: Montserrat;
font-weight: 400;
font-size: 1rem;
margin: 1.5rem 0rem;
text-decoration: none;
        }
    }
`

const MenuBtnLink = styled(NavLink)`
    color: ${({ theme }) => theme.text}; 
    font-family: Montserrat;
font-weight: 400;
font-size: 1rem;
margin: 1.5rem 0rem;
text-decoration: none;
    .active {
        color: ${({ theme }) => theme.primaryText};    
    }
`