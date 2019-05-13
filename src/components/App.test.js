import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import GetList from '../containers/GetList';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('renders correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('has GetList as child', () => {
        expect(wrapper.find(GetList).exists()).toBe(true);
    })
});
