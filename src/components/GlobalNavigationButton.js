import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const EFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  transition: .25s all ease;
  &.menu-active-angle {
    transform: rotate(90deg);
  }
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

const ItemText = styled.span`
  transition: .25s color ease;
  flex: 1;
  margin-left: 20px;
  font-size: 15px;
`;

const SubItemContainer = styled.div``;

const SubItem = styled(Link)`padding: 15px 30px 16px 65px;`;

const SubItemText = styled.span`transition: .25s color ease;`;

const GlobalNavigationButton = ({ itemProps: { name, icon, url }, subItemProps }) => {
  const subItemEl = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleSlideToggle = () => {
    const { current } = subItemEl;
    // TODO cureent slide toggle
  };
  const { pathname } = useLocation();
  const onClick = e => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
    handleSlideToggle();
  };
  return (
    <ItemContainer>
      <Item
        to={url ? url : ""}
        className={url !== undefined && pathname === url ? "active" : null}
        onClick={subItemProps && onClick}
      >
        <EFontAwesomeIcon icon={icon} />
        <ItemText>
          {name}
        </ItemText>
        {subItemProps &&
          <EFontAwesomeIcon icon={faAngleRight} className={toggleMenu && "menu-active-angle"} />}
      </Item>

      {subItemProps &&
        <SubItemContainer ref={subItemEl}>
          {subItemProps.map((item, idx) =>
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
