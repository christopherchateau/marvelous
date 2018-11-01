export const cleanCharacter = (character) => {
  console.log(character.thumbnail)
  return {
    name: character.name,
    id: character.id,
    description: character.description,
    pic: character.thumbnail.path + '.' + character.thumbnail.extension,
    comics: character.comics.items
  }
}