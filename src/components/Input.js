import React from "react";
import styled from "styled-components";

const Container = styled.input`
  background-color: transparent;
  flex: 1;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
  padding: 15px;
  font-weight: 300;
  &::placeholder {
    color: ${props => props.theme.darkGreyColor};
  }
`;

const Input = ({ value, className, onChange, type, placeholder }) => {
  return (
    <Container
      value={value}
      classsName={className}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
