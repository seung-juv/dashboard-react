import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0 15px 25px;
`;

const RouteContainer = ({ component, title }) => {
  return (
    <>
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <Title>
        {title}
      </Title>
      {component}
    </>
  );
}

export default RouteContainer;