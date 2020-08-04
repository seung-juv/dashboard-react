import React from "react";
import styled from "styled-components";

const Container = styled.header`
  flex: 1;
  padding: 15px;
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, .15);
  margin-bottom: 25px;
`;

function Header(props) {
  return <Container>Header</Container>;
}

export default Header;
