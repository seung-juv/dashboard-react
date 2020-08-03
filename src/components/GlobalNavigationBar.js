import React from "react";
import styled from "styled-components";
import GlobalNavigationButton from "./GlobalNavigationButton";
import { faHome, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        <Link to="/">LOGO</Link>
      </Logo>
      <MenuContainer>
        <GlobalNavigationButton ItemProps={{ name: "Dashboards", url: "/", icon: faHome }} />
        <GlobalNavigationButton
          ItemProps={{ name: "Projects", icon: faProjectDiagram }}
          SubItemProps={[
            {
              name: "List",
              url: "/projects/list"
            },
            {
              name: "Details",
              url: "/projects/details"
            }
          ]}
        />
      </MenuContainer>
    </Wrapper>
  );
};
