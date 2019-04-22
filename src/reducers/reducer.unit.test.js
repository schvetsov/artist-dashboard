import reducer from './reducer';
import * as types from '../actions/actions';

describe('todos reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: [],
            selection: ''
        })
    })

    it('should handle LIST', () => {
        expect(
            reducer([], {
                type: types.LIST,
                value: [1, 2, 3]
            })
        ).toEqual({
            data: [1, 2, 3],
            selection: ''
        })
    })

    it('should handle PROFILE', () => {
        expect(
            reducer([], {
                type: types.PROFILE,
                value: 'Testing'
            })
        ).toEqual({
            selection: 'Testing'
        })
    })

})