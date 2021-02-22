import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {BiCheck} from "react-icons/bi";
export default function CategoryItem(props) {

const [href, setHref] = useState("")

useEffect(() => {
    if(props.name === "Bed & Bath"){
        setHref("BedNBath")
    } else if(props.name === "Home Improvement"){
        setHref("HomeImprovement")
    } else {
        setHref(props.name)
    }
}, [props])

  return (
      <Wrapper href={"/Collection/" + href} check={props.category === props.name} onClick={() => props.setCategory(props.name)}>
          <CheckBox check={props.category === props.name} >
              <Icon check={props.category === props.name} >
              <BiCheck />
              </Icon>
          </CheckBox>
          <Title>{props.name}</Title>
      </Wrapper>
  );
}



const Title = styled.p`
    border-radius: 2px;
    display: -webkit-flex;
    display: flex;
    color: #545658;
    -webkit-align-items: center;
    align-items: center;
    font-size: 14px;
    padding: 10px 4px;
    position: relative;
    text-decoration: none;
    width: 100%;

`

const CheckBox = styled.div`
    border: ${props => props.check ? "0px solid #dadcdf" : "2px solid #dadcdf"};
    border-radius: 2px;
    box-sizing: border-box;
    content: "";
    display: inline-block;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    height: 22px;
    width: 22px;
    margin-right: 9px;
    background-color: ${props => props.check ? "black" : "white"};
`

const Icon = styled.div`
justify-content: center;
align-items: center;
display: ${props => props.check ? "flex" : "none"};
color: #dadcdf;
font-size: 18px;
color: ${props => props.check ? "white" : "#dadcdf"};
height: 100%;
`

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: ${(props) => (props.First ? "125px" : "0px")}; */
  /* margin-bottom: 30px;
  margin-top: 30px; */
  flex-direction: row;
  /* background-color: green; */
  text-decoration: unset;
  cursor: pointer;
  &:hover{
        color: #2f3337;
    text-decoration: underline;
    ${CheckBox}{
        /* background-color: red; */
        ${Icon} {
            display: flex;
        }
    }
    }
`;