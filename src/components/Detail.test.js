import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Detail from './Detail';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    selection: {
        firstName: 'Bob',
        lastName: 'Jones',
        art: 'Director',
        imageURL: 'http://www.url.com',
        dateOfBirth: '1 January 1999',
        placeOfBirth: 'Jacksonville'
    }
}

describe('<Detail />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Detail />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should not render <Card> if selection is empty', () => {
        const wrapper = mount(<Detail selection={{}} />);
        expect(wrapper.find('Card').exists()).toBe(false);
    });
    describe('if selection isnt empty', () => {
        const wrapper = mount(<Detail {...props} />);
        it('should render <Card>', () => {
            expect(wrapper.find('Card').exists()).toBe(true);
        })
        it('should have correct title', () => {
            expect(wrapper.find('CardHeader').at(0).prop('title')).toEqual("Bob Jones")
        })
        it('should have correct subheader', () => {
            expect(wrapper.find('CardHeader').at(0).prop('subheader')).toEqual("Director")
        })
        it('should render correct image', () => {
            expect(wrapper.find('CardMedia').at(0).prop('image')).toEqual("http://www.url.com")
        })
        it('should state correct birthdate and calculates age', () => {
            console.log(wrapper.find('Typography').at(3).debug())
            expect(wrapper.find('Typography').at(2).text()).toEqual("1 January 1999 (Age: 20)")
        })
        it('should say correct birthplace', () => {
            expect(wrapper.find('Typography').at(3).text()).toEqual("Born in Jacksonville")
        })
    });
});
