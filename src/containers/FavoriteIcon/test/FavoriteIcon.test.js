import React from "react";
import { shallow } from "enzyme";
import { toggleFavorite } from "../../../actions";
import { FavoriteIcon, mapDispatchToProps } from "../index";

describe("FavoriteIcon", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FavoriteIcon dispatchToggleFavorite={jest.fn()} />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch toggleFavorite when dispatchToggleFavorite is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleFavorite(111);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.dispatchToggleFavorite(111);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
