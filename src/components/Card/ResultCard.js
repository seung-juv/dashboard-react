import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown, faSort } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Result = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 35px;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Percent = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-right: 15px;
  color: ${props =>
    props.status === "success"
      ? props.theme.greenColor
      : props.status === "danger" ? props.theme.redColor : props.theme.darkGreyColor};
`;

const Meta = styled.p`
  color: ${props => props.theme.lightGreyColor};
  font-weight: 400;
`;

const ResultCard = ({ result, percent, meta, status = "normal" }) => {
  return (
    <Container>
      <Result>
        {result}
      </Result>
      <MetaContainer>
        <Percent status={status}>
          <FontAwesomeIcon
            icon={status === "success" ? faSortUp : status === "danger" ? faSortDown : faSort}
            style={{ marginRight: 5 }}
          />
          {percent}%
        </Percent>
        <Meta>
          {meta}
        </Meta>
      </MetaContainer>
    </Container>
  );
};

ResultCard.propTypes = {
  result: propTypes.string.isRequired,
  percent: propTypes.number.isRequired,
  meta: propTypes.string,
  status: propTypes.oneOf(["normal", "success", "danger"])
};

export default ResultCard;
