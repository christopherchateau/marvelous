import React from "react";
import { shallow } from "enzyme";
import { showFavorites } from "../../../actions";
import { Footer, mapDispatchToProps, mapStateToProps } from "../index";

describe("Footer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Footer
        dispatchShowFavorites={jest.fn()}
        showFavorites={false}
        path={"/characters"}
      />
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("button text should read 'Favorites' show showFavorites is false", () => {
    const message = wrapper.find(".my-favs");
    expect(message.text()).toBe("Favorites");
  });

  it("button text should read 'Characters' show showFavorites is true", () => {
    wrapper = shallow(
      <Footer
        dispatchShowFavorites={jest.fn()}
        showFavorites={true}
        path={"/favorites"}
      />
    );
    const message = wrapper.find(".my-favs");
    expect(message.text()).toBe("Characters");
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch showFavorites when dispatchShowFavorites is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = showFavorites();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.dispatchShowFavorites();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe("mapStateToProps", () => {
    it("should toggle showFavorites boolean", () => {
      const mockState = { showFavorites: false };
      const expected = { showFavorites: false };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
