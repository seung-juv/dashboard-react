import React from "react";
import styled from "styled-components";

const Submit = styled.input`
  height: 100%;
  border: 0;
  padding: 10px 15px;
  background-color: ${props => props.theme.purpleColor};
  cursor: pointer;
  color: #fff;
`;

export default ({ onClick, value }) => <Submit value={value} type="submit" onClick={onClick} />;
