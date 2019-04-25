import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import ConnectedGetList, { GetList } from './GetList';
import List from '../components/List';
import Detail from '../components/Detail';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fetchList, handleChange } from '../logic/api';
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

// jest.mock('axios');
jest.mock('fetchList', () => jest.fn())

describe('<GetList> no redux', () => {
    it('renders', () => {
        const wrapper = shallow(<GetList />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(fetchList));
        expect(wrapper.find(handleChange));
        expect(wrapper.find(List)).toHaveLength(1);
        expect(wrapper.find(Detail)).toHaveLength(1);
    });
});

describe('<GetList> with redux', () => {
    const initialState = {
        data: [],
        selection: ''
    };
    const mockStore = configureStore()
    let store, container

    beforeEach(() => {
        store = mockStore(initialState)
        container = mount(<Provider store={store}><ConnectedGetList /></Provider>)
    })
    it('render connected component', () => {
        expect(container).toHaveLength(1);
    })
    it('calls axios once', () => {
        expect(fetchList.mock.calls.length).toBe(1);
        // const getSpy = jest.spyOn(axios, 'get');
        // expect(getSpy).toBeCalled();
    })
    // it('componentDidMount was called', () => {
    //     const spy = jest.spyOn(ConnectedGetList.prototype, 'fetchList');
    //     container.instance().fetchList();
    //     expect(spy).toHaveBeenCalled();
    // })
})
