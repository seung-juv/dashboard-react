import React from "react";
import styled from "styled-components";
import GlobalNavigationButton from "./GlobalNavigationButton";
import { Link } from "react-router-dom";
import GlobalNavigation from "../navigation/GlobalNavigation";

const Wrapper = styled.nav`
  width: 100%;
  max-width: 260px;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${props => props.theme.mainColor};
`;

const Logo = styled.h1`
  width: 100%;
  height: 70px;
  font-size: 22px;
  display: flex;
  color: ${props => props.theme.whiteColor};
  font-weight: bold;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  flex: 1;
  flex-flow: column nowrap;
  overflow-y: scroll;
`;

export default () => {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">Dashboard</Link>
      </Logo>
      <MenuContainer>
        {GlobalNavigation.map((options, idx) => <GlobalNavigationButton key={idx} {...options} />)}
      </MenuContainer>
    </Wrapper>
  );
};
