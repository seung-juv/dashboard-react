import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  transition: .25s color ease;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 400;
    color: ${props => props.theme.darkGreyColor};
    ${EFontAwesomeIcon} {
      color: ${props => props.theme.darkGreyColor};
    }
    &:hover {
      color: ${props => props.theme.lightGreyColor};
      ${EFontAwesomeIcon} {
        color: ${props => props.theme.lightGreyColor};
      }
    }
    &.active {
      color: ${props => props.theme.whiteColor};
      ${EFontAwesomeIcon} {
        color: ${props => props.theme.whiteColor};
      }
    }
  }
`;

const Item = styled(Link)`padding: 15px 30px;`;

const ItemText = styled.span`transition: .25s color ease;`;

const SubItemContainer = styled.div``;

const SubItem = styled(Link)`padding: 15px 30px 16px 65px;`;

const SubItemText = styled.span`transition: .25s color ease;`;

const GlobalNavigationButton = ({ ItemProps: { name, icon, url }, SubItemProps }) => {
  const { pathname } = useLocation();
  return (
    <ItemContainer>
      <Item to={url ? url : ""} className={url !== undefined && pathname === url ? "active" : null}>
        <EFontAwesomeIcon icon={icon} />
        <ItemText>
          {name}
        </ItemText>
      </Item>

      {SubItemProps &&
        <SubItemContainer>
          {SubItemProps.map((item, idx) =>
            <SubItem
              to={item.url}
              key={idx}
              className={item.url !== undefined && pathname === item.url ? "active" : null}
            >
              <SubItemText>
                {item.name}
              </SubItemText>
            </SubItem>
          )}
        </SubItemContainer>}
    </ItemContainer>
  );
};

export default GlobalNavigationButton;
