import { IMovie } from "../model/movie"

const movies: IMovie[] = [
    {
        id: 'godzilla-king-of-the-monsters',
        title: 'Godzilla: King of the Monsters',
        sharedBy: 'leanh@mail.com',
        like: ['a', 'b', 'c'],
        disLike: [],
        description: "When rogue scientists set out to reset the balance of humanity by awakening the world's monsters, Godzilla must rise to fend off these chaotic titans.",
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        poster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa-LOYQMPFjqruaTsAeS82isB4JDNCAKARqjcaWkVuED5G30aC6IjFQyGI8gh-qHjX1Z7DkCQpKO_dFCE-9zQnawOVk.jpg?r=b5a",
        type: 'video/mp4'
    },
    {
        id: 'the kissing booth 3',
        title: 'The Kissing Booth 3',
        sharedBy: 'leanh@mail.com',
        like: ['a', 'b', 'c'],
        disLike: [],
        description: "Determined to make the most of her final summer before college, Elle plans the ultimate bucket list as she navigates what comes next with Noah and Lee.",
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        poster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW-yMzLExYH173SZGeCzlUgfTeWpUWk4Cp6WQlVfR3bRqkYo3n4XUffS42CXfu9AhbPG2qm8Twgmo89CMMv03qlaUpj1BHXANADtxU3V6txIvZRWYt1XB4EkQNQs.jpg?r=510",
        type: 'video/mp4'
    },
    {
        id: 'Face Off 4: The Walking Guests',
        title: 'Face Off 4: The Walking Guests',
        sharedBy: 'leanh@mail.com',
        like: ['a', 'b', 'c'],
        disLike: [],
        description: "When a woman and her friends visit her home village to find a location for a client's wedding photoshoot, terror shifts their focus.",
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        poster: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW9DnmPWcQ4ZsCwNjqyOYBa5wAsaHxf3nIU7uuIsw6C_2CarCtg6uM6PElBibPT-84RhV9PlB2Odbe3eCKEKynWAG2s.jpg?r=24e",
        type: 'video/mp4'
    }
]
export const GetMovies = () => new Promise(resolve => {
    resolve({
        code: 200,
        data: {
            data: movies
        },
    })
})