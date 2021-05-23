import { transformTextType } from 'utils/text-type-transformers';

import { setOutputText } from './text.slice';

export function transformText({ getState }) {
  return (next) => (action) => {
    next(action);

    const {
      text: { input },
      settings: { transformType },
    } = getState();

    next(setOutputText({ output: transformTextType(input, transformType) }));
  };
}
