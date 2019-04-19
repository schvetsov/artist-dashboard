import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GetList from "../containers/GetList";
import { connect } from 'react-redux';
import reducer from '../reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import List from '../components/List';
import BigCard from '../components/BigCard';

const store = createStore(reducer);

Enzyme.configure({ adapter: new Adapter() });
jest.mock("../logic/mocks/api.mock");

describe("Search container", () => {
  test("renders", () => {
    const wrapper = shallow(<GetList />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render Search component", () => {
    const wrapper = mount(<Provider store={store}><GetList /></Provider>);
    expect(wrapper.children(List).length).toEqual(1);
  });

  test("should update articles state", () => {
    const wrapper = mount(<GetList />);
    expect(wrapper.state().articles).toEqual([]);
    const { performSearch } = wrapper.find(Search).props();
    return performSearch().then(() => {
      expect(wrapper.state().articles).toHaveLength(10);
    });
  });
});