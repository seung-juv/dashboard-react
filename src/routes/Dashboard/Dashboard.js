import React from "react";
import styled from "styled-components";
import RadialChartCard from "../../components/Chart/RadialChartCard";

const Wrapper = styled.div`display: flex;`;
const Dashboard = () => {
  return (
    <Wrapper>
      <RadialChartCard
        data={[{ angle: 1 }, { angle: 1 }, { angle: 1 }, { angle: 4 }]}
        animation={true}
      />
      <RadialChartCard
        data={[{ angle: 1 }, { angle: 1 }, { angle: 1 }, { angle: 4 }]}
        animation={true}
      />
    </Wrapper>
  );
};

export default Dashboard;
