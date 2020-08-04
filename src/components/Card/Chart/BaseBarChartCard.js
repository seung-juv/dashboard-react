import React, { useRef, useEffect, useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export default ({ data, color, barWidth = 0.5 }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setContainerWidth(ref.current ? ref.current.offsetWidth : 0);
  }, []);
  return (
    <Container ref={ref}>
      <XYPlot xType="ordinal" width={containerWidth} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} color={color} barWidth={barWidth} />
      </XYPlot>
    </Container>
  );
};
