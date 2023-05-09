import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import HorizontalOptionBar from "../components/HorizontalOptionBar"
import NavBar from "../components/NavBar"
import Empty from "../assets/icons/Empty.svg"
import { useLocation } from "react-router-dom"

import { AiOutlineQuestionCircle } from "react-icons/ai"
import { HiOutlineIdentification } from "react-icons/hi"
import ExpandableCard from '../components/ExpandableCard'
import { ThemeContext } from "../context/ThemeContext"

const Help = () => {
    const location = useLocation()
    const [toggleTab, setToggleTab] = useState(1);
    const [addQues, setAddQues] = useState(false);
    const [expandable, setExpandable] = useState(false);

    function handleExpandable () {
        setExpandable(!expandable)
    }   

    const { theme } = useContext(ThemeContext)
  const [iconColor, setIconColor] = useState(
    theme === "light" ? "#19202A" : "#fff"
  )
  const colorToggle = () => {
    theme === "light" ? setIconColor("#19202A") : setIconColor("#fff")
  }

  useEffect(() => {
    colorToggle()
  }, [theme])

    return (
        <>
         <NavBar />
      <HorizontalOptionBar />
        <HelpScreenWrap>
        <VerticalTabBar>
          <AdminListArr>
            <Tabbtn
              onClick={() => setToggleTab(1)}
              className={toggleTab === 1 ? "active-tab" : ""}
            >
              <AiOutlineQuestionCircle
                style={{ marginRight: "10px" }}
                size={15}
                color={toggleTab === 1 ? "#fff" : iconColor}
              />
              Recurring 
              Questions
            </Tabbtn>
            <Tabbtn
              onClick={() => setToggleTab(2)}
              className={toggleTab === 2 ? "active-tab" : ""}
            >
              <HiOutlineIdentification
                style={{ marginRight: "10px" }}
                size={15}
                color={toggleTab === 2 ? "#fff" : iconColor}
              />
              Contact Us
            </Tabbtn>
          </AdminListArr>
        </VerticalTabBar>
        <QuestionWrap>

                <div className='pagetitle_cont'>
                <PageTitle>
                  {
                    toggleTab === 1?
                    'QueRecurring Questions':
                    toggleTab === 2?
                    'Contact us'
                    : null
                  } </PageTitle>
                <AddEventBtn onClick={() => setAddQues(!addQues)}>
                  Add Question
                </AddEventBtn>
              </div>
           {
             toggleTab === 1?
             addQues?
                
              <img className="empty_image" src={Empty} alt="" />
          :
          <QuestionCardCont>
          <ExpandableCard 
              title={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} 
              toggle={expandable}
              content={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
              handleDown={handleExpandable}
              handleUp={handleExpandable}
              />
      </QuestionCardCont>
          : toggleTab === 2?
          <QuestionCardCont>
              <FormContainer>
      <div className="input_cont">
          <FormInput placeholder='Your Name'/>
          <FormInput placeholder='Your Email'/>
          <FormInput placeholder='Your Message'/>

      </div>
        <SendButton>
            Send Now
        </SendButton>
      </FormContainer>
          </QuestionCardCont>
           : null
        }
           
            
        </QuestionWrap>

        </HelpScreenWrap>
        </>
    )
}

export default Help
const HelpScreenWrap = styled.div`
  display: flex;
`
const VerticalTabBar = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  width: 20%;
  max-width: 20%;
  min-width: 20%;
  background:  ${({theme}) => theme.background};
  /* background: cyan; */

  .active-tab {
    background: #dc1d13;
    transition: 500ms;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
        display: none;
  }
`
const AdminListArr = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  padding-top: 1.5rem;
  width: 100%;
  overflow-y: auto;
`
const Tabbtn = styled.button`
  color: var(--black-shade);
  text-decoration: none;
  border: none;
  background: none;
  padding: 0.6rem 0rem;
  transition: 500ms;
  cursor: pointer;
  margin-bottom: 2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 29px;
  border-radius: 0px 5px 5px 0px;

  @media screen and (max-width: 768px) {
        font-size: 0.8rem;
  }
`
const QuestionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  align-items: center;
   
  .pagetitle_cont {
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
  }

  .empty_image {
    width: 206px;
    height: 300px;
  }
`
const AddEventBtn = styled.button`
  cursor: pointer;
  background: var(--p-red);
  border: none;
  width: 10rem;
  color: #fff;
  float: right;
  height: 3rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
`
const QuestionCardCont= styled.div`
    display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding: 1rem;
  height: 90vh;
  overflow-y: auto;
  justify-content: space-around;



`
const PageTitle = styled.div`
  padding: 1rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({theme}) => theme.text};
`

const FormContainer = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;

    .input_cont {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        justify-content: space-evenly;
        height: 20rem;
        width: 100%;
    }

`
const FormInput = styled.input`
    width: 55%;
    height: 1rem;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    border: none;
    background: ${({theme}) => theme.background};

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
    width: 5rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 4rem;
    cursor: pointer;
`
