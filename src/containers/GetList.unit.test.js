import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import ConnectedGetList, { GetList } from './GetList';
import List from '../components/List';
import Detail from '../components/Detail';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fetchList, handleChange } from '../logic/api';

Enzyme.configure({ adapter: new Adapter() });

// jest.mock('../logic/mocks/api.mock');

describe('Test only component', () => {
    it('renders', () => {
        const wrapper = shallow(<GetList />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should render List and Detail components', () => {
        const wrapper = shallow(<GetList />);
        expect(wrapper.find(fetchList));
        expect(wrapper.find(handleChange));
        expect(wrapper.find(List)).toHaveLength(1);
        expect(wrapper.children(Detail).length).toEqual(1);
    });
});

describe('Test component with redux store', () => {
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
        expect(container.length).toEqual(1)
    })
    // it('componentDidMount was called', () => {
    //     const spy = jest.spyOn(ConnectedGetList.prototype, 'fetchList');
    //     container.instance().fetchList();
    //     expect(spy).toHaveBeenCalled();
    // })
})
