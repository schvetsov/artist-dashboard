export const LIST = 'LIST';
export const PROFILE = 'PROFILE';

export function updateList(value) {
    return { 
        type: LIST, 
        value: value
    }
};

export function updateProfile(value) {
    return {
        type: PROFILE,
        value: value
    }
};
