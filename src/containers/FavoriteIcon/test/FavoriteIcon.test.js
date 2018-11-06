import React from "react";
import { shallow } from "enzyme";
import { toggleFavorite } from "../../../actions";
import { FavoriteIcon, mapDispatchToProps } from "../index";

describe("FavoriteIcon", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FavoriteIcon dispatchToggleFavorite={jest.fn()} id={1} />
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleFavoriteClick", () => {
    it("should call handleFavoriteClick favorite icon is clicked", () => {
      const spy = spyOn(wrapper.instance(), "handleFavoriteClick");
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().forceUpdate();

      wrapper.find(".fa-star").simulate("click", mockEvent);
      expect(spy).toHaveBeenCalled();
    });
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
