import React from "react";
import styled from "styled-components";

const Wrapper = styled.section``;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 15px;
`;
const Settings = () => {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  );
};

export default Settings;
