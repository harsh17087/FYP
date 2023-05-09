import React, { useState } from 'react'
import HorizontalOptionBar from '../components/HorizontalOptionBar'
import NavBar from '../components/NavBar'
import { useLocation } from "react-router-dom"
import styled from 'styled-components'
import SimpleFormInput from '../components/SimpleFormInput'
import SimpleTextArea from '../components/SimpleTextArea'

const AddAdmin = () => {
    const [toggleTab, setToggleTab] = useState(0)
    const  adminListArr = [
        {
            'title': 'Admin 1',
        },
        {
            'title': 'Admin 1',
        }
    ]

    const location = useLocation()
    console.log(location.hash.replace('%20', " ", '#', '').substring(1))

    const adminIt = {
        "title": 'Admin'
    }

    const addAdmin = () => {
        adminListArr.push(adminIt)
    }
    return (
        <>
          <NavBar/>
          <HorizontalOptionBar/>  
          <AddAdminOption>
                <label>Add new Admin</label>
                <AddAdminBtn
                    onClick={addAdmin}
                    >
                    Add Admin
                </AddAdminBtn>
            </AddAdminOption>
          <AdminFormWrap>
            
            

            <VerticalTabBar>
                <AdminListArr>
                {
                     adminListArr.map((item, index) =>(
                        <Tabbtn
                        key={index} 
                        onClick={() => setToggleTab(index)} className={toggleTab === index || location.hash.replace('%20', " ", '#', '').substring(1) === item.title? 'active-tab': ''}>{item.title}</Tabbtn>
                     ))
                }
                
                </AdminListArr>
                <AddAdminBtn
                    onClick={addAdmin}
                    >
                    Add Admin
                </AddAdminBtn>
            </VerticalTabBar>
            <AdminFormCont>
                <>
                <SimpleFormInput btnLabel={'Edit'} label={"Name*:"} />
                <SimpleFormInput btnLabel={'Edit'} label={"Job*:"} />
                <SimpleFormInput btnLabel={'Edit'} label={"Email*:"} />
                <SimpleFormInput btnLabel={'Edit'} label={"Phone*:"} />
                <SimpleFormInput btnLabel={'Edit'} label={"Date of Birth*:"} />
                <SimpleFormInput btnLabel={'Edit'} label={"Gender*:"} />
                <SimpleTextArea  btnLabel={'Edit'} label={"Address*:"}  />
                <SimpleFormInput btnLabel={'Edit'} label={"Country*:"} />
                </>
                
             
            </AdminFormCont>
                <span className='infotip_label'>*requried to be filed</span>
            </AdminFormWrap>
        </>

    )
}

export default AddAdmin

const VerticalTabWrap = styled.div`
    display: flex;
`
const VerticalTabBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 25%;
    max-width: 25%;
    background: ${({theme}) => theme.background};
    /* background: cyan; */


    .active-tab {
        background: #DC1D13;
        transition: 500ms;
        cursor: pointer;
        color: #fff;
    }

    @media (max-width: 768px){
        display: none;
    }

`
const AdminFormWrap = styled.div`
    display: flex;
    width: 100%;
    background:  ${({theme}) => theme.body};

    .infotip_label{
        position: absolute;
        bottom: -5rem;
        right: 1.5rem;
    }
`

const AdminListArr = styled.div`
    display: flex;
    flex-direction: column;
    height:75vh;
    padding-top: 1.5rem;
    width: 100%;
     overflow-y: auto;

`
const Tabbtn = styled.button`
    color: ${({theme}) => theme.text};
    text-decoration: none;
    border: none; 
    background: none;
    padding: 0.6rem 0rem;
    transition: 500ms;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 29px;

`
const AddAdminBtn = styled.button`
    color: #fff;
    text-decoration: none;
    border: none; 
    background: ${({theme}) => theme.accent};
    padding: 0.6rem 0.3rem;
    width: fit-content;
    height: 2.5rem;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
`
const AdminFormCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.5rem;
    background: ${({theme}) => theme.body};
    
    @media (max-width: 768px){
        height: 90vh;
    }
`
const AddAdminOption = styled.div`
   display: none;

   @media (max-width: 768px){
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: ${({theme}) => theme.body};
    align-items: center;
    label {
        font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
        color:${({ theme }) => theme.text};
    }
   }
`