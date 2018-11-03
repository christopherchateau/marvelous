export const cleanCharacter = (character, comicCovers) => {
  return {
    name: character.name,
    id: character.id,
    description: character.description || 'No description found.',
    pic: character.thumbnail.path + '.' + character.thumbnail.extension,
    comics: comicCovers,
    favorited: false,
    show: true
  }
}