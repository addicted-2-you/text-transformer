import { TRANSFORM_TYPE_IEROGLIFY } from 'constants/transform-types.constants';
import { ZALGO_MODE_DOWN, ZALGO_MODE_MID, ZALGO_MODE_TOP } from 'constants/zalgo-modes.constants';

import ieroglifyDictionary from 'dictionaries/ieroglify.dictionary';
import { zalgoTop, zalgoMid, zalgoDown } from 'dictionaries/zalgo.dictionary';

import { getRandomNumber } from './numbers.utils';
import { getRandomZalgoChar } from './zalgo.utils';

export function transformTextType(originalText, transformType) {
  switch (transformType) {
    case TRANSFORM_TYPE_IEROGLIFY: {
      return originalText
        .split('')
        .map((char) => (ieroglifyDictionary[char] ? ieroglifyDictionary[char][0] : char))
        .join('');
    }
    default: {
      return originalText;
    }
  }
}

export function zalgify(originalText, zalgoModes = [], zalgoLevel = 0) {
  const shouldZalgoTop = zalgoModes.includes(ZALGO_MODE_TOP);
  const shouldZalgoMid = zalgoModes.includes(ZALGO_MODE_MID);
  const shouldZalgoDown = zalgoModes.includes(ZALGO_MODE_DOWN);

  return originalText.split('').reduce((result, originalTextChar) => {
    const currentCharResult = [originalTextChar];

    const numTop = shouldZalgoTop
      ? getRandomNumber(zalgoLevel * 3) / (zalgoLevel / 2) +
        Math.floor((zalgoLevel + 1) / zalgoLevel)
      : 0;

    const numMid = shouldZalgoMid
      ? getRandomNumber(zalgoLevel * 2) / (zalgoLevel / 2) +
        Math.floor((zalgoLevel + 1) / zalgoLevel)
      : 0;

    const numDown = shouldZalgoDown
      ? getRandomNumber(zalgoLevel * 3) / (zalgoLevel / 3) +
        Math.floor((zalgoLevel + 1) / zalgoLevel)
      : 0;

    for (let i = 0; i < numTop; i += 1) {
      currentCharResult.push(getRandomZalgoChar(zalgoTop));
    }

    for (let i = 0; i < numMid; i += 1) {
      currentCharResult.push(getRandomZalgoChar(zalgoMid));
    }

    for (let i = 0; i < numDown; i += 1) {
      currentCharResult.push(getRandomZalgoChar(zalgoDown));
    }

    return `${result}${currentCharResult.join('')}`;
  }, '');
}
