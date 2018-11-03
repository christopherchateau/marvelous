import React from "react";
import { shallow } from "enzyme";
import { updateStorageDetails } from "../../../actions";
import {
  CharacterProfile,
  mapStateToProps,
  mapDispatchToProps
} from "../index";

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

  describe("mapStateToProps", () => {
    let mockState;

    beforeEach(() => {
      mockState = {
        characters: [{ name: "Wolverine", id: 2 }],
        storageDetails: { currentIndex: 1, count: 3 }
      };
    });

    it("should return an array of characters", () => {
      const expected = [{ name: "Wolverine", id: 2 }];
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.storedCharacters).toEqual(expected);
    });

    it("should return count of stored characters", () => {
      const expected = 3;
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.characterCount).toEqual(expected);
    });

    it("should return current character index", () => {
      const expected = 1;
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.currentIndex).toEqual(expected);
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
});
