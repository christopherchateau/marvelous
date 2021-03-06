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
        localStoreCharacter={jest.fn()}
        location={{ pathname: "/" }}
      />
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("stopDuplicates", () => {
    it("should stop duplicate characters", () => {
      wrapper = shallow(
        <App
          dispatchStoreCharacter={jest.fn()}
          storedCharacters={[{ name: "Spider-Man", id: 1 }]}
          showFavorites={false}
          location={{ pathname: "/" }}
        />
      );
      expect(wrapper.instance().stopDuplicates(1)).toBeTruthy;
      expect(wrapper.instance().stopDuplicates(2)).toBeFalsy;
    });
  });

  describe("validateCharacter", () => {
    it("should filter cards marked show:false", () => {
      const mockCharacter = { name: "Spider-Man", show: false };
      expect(wrapper.instance().validateCharacter(mockCharacter)).toBe(false);
    });

    it("should filter error responses", () => {
      const mockCharacter = "failed to load";
      expect(wrapper.instance().validateCharacter(mockCharacter)).toBe(false);
    });

    it("should mark characters without images as show:false", () => {
      const mockCharacter = {
        name: "Spider-Man",
        show: true,
        pic: "www.image_not_available.com"
      };
      expect(wrapper.instance().validateCharacter(mockCharacter)).toBe(false);
      expect(mockCharacter.show).toBe(false);
    });

    it("should return true if character is validated", () => {
      const mockCharacter = {
        name: "Spider-Man",
        show: true,
        pic: "www.image_totally_available.com"
      };
      expect(wrapper.instance().validateCharacter(mockCharacter)).toBe(true);
    });
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
});
