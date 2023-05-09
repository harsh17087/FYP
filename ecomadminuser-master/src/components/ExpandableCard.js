import React from "react"
import { AiFillCaretDown, AiFillCaretUp  } from "react-icons/ai"
import styled from "styled-components"

const ExpandableCard = ({ toggle, handleUp, handleDown, title, content }) => {
  return (
    <CardWrap>
      <div className="title_cont">
        <label className="title">{title}</label>
        {!toggle ? (
          <AiFillCaretDown className="toggleIcon" onClick={handleDown} size={25} color="#000" />
        ) : (
          <AiFillCaretUp className="toggleIcon" onClick={handleUp} size={25} color="#000" />
        )}
      </div>
      <div className={toggle ? "expanded" : "not_expanded"}>
        <p>{content}</p>
      </div>
    </CardWrap>
  )
}

export default ExpandableCard

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 5px;

  .title_cont {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 1rem;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      color: ${({ theme }) => theme.text};
    }
  }

  .toggleIcon {
      cursor: pointer;
  }
  .expanded {
      width: inherit;
      height: fit-content;

  }

  .not_expanded{
    display: none;
  }
`
