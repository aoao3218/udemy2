import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Landing />} />
          <Route exact path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
