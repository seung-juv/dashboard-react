import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../stores/store";
import useInput from "../hooks/useInput";
import Submit from "../components/Submit";

const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.mainColor};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 25px;
  background-color: ${props => props.theme.whiteColor};
`;

const Title = styled.h2`
  display: block;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

const IdContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 35px;
`;

const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
  width: 260px;
  padding: 15px;
  font-weight: 300;
  &::placeholder {
    color: ${props => props.theme.darkGreyColor};
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Auth = ({ onLogin }) => {
  const userId = useInput("");
  const userPassword = useInput("");
  const onClick = () => {
    // Login Auth
    onLogin();
  };
  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <IdContainer>
          <Input value={userId.value} onChange={userId.onChange} type="text" placeholder="id" />
          <Input
            value={userPassword.value}
            onChange={userPassword.onChange}
            type="password"
            placeholder="password"
          />
        </IdContainer>
        <Submit value="Login" onClick={onClick} />
      </Container>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: text => dispatch(login())
  };
};

export default connect(null, mapDispatchToProps)(Auth);
