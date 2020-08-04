import React from "react";
import styled from "styled-components";

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

const Profile = props => {
  return (
    <Wrapper>
      <Title>Profile</Title>
      <Container>sdf</Container>
    </Wrapper>
  );
};

export default Profile;
