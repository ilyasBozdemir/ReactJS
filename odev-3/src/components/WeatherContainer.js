import "../App.css";
import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Header from "./Header";
import DaysCard from "./DaysCard";

export class WeatherContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Dropdown />
        <div>
          <div>
            <DaysCard />
          </div>
        </div>
      </>
    );
  }
}

export default WeatherContainer;
