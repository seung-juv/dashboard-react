import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../stores/store";
import { connect } from "react-redux";
import Submit from "./Submit";
import Avatar from "./Avatar";

const Container = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  flex: 1;
  padding: 15px 30px;
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, .05);
  margin-bottom: 25px;
  justify-content: space-between;
`;

const SearchWrapper = styled.form`
  display: flex;
  height: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 5px 15px;
  box-sizing: border-box;
  background-color: ${props => props.theme.backgroundColor};
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: 0;
  width: 200px;
  margin-left: 15px;
  font-weight: 300;
  &::placeholder {
    color: ${props => props.theme.darkGreyColor};
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.darkGreyColor};
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationIcon = styled(FontAwesomeIcon)`
  width: 25px;
  height: 25px;
  margin-right: 25px;
  cursor: pointer;
  color: ${props => props.theme.blackColor};
`;

const UserProfile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  overflow: hidden;
`;

const Header = ({ onLogout, dashboard: { avatar } }) => {
  const search = useInput("");
  return (
    <Container>
      <SearchWrapper>
        <SearchContainer>
          <SearchIcon icon={faSearch} />
          <SearchInput value={search.value} onChange={search.onChange} placeholder="Search..." />
        </SearchContainer>
        <Submit value="Search" onClick={() => null} />
      </SearchWrapper>
      <UserInfoContainer>
        <NotificationIcon icon={faBell} size="2x" />
        <UserProfile>
          <Avatar size={35} url={avatar} />
        </UserProfile>
      </UserInfoContainer>
    </Container>
  );
};

const mapStateToProps = state => {
  return { dashboard: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: text => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
