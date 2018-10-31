export const cleanCharacter = (character) => {
  //console.log(character);
  return {
    name: character.name,
    id: character.id,
    description: character.description,
    picURL: character.thumbnail.path + '.jpg',
    comics: character.comics.items
  }
}