import React from "react";
import { shallow } from "enzyme";
import { showFavorites, updateStorageDetails } from "../../../actions";
import { FavoritesMenu, mapDispatchToProps, mapStateToProps } from "../index";

describe("FavoritesMenu", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FavoritesMenu
        storedCharacters={[]}
        favoriteCharacters={[]}
        dispatchShowFavorites={jest.fn()}
        dispatchStorageDetailsUpdate={jest.fn()}
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
    it("should dispatch showFavorites when dispatchShowFavorites is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = showFavorites(true);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.dispatchShowFavorites(true);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("should dispatch updateStorageDetails when dispatchShowFavorites is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateStorageDetails({
        currentIdex: 1,
        count: 3
      });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.dispatchStorageDetailsUpdate({ currentIdex: 1, count: 3 });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe("mapStateToProps", () => {
    it("should return an array of characters", () => {
      const mockState = {
        characters: [{ name: "Spider-Man", id: 1, favorited: false }]
      };
      const expected = [{ name: "Spider-Man", id: 1, favorited: false }];
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.storedCharacters).toEqual(expected);
    });

    it("should return array of favorite characters", () => {
      const mockState = {
        characters: [
          { name: "Spider-Man", id: 1, favorited: false },
          { name: "Wolverine", id: 2, favorited: true }
        ]
      };
      const expected = [{ name: "Wolverine", id: 2, favorited: true }];
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.favoriteCharacters).toEqual(expected);
    });
  });
});
