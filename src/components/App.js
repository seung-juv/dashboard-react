import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalNavigationBar from "./GlobalNavigationBar";
import Auth from "../routes/Auth";
import Details from "../routes/Projects/Details";
import List from "../routes/Projects/List";
import Dashboard from "../routes/Dashboard/Dashboard";
import Settings from "../routes/Settings/Settings";
import Infomation from "../routes/Settings/Infomation";
import Header from "./Header";
import Profile from "../routes/Settings/Profile";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import RouteContainer from "./RouteContainer";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
`;

const Container = styled.div`flex: 1;`;

const ContentsContainer = styled.div`
  flex: 1;
  padding: 0 15px 35px;
`;

const App = ({ dashboard: { isLogin } }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <title>Dashboard</title>
        <link rel="canonical" href="../styles/fonts.css" />
      </Helmet>
      <GlobalStyles />
      <Router>
        {isLogin
          ? <Route path="/" component={Auth} />
          : <Wrapper>
              <GlobalNavigationBar />
              <Container>
                <Header />
                <ContentsContainer>
                  <Route
                    path="/"
                    exact
                    render={() => <RouteContainer title="Dashboard" component={<Dashboard />} />}
                  />
                  <Route
                    path="/projects/details"
                    render={() => <RouteContainer title="Details" component={<Details />} />}
                  />
                  <Route
                    path="/projects/list"
                    render={() => <RouteContainer title="List" component={<List />} />}
                  />
                  <Route
                    path="/settings/settings"
                    render={() => <RouteContainer title="Settings" component={<Settings />} />}
                  />
                  <Route
                    path="/settings/profile"
                    render={() => <RouteContainer title="Profile" component={<Profile />} />}
                  />
                  <Route
                    path="/settings/infomation"
                    render={() => <RouteContainer title="Infomation" component={<Infomation />} />}
                  />
                </ContentsContainer>
              </Container>
            </Wrapper>}
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return { dashboard: state };
};

export default connect(mapStateToProps)(App);
