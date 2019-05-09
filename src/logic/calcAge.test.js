import { calcAge } from './calcAge';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const passedProps = {
    selection: {
        dateOfBirth: "1 January 1900"
    }
}

describe('calcAge', () => {
    it('should return correct age', () => {
        expect(calcAge(passedProps)).toEqual('119')
    })
})
