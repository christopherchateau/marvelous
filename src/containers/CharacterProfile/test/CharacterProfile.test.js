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
        getCharacter={jest.fn()}
        storedCharacters={[
          { name: "Wolverine", id: 2, comics: [] },
          { name: "Spider-Man", id: 3, comics: [] },
          { name: "Hulk", id: 4, comics: [] }
        ]}
        characterCount={3}
        currentIndex={1}
        showFavorites={false}
      />
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render loading screen if less than 3 characters loaded", () => {
    wrapper = shallow(
      <CharacterProfile
        dispatchStorageDetailsUpdate={jest.fn()}
        getCharacter={jest.fn()}
        storedCharacters={[
          { name: "Wolverine", id: 2, comics: [] },
          { name: "Spider-Man", id: 3, comics: [] }
        ]}
        characterCount={3}
        currentIndex={1}
        showFavorites={false}
      />
    );
    expect(wrapper.find(".loading-screen")).toHaveLength(1);
  });

  it("should render character profile when 3+ characters loaded", () => {
    wrapper = shallow(
      <CharacterProfile
        dispatchStorageDetailsUpdate={jest.fn()}
        getCharacter={jest.fn()}
        storedCharacters={[
          { name: "Wolverine", id: 2, comics: [] },
          { name: "Spider-Man", id: 3, comics: [] },
          { name: "Hulk", id: 4, comics: [] }
        ]}
        characterCount={3}
        currentIndex={1}
        showFavorites={false}
      />
    );
    expect(wrapper.find(".CharacterProfile")).toHaveLength(1);
    expect(wrapper.find(".loading-screen")).toHaveLength(0);
  });

  it("should display no comics found message when zero covers loaded", () => {
    wrapper = shallow(
      <CharacterProfile
        dispatchStorageDetailsUpdate={jest.fn()}
        getCharacter={jest.fn()}
        storedCharacters={[
          { name: "Wolverine", id: 2, comics: [] },
          { name: "Spider-Man", id: 3, comics: [] },
          { name: "Hulk", id: 4, comics: [] }
        ]}
        characterCount={3}
        currentIndex={1}
        showFavorites={false}
      />
    );
    expect(wrapper.find(".no-comics-msg")).toHaveLength(1);
  });

  it("should display covers when url's provided", () => {
    wrapper = shallow(
      <CharacterProfile
        dispatchStorageDetailsUpdate={jest.fn()}
        getCharacter={jest.fn()}
        storedCharacters={[
          { name: "Wolverine", id: 2, comics: [] },
          { name: "Spider-Man", id: 3, comics: ["www.comic-cover.url"] },
          { name: "Hulk", id: 4, comics: [] }
        ]}
        characterCount={3}
        currentIndex={1}
        showFavorites={false}
      />
    );
    expect(wrapper.find(".comic-cover")).toHaveLength(1);
    expect(wrapper.find(".no-comics-msg")).toHaveLength(0);
  });

  describe("handleCardClick", () => {
    it("should call handleAarowClick with 'BACK' when left arrow icon clicked", () => {
      const spy = spyOn(wrapper.instance(), "handleArrowClick");
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().forceUpdate();

      wrapper.find(".fa-chevron-circle-left").simulate("click", mockEvent);
      expect(spy).toHaveBeenCalledWith("BACK");
    });

    it("should call handleAarowClick with 'FORWARD' when right arrow icon clicked", () => {
      const spy = spyOn(wrapper.instance(), "handleArrowClick");
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().forceUpdate();

      wrapper.find(".fa-chevron-circle-right").simulate("click", mockEvent);
      expect(spy).toHaveBeenCalledWith("FORWARD");
    });

    it("should dispatch storage details when handleArrowClick is run", () => {
      //const getCharacter = jest.fn()
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().forceUpdate();

      wrapper.find(".fa-chevron-circle-right").simulate("click", mockEvent);
      expect(wrapper.props().getCharacter).toHaveBeenCalled();
    });

    it.skip("should call getCharacter if index is beginning or end of array", () => {
    });
  });

  describe("updateIndex", () => {
    it("should increment index by one if direction is foward", () => {
      const result = wrapper.instance().updateIndex("FORWARD", 1);
      expect(result).toEqual(2);
    });

    it("should decrement index by one if direction is back", () => {
      const result = wrapper.instance().updateIndex("BACK", 1);
      expect(result).toEqual(0);
    });
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
