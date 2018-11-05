export const getRandomCharacter = jest.fn().mockImplementation(() => ({
  comics: { items: [] },
  description: "n/a",
  events: {},
  id: 1010808,
  modified: "2014-12-09T17:25:54-0500",
  name: "Hawkeye (Kate Bishop)",
  resourceURI: "http://gateway.marvel.com/v1/public/characters/1010808",
  series: {},
  stories: {},
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/537bad9caa831",
    extension: "jpg"
  },
  urls: []
}));

export const getComics = jest.fn().mockImplementation(() => ({
  data: {
    results: [
      {
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/515f0cae4224e",
          extension: "jpg"
        }
      }
    ]
  }
}));
