import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Detail from './Detail';
import Adapter from 'enzyme-adapter-react-16';
import Card from '@material-ui/core/Card';

Enzyme.configure({ adapter: new Adapter() });

describe('<Detail />', () => {
    it('renders', () => {
        const wrapper = shallow(<Detail />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should not render <Card> if selection is empty', () => {
        const wrapper = shallow(<Detail />);
        expect(wrapper.find(Card)).toHaveLength(0);
    });
    it('should render <Card> if selection isnt empty', () => {
        const wrapper = shallow(<Detail selection={{firstName:'John'}} />);
        // wrapper.setProps({
        //     selection : {
        //         firstName: 'John'
        //     }
        // })
        expect(wrapper.find(Card)).toHaveLength(1);
    });
});
