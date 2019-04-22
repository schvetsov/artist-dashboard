import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { GetList } from './GetList';
import List from '../components/List';
import Detail from '../components/Detail';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../logic/mocks/api.mock');

describe('<GetList />', () => {
    it('renders', () => {
        const wrapper = shallow(<GetList />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should render List and Detail components', () => {
        const wrapper = mount(<GetList data={[]} selection={''} />);
        expect(wrapper.children(List).length).toEqual(1);
        expect(wrapper.children(Detail).length).toEqual(1);
    });
});
