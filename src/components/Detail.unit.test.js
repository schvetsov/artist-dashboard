import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Detail from './Detail';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Detail />', () => {
    it('renders', () => {
        const wrapper = shallow(<Detail />);
        expect(wrapper.exists()).toBe(true);
    });
});
