import React from 'react'
import styled from 'styled-components'



const NotificationItem = ({imageSrc, notificationMssg,productName }) => {
    return (
        <NotificationItemWrap>
            <ElementOne>
                <div className='notification_detail'>
                <img className='notif_image' src={imageSrc} alt="" />
                <div style={{marginLeft: '1rem', }}>
                   <label className='productname_title' htmlFor="">
                   {productName}
                   </label>
                   <p className='content'>
                    {notificationMssg}
                   </p>
                </div>
                </div>
            </ElementOne>
            <ViewBtn>
                      Details
                  </ViewBtn>
        </NotificationItemWrap>
    )
}

export default NotificationItem

const NotificationItemWrap = styled.div`
    display: flex;
    width: 90%;
    margin: 0.5rem 0rem;
`
const ElementOne = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    .notif_image {
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
    }
    .notification_detail{
        display: flex;
        width: 30rem;

        @media screen and (max-width: 768px) {
       width: fit-content;
  }

    }
    .productname_title{
        font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 0.8rem;
text-transform: capitalize;
color: var(--black-shade);

    }

    .content {
        font-family: Montserrat;
font-style: normal;
font-weight: 400;
font-size: 0.8rem;
text-transform: capitalize;
color: var(--black-shade);
    }
`
const ViewBtn = styled.button`
  background: none;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  text-align: right;
  color: ${({ theme }) => theme.secondryText};
  cursor: pointer;
`