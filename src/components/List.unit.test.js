import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import List from './List';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<List />', () => {
    it('renders', () => {
        const wrapper = shallow(<List />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should not render <List> if selection is empty', () => {
        const wrapper = shallow(<List />);
        expect(wrapper.find("[data-test='this-list']")).toHaveLength(0);
    });
    it('should render <List> if selection isnt empty', () => {
        const wrapper = shallow(<List />);
        wrapper.setProps([{
            data : {
                entry: 'Test'
            }
        }])
        expect(wrapper.find("[data-test='this-list']"));
    });
});
