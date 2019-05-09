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
  
export default function handleChange() {
    // return selectedArtist;
    return new Promise((resolve, reject) => {
        // const userID = parseInt(url.substr('/users/'.length), 10);
        process.nextTick(() => resolve(selectedArtist)
        // selectedArtist
        //     ? resolve(selectedArtist)
        //     : reject({
        //         error: 'User not found.',
        //     }),
        );
    });
}
