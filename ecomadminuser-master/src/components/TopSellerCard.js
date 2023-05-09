import React from "react"
import styled from "styled-components"

const TopSellerCard = ({ noOfGem, title, btnLabel, item, handleOnClick }) => {
  return (
    <TopSellerWrap>
      <SellerCardOption>
        <h2>{title}</h2>
        <ViewBtn onClick={handleOnClick}>{btnLabel}</ViewBtn>
      </SellerCardOption>
      <CardContent>
        <h2 className="win_gems">{`Win: ${noOfGem}`}</h2>
        {item
          ? item.map((title, index) => <CardItem>{title.fullname}</CardItem>)
          : null}
      </CardContent>
    </TopSellerWrap>
  )
}

export default TopSellerCard

const TopSellerWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  border-radius: 5px;
  width: 20rem;
  height: 16rem;
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
