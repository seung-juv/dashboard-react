import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 24%;
  margin: 0 .5% 25px;
  background-color: ${props => props.theme.whiteColor};
  padding: 25px;
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, .05);
  border-radius: 5px;
`;

const Title = styled.h3`
  display: block;
  font-size: 16px;
  margin-bottom: 25px;
  font-weight: 500;
  color: ${props => props.theme.darkGreyColor};
`;

const Compoent = styled.div``;

const CardContainer = ({ title, component }) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Compoent>
        {component}
      </Compoent>
    </Container>
  );
};

export default CardContainer;
