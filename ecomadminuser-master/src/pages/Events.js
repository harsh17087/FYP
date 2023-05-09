import React, { useContext, useEffect } from "react"
import { useState } from "react"
import HorizontalOptionBar from "../components/HorizontalOptionBar"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { BsCalendar4Event, BsLayoutTextWindow } from "react-icons/bs"
import { VscNotebook } from "react-icons/vsc"
import TopSellerCard from "../components/TopSellerCard"
import TopSellerFullView from "../components/TopSellerFullView"
import Empty from "../assets/icons/Empty.svg"
import SimpleFormInput from "../components/SimpleFormInput"
import ArticleCard from "../components/ArticleCard"
import { ThemeContext } from "../context/ThemeContext"

const Events = () => {
  const location = useLocation()

  const [toggleTab, setToggleTab] = useState(location.hash? 0: 1)
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
              <BsCalendar4Event
                style={{ marginRight: "10px" }}
                size={15}
                color={toggleTab === 1 ? "#fff" : iconColor}
              />
              Events
            </Tabbtn>
            <Tabbtn
              onClick={() => setToggleTab(2)}
              className={toggleTab === 2 ? "active-tab" : ""}
            >
              <VscNotebook
                style={{ marginRight: "10px" }}
                size={18}
                color={toggleTab === 2 ? "#fff" : iconColor}
              />
              Action
            </Tabbtn>
            <Tabbtn
              onClick={() => setToggleTab(3)}
              className={toggleTab === 3 ? "active-tab" : ""}
            >
              <BsLayoutTextWindow
                style={{ marginRight: "10px" }}
                size={15}
                color={toggleTab === 3 ? "#fff" : iconColor}
              />
              Blog
            </Tabbtn>
          </AdminListArr>
        </VerticalTabBar>
        {toggleTab === 1 || location.hash.replace('%20', " ", '#', '').substring(1) === 'Events' ? (
          <CardContainer>
            {!showFullView ? (
              <>
                <div className="pagetitle_cont">
                <PageTitle>{location.hash.replace('%20', " ").substring(1)}</PageTitle>
                  <AddEventBtn>Add Event</AddEventBtn>
                </div>
                <TopSellerCard
                  title={"Top Seller of the week"}
                  btnLabel={"View"}
                  noOfGem={10}
                  item={topSellerData}
                  handleOnClick={() => setShowFullView(!showFullView)}
                />
                <TopSellerCard
                  title={"Top Seller of the week"}
                  btnLabel={"View"}
                  noOfGem={10}
                  item={topSellerData}
                />
                <TopSellerCard
                  title={"Top Seller of the week"}
                  btnLabel={"View"}
                  noOfGem={10}
                  item={topSellerData}
                />
                <TopSellerCard
                  title={"Top Seller of the week"}
                  btnLabel={"View"}
                  noOfGem={10}
                  item={topSellerData}
                />
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
        ) : toggleTab === 2 || location.hash.replace('%20', " ").substring(1) === 'Auction' ? (
          <AuctionContentWrap>
            {!addAuction && (
              <div className="pagetitle_cont">
                 <PageTitle>{location.hash.replace('%20', " ").substring(1)}</PageTitle>
                <AddEventBtn onClick={() => setAddAuction(!addAuction)}>
                  Add Auction
                </AddEventBtn>
              </div>
            )}
            {!addAuction && <img className="empty_image" src={Empty} alt="" />}
            {addAuction && (
              <AuctionContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    margin: "0rem 0.4rem",
                  }}
                >
                  <p className="auctionDate">{`Next Auction: ${auctionDate}`}</p>
                  <p className="auctionTime">{`Time: ${auctionTime}`}</p>
                </div>
                <FormContainer>
                  <SimpleFormInput
                    label={"Date & Time *:"}
                    btnLabel={"Topic Name *:"}
                  />
                  <SimpleFormInput
                    label={"Date & Time *:"}
                    btnLabel={"Topic Name *:"}
                  />
                  <SimpleFormInput
                    label={"Date & Time *:"}
                    btnLabel={"Topic Name *:"}
                  />
                </FormContainer>
              </AuctionContent>
            )}
          </AuctionContentWrap>
        ) : null}

        {toggleTab === 3  || location.hash.replace('%20', " ").substring(1) === 'Blog'? (
          <BlogWrap>
           
              <div style={{ width: "100%", marginRight: "5rem" }}>
                <AddEventBtn  onClick={() => setAddAuction(!addAuction)}>
                  Add Article
                </AddEventBtn>
              </div>
            {!addArticle ? <img className="empty_image" src={Empty} alt="" />
              :

              <ArticleCardContainer>
              
              <ArticleCard articleTitle={"Article 1"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat facilis earum accusamus quis veniam atque. Magnam ducimus, nisi culpa illo ab iure nihil rerum nobis corporis. Accusamus, reprehenderit esse?"} /> 
              <ArticleCard articleTitle={"Article 1"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat facilis earum accusamus quis veniam atque. Magnam ducimus, nisi culpa illo ab iure nihil rerum nobis corporis. Accusamus, reprehenderit esse?"} /> 
              <ArticleCard articleTitle={"Article 1"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat facilis earum accusamus quis veniam atque. Magnam ducimus, nisi culpa illo ab iure nihil rerum nobis corporis. Accusamus, reprehenderit esse?"} /> 
              <ArticleCard articleTitle={"Article 1"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat facilis earum accusamus quis veniam atque. Magnam ducimus, nisi culpa illo ab iure nihil rerum nobis corporis. Accusamus, reprehenderit esse?"} /> 
            </ArticleCardContainer>
            }
          </BlogWrap>
        )
            :
            null
      }

      </EventsScreenWrap>
    </>
  )
}

export default Events

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
  background:  ${({theme}) => theme.background};
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
   color: ${({theme}) => theme.text};
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
   color: ${({theme}) => theme.text};
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
    justify-content: space-between;
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
    justify-content: space-between;
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
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .empty_image {
    width: 206px;
    height: 300px;
  }
`
const ArticleCardContainer= styled.div`
  display: flex;
  flex-wrap: wrap;
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
  font-size: 1.5rem;
  color: ${({theme}) => theme.text};

`
