import * as actions from './actions';

describe('actions', () => {

    it('should create an action', () => {
        const value = 'random'
        const expectedAction = {
            type: actions.LIST,
            value
        }
        expect(actions.updateList(value)).toEqual(expectedAction)
    });

    it('should create an action', () => {
        const value = 'random'
        const expectedAction = {
            type: actions.PROFILE,
            value
        }
        expect(actions.updateProfile(value)).toEqual(expectedAction)
    });
    
});
