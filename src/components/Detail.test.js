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
        dateOfBirth: '1/1/1999',
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
    it('should render <Card> if selection isnt empty', () => {
        const wrapper = mount(<Detail {...props} />);
        expect(wrapper.find('Card').exists()).toBe(true);
    });
});
