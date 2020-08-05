import React from "react";
import styled from "styled-components";

import SettingsInput from "../../components/Settings/SettingsInput";
import useInput from "../../hooks/useInput";
import { connect } from "react-redux";
import Submit from "../../components/Submit";
import Avatar from "../../components/Avatar";

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  margin: 0 15px;
`;

const ESettingsInput = styled(SettingsInput)`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
const UserProfileContainer = styled.div`flex: 2;`;
const UserProfile = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  overflow: hidden;
`;

const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 15px;
`;

const Profile = ({ dashboard: { user: me } }) => {
  const nameInput = useInput(me.name);
  const emailInput = useInput(me.email);
  const bioInput = useInput(me.bio);

  return (
    <Wrapper>
      <Container>
        <ESettingsInput title="Name" value={nameInput.value} onChange={nameInput.onChange} />
        <ESettingsInput title="E-mail" value={emailInput.value} onChange={emailInput.onChange} />
        <ESettingsInput title="Bio" value={bioInput.value} onChange={bioInput.onChange} />
        <Submit onClick={() => null} value="Update Profile" />
      </Container>
      <UserProfileContainer>
        <Title>Profile picture</Title>
        <UserProfile>
          <Avatar url={me.avatar} size={200} />
        </UserProfile>
      </UserProfileContainer>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return { dashboard: state };
};

export default connect(mapStateToProps)(Profile);
