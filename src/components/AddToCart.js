import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa";
import { Button } from "../styles/Button"
import { NavLink } from 'react-router-dom';
import CartAmount from './CartAmount';
const AddToCart = () => {
    const singleProduct = useSelector((state) => state.ToggleReducer.singleProduct)
    const { id, colors, stock  } = singleProduct
    const [colr, setColr] = useState(colors[0])
    return <Wrapper>
        <div className='colors'>
            <p>
                Colors:
                {colors.map((currElem, index) => {
                    return <Button key={index}
                        style={{ backgroundColor: currElem }}
                        className={colr === currElem ? "btnStyle active" : "btnStyle"}
                        onClick={() => setColr(currElem)}>
                        {colr === currElem ? <FaCheck className="checkStyle" /> : null}
                    </Button>

                })}
            </p>
        </div>
        <CartAmount />
            <NavLink to="/cart">
                <Button className='btn' >
                    Add To Cart
                </Button>
            </NavLink>

    </Wrapper>
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 3.5rem;
    height: 4.5rem;
    background-color: #ffff;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 3rem;
    color: #71635E;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart
