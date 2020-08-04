import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

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
  color: ${props => props.theme.blackColor};
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  cursor: pointer;
`;

const Submit = styled.input`
  height: 100%;
  border: 0;
  padding: 0 15px;
  background-color: ${props => props.theme.purpleColor};
  cursor: pointer;
  color: #fff;
`;

const Header = props => {
  const search = useInput("");
  return (
    <Container>
      <SearchWrapper>
        <SearchContainer>
          <SearchIcon icon={faSearch} />
          <SearchInput value={search.value} onChange={search.onChange} placeholder="Search..." />
        </SearchContainer>
        <Submit value="Search" type="submit" />
      </SearchWrapper>
      <UserInfoContainer>
        <NotificationIcon icon={faBell} size="2x" />
        <Avatar src="https://phinf.pstatic.net/contact/20200802_291/1596376539993fFl4q_PNG/avatar_profile.png?type=f130_130" />
      </UserInfoContainer>
    </Container>
  );
};

export default Header;
