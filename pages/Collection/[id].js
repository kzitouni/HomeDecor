import React from "react";
import PageLayout from "../../components/PageLayout";
import styled from "styled-components";
import Header from "../../components/Collection/Header";

export default function Collection() {
  return (
    <PageLayout>
        <Wrapper>
          <Container>
            <Header />
          </Container>
        </Wrapper>
    </PageLayout>
  );
}
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  @media ${(props) => props.theme.laptop} {
    padding: 0 24px;
  }
`;

const Wrapper = styled.div`
    /* padding-top: ${props => props.first ? "220px" : "140px"}; */
    width : 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Open Sans', sans-serif;
    margin-top: 140px;
    /* @media ${(props) => props.theme.laptop} {
    padding-top: ${props => props.first === true ? "180px" : "120px"};
  }
    @media ${(props) => props.theme.tablet} {
    padding-top: ${props => props.first ? "160px" : "100px"};
  }
    @media ${(props) => props.theme.mobile} {
    padding-top: ${props => props.first ? "130px" : "60px"};
  } */

`

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
    /* margin-left: 60px;
    margin-right: 60px; */
    max-width: 1440px;
    padding: 0 16px;
    width: 100%;
    /* @media ${(props) => props.theme.laptop} {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media ${(props) => props.theme.tablet} {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-left: 13px;
    margin-right: 13px;
  } */
`