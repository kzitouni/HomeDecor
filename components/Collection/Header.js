import React from "react";
import styled from "styled-components";
import {RiArrowDownSFill} from "react-icons/ri";
export default function Header() {
  return (
    <Wrapper >
      <Title>Featured Brands</Title>
      <Sort>
          <Subtitle>Sort by:</Subtitle>
          <DropSelector>
              <Option>On Sale</Option>
              <RiArrowDownSFill />
              <Dropdown>
                  <DropdownItem>On Sale</DropdownItem>
              </Dropdown>
          </DropSelector>
      </Sort>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: ${(props) => (props.First ? "125px" : "0px")}; */
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Title = styled.h1`
    color: #2f3337;
    font-size: 36px;
    font-weight: 700;
    line-height: 43px;
    margin: 0 0 15px;
    width: 100%;
`;

const Sort = styled.div`
width: 100%;
justify-content: flex-end;
margin-bottom: 30px;

`

const Subtitle = styled.p`

`

const DropSelector = styled.div`
    -webkit-align-items: center;
    align-items: center;
    border-radius: 4px;
    border: none;
    color: #2f3337;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    min-width: 150px;
    padding: 0 16px;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
    z-index: 3;

    border: 1px solid #dadcdf;
    border-radius: 4px;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0 0 0 8px;
    position: absolute;
    right: 0;
    top: 0;
`

const Option = styled.span`

`

const Dropdown = styled.div`

`

const DropdownItem = styled.a`

`