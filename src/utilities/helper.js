export const cleanCharacter = (character) => {
  return {
    name: character.name,
    id: character.id,
    description: character.description || 'No description found.',
    pic: character.thumbnail.path + '.' + character.thumbnail.extension,
    comics: character.comics.items,
    favorited: false,
    show: true
  }
}