import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: ${props => props.theme.whiteColor};
  padding: 25px;
`;

const Title = styled.h3`
  display: block;
  font-size: 16px;
  margin-bottom: 25px;
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
