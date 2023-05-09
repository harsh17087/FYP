import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false)
  const location = useLocation()

  const toggleSubNav = () => {
    setSubNav(!subNav)
  }
  const toggleSubNav2 = (index) => {
    // setSubNav2(!subNav2)
    if(subNav2 === ''){
      setSubNav2(index)
    } else{
      setSubNav2('')
    }
  }
  
  const [subNav2, setSubNav2] = useState('')
 
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && toggleSubNav}>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <div className="icon_box">{item.icon}</div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconDownArrow
            : item.subNav
            ? item.iconRightArrow
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav.map((item, index) => {
          return (
            <>
            <SidebarLink to={item.path} onClick={() =>toggleSubNav2(item.path)}>
            <div style={{display: 'flex', alignItems: 'center'}}>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
            </SidebarLink>
            {subNav2 === item.path &&
              item.subNav2 && 
              item.subNav2.map((item2, index) => {
                return (
                  <DropDownLink 
                    key={index} 
                    to={item2.path}>
                  <div>
                    {item2.icon}
                    <SidebarLabel>{item2.title}</SidebarLabel>
                  </div>
                </DropDownLink>
                )
              })
            }
           
            </>
          )
        })}
    </>
  )
}

export default SubMenu
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-decoration: none;
  padding: 20px;
  height: 60px;
  color: var(--font-PG);

   .icon_box {
     display: flex;
     padding: 0.6rem;
     align-items: center;
     justify-content: center;
     width: 25px;
     height: 25px;
     border-radius: 100%;
     background: ${({theme}) => theme.shadeBg}
   }
`
const SidebarLabel = styled.span`
  font-size: 16px;
  margin-left: 20px;
  color: var(--font-PG);
  font-family: Montserrat;
  
    font-weight: normal;
`
const DropDownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-decoration: none;
  padding: 20px;
  height: 60px;
  font-size: 14px;
  padding-left: 40px;
  color: ${({theme}) => theme.text};
`
/* ${({ theme }) => theme.background} */
