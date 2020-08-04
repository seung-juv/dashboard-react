import React from "react";
import { RadialChart } from "react-vis";
import styled from "styled-components";

const Container = styled.div`
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
  showLabels,
  style,
  labelsStyle,
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
        showLabels={showLabels}
        radius={radius}
        style={style}
        labelsStyle={labelsStyle}
        animation={animation}
      />
    </Container>
  );
};
