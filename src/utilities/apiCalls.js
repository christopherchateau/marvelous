import { MD5 } from "crypto-js";
import apiKeys from "./apiKeys";
import * as helper from "./helper"

const timeStamp = Date.now();
const value = timeStamp + apiKeys.private + apiKeys.public;
const hash = MD5(value);

const url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKeys.public}&hash=${hash}`;
//const searchUrl = `http://gateway.marvel.com/v1/public/characters?name=spider-man&ts=${ts}&apikey=${apiKey}&hash=${hashA}`;

export const getRandomCharacter = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.data)
}

