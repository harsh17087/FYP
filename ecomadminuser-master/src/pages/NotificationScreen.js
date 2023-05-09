import React from 'react'
import styled from 'styled-components'
import HorizontalOptionBar from '../components/HorizontalOptionBar'
import NavBar from '../components/NavBar'
import NotificationItem from '../components/NotificationItem'

const NotificationScreen = () => {
    return (
        <>
        <NavBar/>
        <HorizontalOptionBar/>
        <NotificationWrapper>
            <label className='screen_title' >Notification</label>
            <List>
                <NotificationItem 
                  imageSrc={'https://rukminim1.flixcart.com/image/432/518/kqb8pzk0/sandal/o/i/y/9-204592-crocs-blue-original-imag4cpzm73fwggx.jpeg?q=70'}
                  productName={"Product Name"}
                  notificationMssg={"Most Liked Product"}
                  />
                <NotificationItem 
                  imageSrc={'https://rukminim1.flixcart.com/image/432/518/kqb8pzk0/sandal/o/i/y/9-204592-crocs-blue-original-imag4cpzm73fwggx.jpeg?q=70'}
                  productName={"Product Name"}
                  notificationMssg={"Most Liked Product"}
                  />
                <NotificationItem 
                  imageSrc={'https://rukminim1.flixcart.com/image/432/518/kqb8pzk0/sandal/o/i/y/9-204592-crocs-blue-original-imag4cpzm73fwggx.jpeg?q=70'}
                  productName={"Product Name"}
                  notificationMssg={"Most Liked Product"}
                  />
                 
            </List>
        </NotificationWrapper>
        </>
    )
}

export default NotificationScreen

const NotificationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
    .screen_title {
        font-size: 2rem;
        font-weight: 500;
        margin-left: 4rem;
        margin-bottom: 1rem;
    }
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
   align-items: center;
   overflow-y: auto;
`
