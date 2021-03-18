import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
BiTrash;
import { BiTrash } from "react-icons/bi";
export default function CartItem({ data, updateNums, index, handleRemove }) {
  const [Quantity, updateQuantity] = useState(data.quantity);
  const [removed, updateRemoved] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    if (Number(e.target.value) > -1 && Number(e.target.value) < 10) {
      updateQuantity(Number(e.target.value));
      updateNums(e.target.value, index);
    }
  }

  function handleAdd() {
    let newQuantity = Number(Quantity) + 1;
    if (newQuantity > -1 && newQuantity < 10) {
      updateQuantity(newQuantity);
      updateNums(newQuantity, index);
    }
  }

  function handleSubtract() {
    let newQuantity = Quantity - 1;
    if (newQuantity > -1 && newQuantity < 10) {
      updateQuantity(newQuantity);
      updateNums(newQuantity, index);
    }
  }
  return (
    <>
      {!removed && (
        <Wrapper>
          <Container>
            <LeftCont>
              <Image src={data.img} />
              <TextCont>
                <H1>{data.name}</H1>
                <Subtitle>
                  {data.size} - {data.color}
                </Subtitle>
              </TextCont>
            </LeftCont>
            <RightCont>
              <QuantityCont>
                <MinusIcon onClick={() => handleSubtract()} />

                <NumCont>
                  <Num value={Quantity} onChange={(e) => handleChange(e)} />
                </NumCont>
                <PlusIcon onClick={() => handleAdd()} />
              </QuantityCont>
              <Price>${(data.price * data.quantity).toFixed(2)}</Price>
              <TrashIcon onClick={() => handleRemove(index)} />
            </RightCont>
          </Container>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid #dadcdf;
  height: 90px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 200px; */
  max-width: 70%;
  margin-left: 10px;
`;

const Subtitle = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #858585;
`;

const H1 = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #2f3337;
  padding-bottom: 15px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.h1`
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  margin-left: 20px;
  @media (max-width: 1000px) {
    margin-left: 35px;
  }
  @media (max-width: 400px) {
    margin-left: 0px;
    margin-bottom: 10px;
  }
`;
const LeftCont = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 50%;
  @media (max-width: 1000px) {
    max-width: 40%;
  }
`;
const RightCont = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 40%;
  @media (max-width: 1000px) {
    max-width: 50%;
  }
  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;

const PlusIcon = styled(AiOutlinePlus)`
  margin-left: 10px;
  cursor: pointer;
`;

const MinusIcon = styled(AiOutlineMinus)`
  margin-right: 10px;
  cursor: pointer;
`;

const TrashIcon = styled(BiTrash)`
  margin-left: 20px;
  color: #dfdfdf;
  font-size: 22px;
  min-width: 22px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  :hover {
    color: #ff5656;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const QuantityCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NumCont = styled.div`
  border: 1px solid #edeeef;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const Num = styled.input`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  color: unset;
  border: unset;
  text-align: center;
`;
