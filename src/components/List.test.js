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
    describe('selection isnt empty', () => {
        const wrapper = mount(<List {...props} />);
        it('should render <List>', () => {
            expect(wrapper.find('GridList').exists()).toBe(true);
        })
        it('should render 2 list items', () => {
            expect(wrapper.find('GridListTileBar').length).toEqual(2);
        })
        it('should render <List>', () => {
            expect(wrapper.find('img').at(0).prop("src")).toEqual("http://www.url.com")
        })
        it('should have correct title', () => {
            expect(wrapper.find('GridListTileBar').at(0).prop('title')).toEqual("Bob Jones")
        })
        it('should have correct subheader', () => {
            expect(wrapper.find('GridListTileBar').at(0).prop('subtitle')).toEqual("Director")
        })
        it('should call handleChange function when click list item', () => {
            wrapper.find('GridListTile').at(1).simulate('click');
            expect(props.handleChange.mock.calls.length).toBe(1);
        })
    });
});
