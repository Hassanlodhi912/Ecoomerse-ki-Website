import React from 'react'
import { BsStarFill, BsStar,BsStarHalf } from "react-icons/bs";
import styled from "styled-components";

const Star = ({ stars, reviews }) => {
    const rStar = Array.from({ length: 5 }, (elem, index) => {
        let num = index + 0.5
        return (
            <span key={index}>
                {stars >= index + 1 ? (<BsStarFill className='icon' />) :
                stars >= num ? (<BsStarHalf className='icon' />) :
                (<BsStar className='icon' />)}
            </span>
        )
    })
    return (
    <Wrapper>
        <div className="icon-style">
        {rStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star
