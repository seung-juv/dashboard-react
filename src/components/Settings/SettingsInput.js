import React from "react";
import styled from "styled-components";
import Input from "../Input";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
`;

const Title = styled.h5`font-weight: 600;`;

const SettingsInput = ({ title, className, value, onChange, placeholder = "" }) => {
  return (
    <Container className={className}>
      <Title>
        {title}
      </Title>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default SettingsInput;
