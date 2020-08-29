import React from "react";
import { Router } from "@reach/router";
import Header from "./elements/Header";
import Home from "./Home";
import Movie from './Movie'
import NotFound from './NotFound'

import { StyleBase } from "./styles/StyleBase";
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <StyleBase>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </StyleBase>
);

export default App;
