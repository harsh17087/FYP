import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import SubMenu from "./SubMenu"
// import { SidebarData } from '../assets/SidebarData'
import { Link } from "react-router-dom"
import { BsCalendar4Event, BsHandThumbsUp, BsBell } from "react-icons/bs"
import { BiChevronRight, BiChevronDown, BiEnvelope } from "react-icons/bi"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { ThemeContext } from "../context/ThemeContext"

const SideBar = ({
  isSideBarOpen,
  onBlur,
  onFocus,
}) => {
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

  const SidebarData = [
    {
      title: "Events",
      path: "/events",
      icon: <BsCalendar4Event size="20" color={iconColor} />,
      iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
      iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
      subNav: [
        {
          title: "Events",
          path: "#Events",
        },
        {
          title: "Auction",
          path: "#Auction",
        },
        {
          title: "Blog",
          path: "#Blog",
          
        },
      ]
    },

    {
      title: "Profile",
      path: "#",
      icon: <FaRegUserCircle size="20" color={iconColor} />,
      iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
      iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
      subNav: [
        {
          title: "My Profile",
          path: "/profile",
        },
        {
          title: "My Information",
          path: "/setting",
          subNav2: [
        {
          title: "setting",
          path: "#Setting",
          
        },
        {
          title: "wallet",
          path: "#Wallet",

        },
        {
          title: "confidentiality",
          path: "#Confidentiality",

        },
      ],
        },
        {
          title: "Statstics",
          path: "/stats",
          subNav2: [
            {
              title: "Number",
              path: "#Number",
            },
            {
              title: "Graph",
              path: "#Graph",
            },
            {
              title: "Time",
              path: "#Time",
            },
          ],
        },
        {
          title: "Other",
          path: "#",
        },
      ],
    },
    {
      title: "Message",
      path: "/chatm",
      icon: <BiEnvelope size="20" color={iconColor} />,
      iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
      iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
    {
      title: "Notification",
      path: "/notification",
      icon: <BsBell size="20" color={iconColor} />,
      iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
      iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
    {
      title: "Like",
      path: "#",
      icon: <BsHandThumbsUp size="20" color={iconColor} />,
      iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
      iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
    {
      title: "Help",
      path: "/help",
      icon: <AiOutlineQuestionCircle size="20" color={iconColor} />,
      iconRightArrow: <BiChevronRight size="20" color={iconColor} />,
      iconDownArrow: <BiChevronDown size="20" color={iconColor} />,
    },
  ]
  return (
    <SidebarWrap
      onBlur={onBlur}
      onFocus={onFocus}
      isSideBarOpen={isSideBarOpen}
    >
      {SidebarData.map((item, index) => {
        return <SubMenu key={index} item={item} />
      })}
    </SidebarWrap>
  )
}

export default SideBar

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 60%;
  height: 100vh;
  justify-content: flex-start;
  background: ${({ theme }) => theme.background};
  top: 2.8rem;
  right: ${({ isSideBarOpen }) => (isSideBarOpen ? "0%" : "-100%")};
  z-index: 100;
  transition: 500ms;
  -webkit-box-shadow: 2px 0px 5px -2px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 2px 0px 5px -2px rgba(0, 0, 0, 0.35);
  box-shadow: 2px 0px 5px -2px rgba(0, 0, 0, 0.35);
  overflow-y: auto;
`

const ChatPerson = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  .logged_user {
    display: flex;
    align-items: center;
  }

  #logged_usr_img {
    position: relative;
  }

  .logged_user img {
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
  .logged_name {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 21px;
  }
  .user_online_status {
    position: absolute;
    padding: 1px;
    background: #20c968;
    border: 1.5px solid var(--white);
    border-radius: 100%;
    right: 0rem;
    bottom: 0.2rem;
  }

  .chat_count {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    font-size: 0.8rem;
    background: #f73859;
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }
`
