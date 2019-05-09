import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import ConnectedGetList, { GetList } from './GetList';
import List from '../components/List';
import Detail from '../components/Detail';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fakeServer } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../__mocks__/handleChange')

// const data = [
//     {
//         firstName: 'Bob',
//         lastName: 'Jones',
//         artistID: 123,
//         imageURL: 'http://www.url.com'
//     }
// ]

const selectedArtist = {
    selection: {
        firstName: 'Bob',
        lastName: 'Jones',
        art: 'Director',
        imageURL: 'http://www.url.com',
        dateOfBirth: '1/1/1999',
        placeOfBirth: 'Jacksonville'
    }
}

const props = {
    data: [
        {}
    ],
    selection: {},
    dispatch: jest.fn(() => {})
}

describe('<GetList> no redux', () => {
    const wrapper = shallow(<GetList />);
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('renders List component', () => {
        expect(wrapper.find(List).exists()).toBe(true);
    });
    it('renders Detail component', () => {
        expect(wrapper.find(Detail).exists()).toBe(true);
    });
});

describe('<GetList> with redux', () => {

    const initialState = {
        data: [],
        selection: ''
    };
    const mockStore = configureStore()
    let store, container

    beforeEach(() => {
        store = mockStore(initialState)
        container = mount(<Provider store={store}><ConnectedGetList /></Provider>)
    })
    it('render connected component', () => {
        expect(container.exists()).toBe(true);
    })
})

describe('calls fetchList when component mounts', () => {
    it('calls fetchList', () => {
        const spy = jest.spyOn(GetList.prototype, 'fetchList');
        const wrapper = mount(<GetList {...props} />);
        expect(spy).toHaveBeenCalled();
    })
})

describe('api call', () => {
    it('works with promises', () => {
        const wrapper = mount(<GetList {...props} />);
        expect.assertions(1);
        return wrapper.instance().handleChange().then(data => expect(data).toEqual(selectedArtist))
    })
})

// describe('GetList', () => {
//     let server;
//     beforeEach(() => {
//         server = fakeServer.create();
//         server.respondWith(
//             'GET',
//             'https://fb-assessment.glitch.me/artists',
//             [
//                 200,
//                 { 'Content-Type': 'application/json' },
//                 JSON.stringify(data)
//             ]
//         );
//     });
//     describe('renders api', () => {
//         let wrapper;
//         beforeEach(done => {
//             wrapper = mount(<GetList {...props} />);
//             server.respond();
//             setTimeout(done);
//         });
//         it('renders list', () => {
//             console.log(wrapper.debug());
//         });
//     });
// });
