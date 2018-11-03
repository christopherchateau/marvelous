/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import { updateStorageDetails } from "../../../actions";
import { CharacterProfile, mapDispatchToProps } from "../index";

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
  it("should call dispatch storageDetailsUpdate when dispatchStorageDetailsUpdate is called", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = updateStorageDetails({
      currentIndex: 1,
      count: 3
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.dispatchStorageDetailsUpdate({
      currentIndex: 1,
      count: 3
    });
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
