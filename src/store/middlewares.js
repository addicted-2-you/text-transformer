import { setOutputText } from './text.slice';

export function transformText({ getState }) {
  return (next) => (action) => {
    const {
      text: { input },
    } = getState();

    next(setOutputText({ output: input }));

    return next(action);
  };
}
