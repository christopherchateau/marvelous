export const cleanCharacter = (character) => {
  return {
    name: character.name,
    id: character.id,
    description: character.description || 'n/a',
    pic: character.thumbnail.path + '.' + character.thumbnail.extension,
    comics: character.comics.items
  }
}