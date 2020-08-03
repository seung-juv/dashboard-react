import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import GlobalNavigationBar from "./GlobalNavigationBar";
import Details from "../routes/Projects/Details";
import List from "../routes/Projects/List";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
`;

const Container = styled.div`flex: 1;`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <GlobalNavigationBar />
          <Container>
            <Route path="/" exact component={Home} />
            <Route path="/projects/details" component={Details} />
            <Route path="/projects/list" component={List} />
          </Container>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
