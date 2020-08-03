import React from "react";
import { RadialChart } from "react-vis";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.whiteColor};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({
  data = [],
  width = 300,
  innerRadius,
  radius,
  color,
  height = 300,
  animation = false
}) => {
  return (
    <Container>
      <RadialChart
        data={data}
        width={width}
        innerRadius={innerRadius}
        height={height}
        color={color}
        radius={radius}
        animation={animation}
      />
    </Container>
  );
};
