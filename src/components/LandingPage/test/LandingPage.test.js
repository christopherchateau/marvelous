import React from "react";
import { shallow } from "enzyme";
import LandingPage from "../index";

describe("LandingPage", () => {
  const wrapper = shallow(<LandingPage />);
  it("should exist", () => {
    expect(wrapper).toBeDefined;
  });

  it("should render like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});