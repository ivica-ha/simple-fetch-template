const prefix = 'https://itunes.apple.com/';

const getSongs = (query) => {

    return fetch(`${prefix}/search?term=${query}`)
        .then((res) => res.json())

/*
u slučaju ako metoda treba biti nešto drugo osim GET, npr. POST, PATCH...
return fetch(`${prefix}/search?term=${query}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
        .then((res) => res.json())*/
}


export {
    getSongs
}