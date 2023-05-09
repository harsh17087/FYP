import React from 'react'
import styled from 'styled-components'

const TopSellerFullView = ({ noOfGem, title, btnLabel, item, handleOnClick, btnLabelTwo, handleOnClickTwo }) => {
    return (
        <TopSellerWrap>
        <SellerCardOption>
          <h2>{title}</h2>
          <ViewBtn onClick={handleOnClick}>{btnLabel}</ViewBtn>
        </SellerCardOption>
        <CardContent>
          <SellerCardOption>
          <h2  className="win_gems">{`Win: ${noOfGem}`}</h2>
          <ViewBtn onClick={handleOnClickTwo}>{btnLabelTwo}</ViewBtn>
        </SellerCardOption>
          {item
            ? item.map((title, index) => <CardItem key={index}>{title.fullname}</CardItem>)
            : null}
        </CardContent>
      </TopSellerWrap>
    )
}

export default TopSellerFullView

const TopSellerWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(240, 241, 245, 0.6);
  border-radius: 5px;
  width: 60rem;
  height: fit-content;
  padding: 0.8rem;
  margin: 15px 0px;

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
  }
`

const SellerCardOption = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
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
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  .win_gems {
    color: ${({ theme }) => theme.primaryText};
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
  }
`
const CardItem = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`
