import { zalgoTop, zalgoMid, zalgoDown } from 'dictionaries/zalgo.dictionary';

export function getRandomZalgoChar(zalgoArray) {
  return zalgoArray[Math.floor(Math.random() * zalgoArray.length)];
}

export function isZalgoChar(char) {
  const charOfTopArray = !!zalgoTop.find((dictChar) => dictChar === char);
  if (charOfTopArray) {
    return true;
  }

  const charOfMidArray = !!zalgoMid.find((dictChar) => dictChar === char);
  if (charOfMidArray) {
    return true;
  }

  const charOfDownArray = !!zalgoDown.find((dictChar) => dictChar === char);
  if (charOfDownArray) {
    return true;
  }

  return false;
}
