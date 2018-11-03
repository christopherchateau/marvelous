import React from "react";
import { shallow, mount } from "enzyme";
import { storeCharacter, updateStorageDetails } from "../../../actions";
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
    it('should dispatch storeCharacter when dispatchStoreCharacter is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = storeCharacter({name: 'Spider-Man', id: 1});

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.dispatchStoreCharacter({name: 'Spider-Man', id: 1})
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

  })
});
