import React, {useState} from "react";
import styled from "styled-components";
import {RiArrowDownSFill} from "react-icons/ri";
import FilterSection from "./ProductFilter/FilterSection";
export default function ProductFilters(props) {

  return (
    <Wrapper >
            <FilterSection name="Category" category={props.category}/>
      <FilterSection name="Price" priceFilter={props.priceFilter} setPriceFilter={props.setPriceFilter} />

    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 25%;
  height: 500px;
  min-width: 170px;
  display: none;
  align-items: center;
  margin: 10px 12px 0 0;
  /* margin-top: ${(props) => (props.First ? "125px" : "0px")}; */
  /* margin-bottom: 30px;
  margin-top: 30px; */
  flex-direction: column;
  /* background-color: green; */
  @media ${(props) => props.theme.mobileL} {
    display: flex;
  }
`;

