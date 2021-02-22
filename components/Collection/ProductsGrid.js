import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {RiArrowDownSFill} from "react-icons/ri";
import Product from "./Product";
export default function ProductsGrid(props) {
const [filteredData, setFilteredData] = useState([])

useEffect(() => {
    console.log("changed", props.data)
    setFilteredData(props.data)
}, [props.sort, props.data])

// useEffect(() => {
//     let newArr = props.data
//     console.log("sort", props.sort)
//     if(props.sort === "Price Low - High"){
//  newArr = props.data.sort((a,b) => {
//     return a.price - b.price
// })
//     }
//     // if(props.sort === "Price High - Low"){
//     //     newArr = props.data.sort((a,b) => {
//     //        return b.price - a.price
//     //    })
//     //        }
//            setFilteredData(newArr)
//            console.log("the arr", newArr)
// }, [props.sort, props.data])

  return (
    <Wrapper >
        {filteredData.map((item, index) => {
            return <Product data={item} />
        })}
        <Empty />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* height: 500px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* margin-top: ${(props) => (props.First ? "125px" : "0px")}; */
  /* margin-bottom: 30px;
  margin-top: 30px; */
  flex-direction: row;
  /* background-color: blue; */
  @media ${(props) => props.theme.mobileL} {
    width: 75%
  }
`;

const Empty = styled.div`
  height: 1px;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
    border: 1px solid #dedede; */
    height: 400px;
    width: 31%;
    /* flex-direction: column;
    background-color: white; */
`;
