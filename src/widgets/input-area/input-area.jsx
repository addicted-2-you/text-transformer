import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setInputText } from 'store/text.slice';

function InputArea() {
  const dispatch = useDispatch();
  const inputText = useSelector((state) => state.text.input);

  function onChangeInputText({ target: { value } }) {
    dispatch(setInputText({ input: value }));
  }

  return (
    <div className="input-area">
      <textarea value={inputText} cols="30" rows="10" onChange={onChangeInputText} />
    </div>
  );
}

export default InputArea;
