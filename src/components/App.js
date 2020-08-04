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
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/projects/details" component={Details} />
                  <Route path="/projects/list" component={List} />
                  <Route path="/settings/settings" component={Settings} />
                  <Route path="/settings/profile" component={Profile} />
                  <Route path="/settings/infomation" component={Infomation} />
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
