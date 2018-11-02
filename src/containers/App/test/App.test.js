import React from "react";
import { shallow, mount } from "enzyme";
import { storeCharacter, updateStorageDetails } from "../../../actions";
import { App, mapStateToProps, mapDispatchToProps } from "../index";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchShapshot()
  });
});
