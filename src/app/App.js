import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
// import CharacterDetails from "../pages/CharacterDetails";

import "../styles/Index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/character/:ID" component={CharacterDetails} /> */}
          <Redirect to="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
