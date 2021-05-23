import { TRANSFORM_TYPE_IEROGLIFY } from 'constants/transform-types';

import ieroglifyDictionary from 'dictionaries/ieroglify.dictionary';

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
