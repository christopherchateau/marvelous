import React from "react";
import { shallow } from "enzyme";
import { storeCharacter } from "../../../actions";
import { App, mapDispatchToProps, mapStateToProps } from "../index";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App
        dispatchStoreCharacter={jest.fn()}
        storedCharacters={[]}
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

  describe("mapDispatchToProps", () => {
    it("should dispatch storeCharacter when dispatchStoreCharacter is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = storeCharacter({ name: "Spider-Man", id: 1 });

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.dispatchStoreCharacter({ name: "Spider-Man", id: 1 });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe("mapStateToProps", () => {
    it("should return an array of characters", () => {
      const mockState = { characters: [{ name: "Spider-Man", id: 1 }] };
      const expected = [{ name: "Spider-Man", id: 1 }];
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.storedCharacters).toEqual(expected);
    });

    it("should return count of stored characters", () => {
      const mockState = { showFavorites: false };
      const expected = false;
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.showFavorites).toEqual(expected);
    });
  });

  describe("generateRandomId", () => {
    it("should generate a random ID between 1010801 and 1011428", () => {
      const randomId = wrapper.instance().generateRandomId();
      expect(randomId).toBeGreaterThanOrEqual(1010801);
      expect(randomId).toBeLessThanOrEqual(1011428);
    });
  });

  describe("stopDuplicates", () => {
    it("should stop duplicate characters", () => {
      wrapper = shallow(
        <App
          dispatchStoreCharacter={jest.fn()}
          storedCharacters={[{ name: "Spider-Man", id: 1 }]}
          showFavorites={false}
        />
      );
      expect(wrapper.instance().stopDuplicates(1)).toBeTruthy;
      expect(wrapper.instance().stopDuplicates(2)).toBeFalsy;
    });
  });
});
