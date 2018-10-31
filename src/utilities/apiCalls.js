import { MD5 } from "crypto-js";
import apiKeys from "../apiKeys";
import { cleanCharacter } from "./helper"

export const getRandomCharacter = async () => {
  const timeStamp = Date.now();
  const hash = MD5(timeStamp + apiKeys.private + apiKeys.public);
  const url = `http://gateway.marvel.com/v1/public/characters/1017100?ts=${timeStamp}&apikey=${apiKeys.public}&hash=${hash}`;
  //const searchUrl = `http://gateway.marvel.com/v1/public/characters?name=spider-man&ts=${ts}&apikey=${apiKey}&hash=${hashA}`;

  const response = await fetch(url);
  const data = await response.json();
  return cleanCharacter(data.data.results[0]);
}

