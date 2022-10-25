import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GridProduct from "./components/GridProduct";
const Products = () => {
   const Products =useSelector((state)=>state.ToggleReducer.Products)
  return <Wrapper>
 <GridProduct Products ={Products}/>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
