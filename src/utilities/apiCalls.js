import { MD5 } from "crypto-js";
import apiKeys from "../apiKeys";
import { cleanCharacter } from "./helper"

const min = 1010801;
const max = 1011428;

export const getRandomCharacter = async (randomCharacterId) => {
  console.log(randomCharacterId)
  const timeStamp = Date.now();
  const hash = MD5(timeStamp + apiKeys.private + apiKeys.public);
  const url = `http://gateway.marvel.com/v1/public/characters/${randomCharacterId}?ts=${timeStamp}&apikey=${apiKeys.public}&hash=${hash}`;
  //const searchUrl = `http://gateway.marvel.com/v1/public/characters?name=spider-man&ts=${ts}&apikey=${apiKey}&hash=${hashA}`;

  const response = await fetch(url);
  const data = await response.json();
  return cleanCharacter(data.data.results[0]);
}

