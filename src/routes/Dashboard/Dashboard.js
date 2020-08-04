import React from "react";
import styled from "styled-components";
import RadialChartCard from "../../components/Chart/RadialChartCard";
import Theme from "../../styles/Theme";
import CardContainer from "../../components/CardContainer";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Dashboard = props => {
  console.log(props);
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Dashboard;
