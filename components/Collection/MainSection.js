import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {RiArrowDownSFill} from "react-icons/ri";
import ProductFilters from "./ProductFilters";
import ProductsGrid from "./ProductsGrid";
import Category from '../../data/Category'

export default function MainSection(props) {
    const [filteredData, setFilteredData] = useState([])
    const [currCategory, setCurrCategory] = useState("")
    const [priceFilter, setPriceFilter] = useState("")
    useEffect(() => {
        // let data = Category[props.name]
        console.log("sort", props.sort)
             sortArrays()
            //    console.log("data new", data)
        if(props.name === "HomeImprovement"){
            setCurrCategory("Home Improvement")
        } else if(props.name === "BedNBath"){
            setCurrCategory("Bed & Bath")
        } else {
            setCurrCategory(props.name)
        }
    }, [props.sort, props.data, priceFilter])


    const sortArrays = async () => {
        let newArr = JSON.parse(JSON.stringify(Category[props.name]))
        console.log("price", priceFilter)
        if(priceFilter === "Under $25"){
            newArr = newArr.filter((item) => {
                return item.price < 25
            })
        }
        if(priceFilter === "$25 - $50"){

            newArr = newArr.filter((item) => {
                return (25 < item.price && item.price < 50)
            })
        }
        if(priceFilter === "$50 - $100"){

            newArr = newArr.filter((item) => {
                return (50 < item.price && item.price < 100)
            })
        }
        if(priceFilter === "$100 - $200"){

            newArr = newArr.filter((item) => {
                return (100 < item.price && item.price < 200)
            })
        }
        if(priceFilter === "Over $200"){

            newArr = newArr.filter((item) => {
                return (item.price > 200)
            })
        }
        console.log("after ppr", newArr)
        if(props.sort === "Price Low - High"){
            console.log("low-high", props.sort)
            newArr = await newArr.sort((a,b) => {
        return a.price - b.price
    })
    console.log("data after sort", newArr)
        }
        if(props.sort === "Price High - Low"){
            console.log("high-low", props.sort)
            newArr = await newArr.sort((a,b) => {
               return b.price - a.price
           })
               }
               if(props.sort === "Best Selling"){
                console.log("high-low", props.sort)
                newArr = await newArr.sort((a,b) => {
                   return b.reviews - a.reviews
               })
                   }
        setFilteredData(newArr)

    }

  return (
    <Wrapper >
        <ProductFilters priceFilter={priceFilter} setPriceFilter={setPriceFilter} category={currCategory} sort={props.sort} />
        <ProductsGrid priceFilter={priceFilter} data={filteredData} sort={props.sort} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* margin-top: ${(props) => (props.First ? "125px" : "0px")}; */

  flex-direction: row;
`;

