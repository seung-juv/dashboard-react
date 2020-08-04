import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Wrapper = styled.section``;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0 15px 25px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Details = props => {
  return (
    <Wrapper>
      <Helmet>
        <title>Dashboard | Details</title>
      </Helmet>
      <Title>Details</Title>
      <Container>sdf</Container>
    </Wrapper>
  );
};

export default Details;
