import React, { useState, useEffect, useContext } from "react"
import HorizontalOptionBar from "../components/HorizontalOptionBar"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { BsLayoutTextWindow } from "react-icons/bs"
import { RiRotateLockLine } from "react-icons/ri"
import { AiOutlineSetting } from "react-icons/ai"
import { BiWalletAlt } from "react-icons/bi"
import TopSellerCard from "../components/TopSellerCard"
import TopSellerFullView from "../components/TopSellerFullView"
import Empty from "../assets/icons/Empty.svg"
import SimpleFormInput from "../components/SimpleFormInput"
import ArticleCard from "../components/ArticleCard"
import ToggleButton from "react-toggle-button"

import { ThemeContext } from "../context/ThemeContext"
import SimpleTextArea from "../components/SimpleTextArea"

const Setting = () => {
  const location = useLocation()

  const [toggleTab, setToggleTab] = useState(0)
  const [showFullView, setShowFullView] = useState(false)
  const [addAuction, setAddAuction] = useState(false)
  const [addArticle, setAddArticle] = useState(false)

  const topSellerData = [
    {
      fullname: "Leslie Alexander",
    },
    {
      fullname: "ffsie Alexander",
    },
    {
      fullname: "Courtney Henry",
    },
    {
      fullname: "Sounst Henry",
    },
  ]
  console.log(toggleTab)
  let auctionTime = "10: 20Pm"
  let auctionDate = "December 09, 2020"
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
      <EventsScreenWrap>
        <VerticalTabBar>
          <AdminListArr>
            <Tabbtn
              onClick={() => setToggleTab(1)}
              className={toggleTab === 1 ? "active-tab" : ""}
            >
              <AiOutlineSetting
                style={{ marginRight: "10px" }}
                size={15}
                color={toggleTab === 1 ? "#fff" : iconColor}
              />
              Setting
            </Tabbtn>
            <Tabbtn
              onClick={() => setToggleTab(2)}
              className={toggleTab === 2 ? "active-tab" : ""}
            >
              <BiWalletAlt
                style={{ marginRight: "10px" }}
                size={18}
                color={toggleTab === 2 ? "#fff" : iconColor}
              />
              Wallet
            </Tabbtn>
            <Tabbtn
              onClick={() => setToggleTab(3)}
              className={toggleTab === 3 ? "active-tab" : ""}
            >
              <RiRotateLockLine
                style={{ marginRight: "10px" }}
                size={15}
                color={toggleTab === 3 ? "#fff" : iconColor}
              />
              Confidentiality
            </Tabbtn>
          </AdminListArr>
        </VerticalTabBar>
        {toggleTab === 1 ||
        location.hash.replace("%20", " ", "#", "").substring(1) === "Setting"  ?(
          <CardContainer>
            {!showFullView ? (
              <>
                <div className="pagetitle_cont">
                  <PageTitle>
                    {location.hash.replace("%20", " ").substring(1)}
                  </PageTitle>
                  {/* <AddEventBtn>Add Event</AddEventBtn> */}
                </div>
                <SimpleFormInput btnLabel={"Edit"} label={"Name"} />
                <SimpleFormInput btnLabel={"Edit"} label={"Email"} />
                <SimpleFormInput btnLabel={"Edit"} label={"Phone"} />
                <SimpleFormInput btnLabel={"Edit"} label={"Date of Birth"} />
                <SimpleFormInput btnLabel={"Edit"} label={"Gender"} />
                <SimpleTextArea btnLabel={"Edit"} label={"Address"} />
                <SimpleFormInput btnLabel={"Edit"} label={"Country"} />

                <InfoTitle>*required to be filled</InfoTitle>
              </>
            ) : (
              <TopSellerFullView
                title={"Top Seller of the week"}
                btnLabel={"Edit"}
                btnLabelTwo={"Edit"}
                noOfGem={10}
                item={topSellerData}
              />
            )}
          </CardContainer>
        )
          : null
      }
        
        {
          toggleTab === 2 ||
          location.hash.replace("%20", " ").substring(1) === "Wallet" ?(
          <AuctionContentWrap>
            {!addAuction && (
              <div className="pagetitle_cont">
                <PageTitle>
                  {location.hash.replace("%20", " ").substring(1)}
                </PageTitle>
              </div>
            )}
            <FormContainer>
              <SimpleTextArea 
                label={"Bank information"} 
                btnLabel={"Edit"} />
              <SimpleTextArea 
                label={"Sponser Link"} 
                btnLabel={"Edit"} />
            </FormContainer>
          </AuctionContentWrap>
        )
        : null
        } 
        

        {toggleTab === 3 ||
        location.hash.replace("%20", " ").substring(1) === "Confidentiality" ? (
          <BlogWrap>
            <div className="pagetitle_cont">
              <PageTitle>
                {location.hash.replace("%20", " ").substring(1)}
              </PageTitle>
            </div>
            <ArticleCardContainer>
              <div className="title_container">
                <span>I want the newsletters.</span>
                <ToggleButton inactiveLabel={""} activeLabel={""} />
              </div>
              <div className="title_container">
                <span>I allow sending notification when I like an article..</span>
                <ToggleButton inactiveLabel={""} activeLabel={""} />
              </div>
              <div className="title_container">
                <span>I allow personalization of my news feed
.</span>
                <ToggleButton inactiveLabel={""} activeLabel={""} />
              </div>
              <div className="title_container">
                <span>I allow Game2Coin to personalize my news feed and search results by
evaluating my
preferences, settings, previous purchases and use of the
Game2Coin website and app.</span>
                <ToggleButton inactiveLabel={""} activeLabel={""} />
              </div>
            </ArticleCardContainer>
          </BlogWrap>
        ) : null}
      </EventsScreenWrap>
    </>
  )
}

export default Setting

const EventsScreenWrap = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
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
  background: ${({ theme }) => theme.background};
  /* background: cyan; */
  @media screen and (max-width: 768px) {
    display: none;
  }

  .active-tab {
    background: #dc1d13;
    transition: 500ms;
    cursor: pointer;
    color: #fff;
  }
`
const AdminFormWrap = styled.div`
  display: flex;
  width: 100%;
  background: #fff;

  .infotip_label {
    position: absolute;
    bottom: -5rem;
    right: 1.5rem;
  }
`

const AdminListArr = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  padding-top: 1.5rem;
  width: 100%;
  overflow-y: auto;

  /* @media screen and (max-width: 768px) {
   flex-direction: row;
  } */
`
const Tabbtn = styled.button`
  color: ${({ theme }) => theme.text};
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
  font-size: 1.1rem;
  line-height: 29px;
  border-radius: 0px 5px 5px 0px;

  @media screen and (max-width: 768px) {
    color: ${({ theme }) => theme.text};
    font-size: 0.6rem;
  }
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  height: 90vh;
  overflow-y: auto;
  justify-content: space-around;
  .pagetitle_cont {
    display: flex;
    width: 100%;
    align-items: center;
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
const AuctionContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  align-items: center;

  .pagetitle_cont {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .empty_image {
    width: 206px;
    height: 300px;
  }
`
const AuctionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .auctionDate {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    color: #19202a;
  }

  .auctionTime {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    color: #19202a;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const BlogWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  align-items: center;

  .pagetitle_cont {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .empty_image {
    width: 206px;
    height: 300px;
  }
`
const ArticleCardContainer = styled.div`
  display: flex;
  padding: 1rem;
  height: 90vh;
  width: 100%;
  flex-direction: column;
  .title_container {
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
    span {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
    }
  }
`

const PageTitle = styled.div`
  padding: 1rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`

const InfoTitle = styled.label`
  font-size: 0.8rem;
  float: right;
  font-family: Montserrat;
  font-style: normal;
  color: ${({ theme }) => theme.text};
`
