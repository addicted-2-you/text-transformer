import { transformTextType, zalgify } from 'utils/text-transformers';

import { setOutputText } from './text.slice';

export function transformText({ getState }) {
  return (next) => (action) => {
    next(action);

    const {
      text: { input },
      settings: { transformType, zalgoModes, zalgoLevel },
    } = getState();

    next(
      setOutputText({
        output: zalgify(transformTextType(input, transformType), zalgoModes, zalgoLevel),
      }),
    );
  };
}
