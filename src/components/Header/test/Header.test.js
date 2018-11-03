import React from "react";
import { shallow } from "enzyme";
import Header from "../index";

describe("Header", () => {
  const wrapper = shallow(<Header />);
  it("should exist", () => {
    expect(wrapper).toBeDefined;
  });

  it("should render like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
