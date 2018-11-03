/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
//import { loadMovies, setErrorMessage } from "../../../actions";
import { CharacterProfile } from "../index";

describe("CharacterProfile", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CharacterProfile
        dispatchStorageDetailsUpdate={jest.fn()}
        storedCharacters={[]}
        characterCount={3}
        currentIndex={1}
      />
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapDispatchToProps", () => {
  it.skip("should call dispatch with load movies action when handleFetch is called", () => {
    const wrapper = shallow(<App handleFetch={jest.fn()} />);

    const mockDispatch = jest.fn();
    const actionToDispatch = loadMovies([{ title: "Raising Arizona" }]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleFetch([{ title: "Raising Arizona" }]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it.skip("should call dispatch with setErrorMessage when handleErrorMessage is called", () => {
    const wrapper = shallow(<App handleErrorMessage={jest.fn()} />);

    const mockDispatch = jest.fn();
    const actionToDispatch = setErrorMessage({ message: "Invalid login" });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleErrorMessage({ message: "Invalid login" });
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
