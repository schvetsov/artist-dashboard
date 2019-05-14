import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import ConnectedGetList, { GetList } from './GetList';
import List from '../components/List';
import Detail from '../components/Detail';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
// import { importList, handleChange } from '../api';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    data: [
        {
            firstName: 'Bob',
            lastName: 'Jones',
            artistID: 123,
            imageURL: 'http://www.url.com',
            art: 'Director'
        },
        {
            firstName: 'John',
            lastName: 'Jones',
            artistID: 124,
            imageURL: 'http://www.url1.com',
            art: 'Director'
        }
    ],
    selection: {
        firstName: 'Bob',
        lastName: 'Jones',
        art: 'Director',
        imageURL: 'http://www.url.com',
        dateOfBirth: '1 January 1999',
        placeOfBirth: 'Jacksonville'
    },
    handleChange: jest.fn(() => {}),
    importList: jest.fn(() => {})
}

describe('<GetList> no redux', () => {

    const spy = jest.spyOn(GetList.prototype, 'componentDidMount');
    const wrapper = shallow(<GetList />);

    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('renders List component', () => {
        expect(wrapper.find(List).exists()).toBe(true);
    });
    it('renders Detail component', () => {
        expect(wrapper.find(Detail).exists()).toBe(true);
    });
    it('should call componentDidMount when mounted', () => {
        expect(GetList.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    })
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
        expect(container.exists()).toBe(true);
    })
})
