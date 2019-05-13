import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import ConnectedGetList, { GetList } from './GetList';
import List from '../components/List';
import Detail from '../components/Detail';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios")

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

const dispatch = jest.fn(() => {})

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

    describe('called api get in componentDidMount', () => {

        describe("good response", () => {

            it('called api', () => {
                expect(axios.get).toHaveBeenCalledTimes(1);
            })
            it('called api with correct url', () => {
                expect(axios.get).toHaveBeenCalledWith('https://fb-assessment.glitch.me/artists')
            })
        })
        describe("bad response", () => {
    
            it('called api', () => {
                expect(axios.get).toHaveBeenCalledTimes(1);
            })
            it('called api with correct url', () => {
                expect(axios.get).toHaveBeenCalledWith('https://fb-assessment.glitch.me/artists')
            })
        })
    })
    describe('call api in handleChange', () => {

        describe("good response", () => {

            it('called api', () => {
                axios.get.mockImplementationOnce(() => Promise.resolve(selectedArtist));
                wrapper.instance().handleChange('123', dispatch);
                expect(axios.get).toHaveBeenCalledTimes(2);
            })
            it('called api with correct url', () => {
                axios.get.mockImplementationOnce(() => Promise.resolve(selectedArtist));
                wrapper.instance().handleChange('123', dispatch);
                expect(axios.get).toHaveBeenCalledWith('https://fb-assessment.glitch.me/artists/123')
            })
            it('received correct response', () => {
                axios.get.mockImplementationOnce(() => Promise.resolve(selectedArtist));
                wrapper.instance().handleChange('123', dispatch).then(res => {
                    expect(res).toEqual(selectedArtist);
                });
            })
        })
        describe("bad response", () => {
    
            it('called api', () => {
                axios.get.mockImplementationOnce(() => Promise.reject('error'));
                wrapper.instance().handleChange('123', dispatch);
                expect(axios.get).toHaveBeenCalledTimes(5);
            })
            it('called api with correct url', () => {
                axios.get.mockImplementationOnce(() => Promise.reject('error'));
                wrapper.instance().handleChange('123', dispatch);
                expect(axios.get).toHaveBeenCalledWith('https://fb-assessment.glitch.me/artists/123')
            })
             it('received correct response', () => {
                axios.get.mockImplementationOnce(() => Promise.reject('error'));
                 wrapper.instance().handleChange('123', dispatch).then(res => {
                     expect(res).toEqual('error');
                 });
             })
        })
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
