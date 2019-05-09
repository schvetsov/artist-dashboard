import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import List from './List';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    data: [
        {
            firstName: 'Bob',
            lastName: 'Jones',
            artistID: 123,
            imageURL: 'http://www.url.com'
        }
    ],
    handleChange: jest.fn(() => {})
}

describe('<List />', () => {
    it('renders', () => {
        const wrapper = shallow(<List {...props} />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should NOT render <List> if selection is empty', () => {
        const wrapper = mount(<List data={[]} />);
        expect(wrapper.find('GridList').exists()).toBe(false);
    });
    it('should render <List> if selection isnt empty', () => {
        const wrapper = mount(<List {...props} />);
        expect(wrapper.find('GridList').exists()).toBe(true);
    });
    it('should call handleChange function on click', () => {
        const wrapper = mount(<List {...props} />);
        wrapper.find('GridListTile').at(1).simulate('click');
        expect(props.handleChange.mock.calls.length).toBe(1);
    })
});
