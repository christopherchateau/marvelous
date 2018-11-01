export const cleanCharacter = (character) => {
  console.log(character.thumbnail.path)
  return {
    name: character.name,
    id: character.id,
    description: character.description,
    pic: character.thumbnail.path + '.jpg',
    comics: character.comics.items
  }
}