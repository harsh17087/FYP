import React from 'react'
import styled from 'styled-components'

const ArticleCard = ({articleTitle,handleViewBtn, content,handleEditBtn}) => {
    return (
        <ArticleCardWrap>
            <ArticleOption>
                <label>{articleTitle}</label>
                <div>
                    <ViewBtn onClick={handleEditBtn}>
                        Edit
                    </ViewBtn>
                    <ViewBtn onClick={handleViewBtn}>
                        View
                    </ViewBtn>
                </div>
            </ArticleOption>
            <ArticleContent>
                <p>
            {content}

                </p>
            </ArticleContent>
        </ArticleCardWrap>
    )
}

export default ArticleCard

const ArticleCardWrap = styled.div`
    width: 20rem;
    height: fit-content;
    background:  ${({theme}) => theme.background};
    border-radius: 5px;
    padding: 0.5rem 0rem;
    margin: 0.5rem 0;
    @media screen and (max-width: 768px) {
        width: 100%;
  }
`
const ArticleOption = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 0rem;
    label {
        font-size: 1.2rem;
        color: var(--p-red);
        padding-left: 0.5rem;
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
  color: #747178;
  cursor: pointer;
`
const ArticleContent = styled.div`
  display: flex;
  p {
      padding: 0.5rem;
  }
`