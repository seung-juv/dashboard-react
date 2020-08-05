import React from "react";
import styled from "styled-components";

const Container = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Avatar = ({ size, url = 35 }) => {
  return <Container src={url} size={size} />;
};

export default Avatar;
