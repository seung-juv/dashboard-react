import React from "react";
import styled from "styled-components";
import RadialChartCard from "../../components/Card/Chart/RadialChartCard";
import Theme from "../../styles/Theme";
import CardContainer from "../../components/CardContainer";
import ResultCard from "../../components/Card/ResultCard";
import BaseBarChartCard from "../../components/Card/Chart/BaseBarChartCard";

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
  flex: 1;
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
            basis="45%"
          />
          <CardContainer
            title="Example"
            component={
              <ResultCard result="36,522" percent={1.27} meta="Since last month" status="danger" />
            }
            basis="45%"
          />
          <CardContainer
            title="Example"
            component={
              <ResultCard result="36,522" percent={2} meta="Since last month" status="normal" />
            }
            basis="45%"
          />
          <CardContainer
            title="Example"
            component={
              <ResultCard result="36,522" percent={5.27} meta="Since last month" status="normal" />
            }
            basis="45%"
          />
        </ResultContainer>
        <CardContainer
          title="Example"
          component={
            <BaseBarChartCard
              data={[
                { x: "A", y: -24 },
                { x: "B", y: -30 },
                { x: "C", y: -2 },
                { x: "D", y: 1 },
                { x: "E", y: 2 },
                { x: "F", y: 4 },
                { x: "G", y: 6 },
                { x: "H", y: 7 },
                { x: "I", y: 8 },
                { x: "J", y: 11 },
                { x: "K", y: 12 },
                { x: "L", y: 20 },
                { x: "M", y: 120 },
                { x: "N", y: 220 },
                { x: "O", y: 280 },
                { x: "P", y: 370 },
                { x: "Q", y: 470 },
                { x: "R", y: 520 },
                { x: "S", y: 650 }
              ]}
              barWidth={0.25}
            />
          }
        />
      </Container>
      <Container>
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
              width={250}
              height={250}
              radius={115}
            />
          }
        />
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
              width={250}
              height={250}
              radius={115}
            />
          }
        />
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
              width={250}
              height={250}
              radius={115}
            />
          }
        />
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
              width={250}
              height={250}
              radius={115}
            />
          }
        />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
