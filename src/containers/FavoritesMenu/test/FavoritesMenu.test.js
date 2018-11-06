import React from "react";
import { shallow } from "enzyme";
import { showFavorites, updateStorageDetails } from "../../../actions";
import { FavoritesMenu, mapDispatchToProps, mapStateToProps } from "../index";

describe("FavoritesMenu", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FavoritesMenu
        storedCharacters={[
          { name: "Wolverine", id: 1, favorited: false },
          { name: "Spider-Man", id: 2, favorited: true },
          { name: "Hulk", id: 3, favorited: false }
        ]}
        favoriteCharacters={[{ name: "Spider-Man", id: 2, favorited: true }]}
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

  it("should render favorites when present", () => {
    expect(wrapper.find(".fav-menu")).toHaveLength(1);
    expect(wrapper.find(".fav-list-item")).toHaveLength(1);
  });

  it("should render captain america pic when no favorites present", () => {
    wrapper = shallow(
      <FavoritesMenu
        storedCharacters={[]}
        favoriteCharacters={[]}
        dispatchShowFavorites={jest.fn()}
        dispatchStorageDetailsUpdate={jest.fn()}
      />
    );
    expect(wrapper.find(".capt-america")).toHaveLength(1);
    expect(wrapper.find(".fav-list-item")).toHaveLength(0);
  });

  describe("findCharacterIndex", () => {
    it("should return index of stored character", () => {
      const storedCharacters = [
        { name: "Wolverine", id: 1, favorited: false },
        { name: "Spider-Man", id: 2, favorited: true },
        { name: "Hulk", id: 3, favorited: true }
      ];
      const mockEvent = { target: { id: 3 } };
      const result = wrapper
        .instance()
        .findCharacterIndex(storedCharacters, mockEvent);
      expect(result).toEqual(2);
    });
  });

  describe("handleFavoriteClick", () => {
    it("should call handleFavoriteClick favorite is clicked", () => {
      const spy = spyOn(wrapper.instance(), "handleFavoriteClick");
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().forceUpdate();

      wrapper.find(".fav-list-item").simulate("click", mockEvent);
      expect(spy).toHaveBeenCalled();
    });
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
