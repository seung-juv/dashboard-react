import React from "react";
import styled from "styled-components";
import RadialChartCard from "../../components/Card/Chart/RadialChartCard";
import Theme from "../../styles/Theme";
import CardContainer from "../../components/CardContainer";
import ResultCard from "../../components/Card/ResultCard";

const Wrapper = styled.section``;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0 15px 25px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const ResultContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 4;
`;

const Dashboard = props => {
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <Container>
        <ResultContainer>
          <CardContainer
            title="Example"
            component={
              <ResultCard result="36,522" percent={5.27} meta="Since last month" status="success" />
            }
          />
          <CardContainer
            title="Example"
            component={
              <ResultCard result="36,522" percent={1.27} meta="Since last month" status="danger" />
            }
          />
          <CardContainer
            title="Example"
            component={
              <ResultCard result="36,522" percent={2} meta="Since last month" status="normal" />
            }
          />
          <CardContainer
            title="Example"
            component={
              <ResultCard result="36,522" percent={5.27} meta="Since last month" status="normal" />
            }
          />
        </ResultContainer>
        <CardContainer
          title="Example"
          component={
            <RadialChartCard
              data={[
                {
                  angle: 1,
                  label: "example 1",
                  color: Theme.redColor,
                  style: {
                    fill: Theme.redColor,
                    storke: Theme.redColor
                  }
                },
                {
                  angle: 1,
                  label: "example 2",
                  color: Theme.purpleColor,
                  style: {
                    fill: Theme.purpleColor,
                    storke: Theme.purpleColor
                  }
                },
                {
                  angle: 1,
                  label: "example 3",
                  color: Theme.yellowColor,
                  style: {
                    fill: Theme.yellowColor,
                    storke: Theme.yellowColor
                  }
                },
                {
                  angle: 4,
                  label: "example 4",
                  color: Theme.greenColor,
                  style: {
                    fill: Theme.greenColor,
                    storke: Theme.greenColor
                  }
                }
              ]}
              style={{ stroke: 0 }}
              labelsStyle={{ color: Theme.whiteColor }}
              animation={true}
              showLabels={true}
              innerRadius={75}
              width={300}
              height={300}
              radius={128}
            />
          }
        />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
