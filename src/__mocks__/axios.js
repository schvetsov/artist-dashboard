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
  
export default {
    get: jest.fn(() => Promise.resolve(selectedArtist))
};
