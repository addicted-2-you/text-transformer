import React from 'react';
import { useSelector } from 'react-redux';

function OutputArea() {
  const outputTextareaRef = React.useRef(null);

  const [copyOutputTextButtonText, setCopyOutputTextButtonText] = React.useState('Copy');

  const outputText = useSelector((state) => state.text.output);

  function onCopyOutputTextClick() {
    window.navigator.clipboard.writeText(outputText);
    setCopyOutputTextButtonText('Copied!');
    setTimeout(() => {
      setCopyOutputTextButtonText('Copy');
    }, 1000);
  }

  return (
    <div className="output-area">
      <textarea ref={outputTextareaRef} cols="30" rows="10" value={outputText} disabled />
      <button className="output-area__copy-button" type="button" onClick={onCopyOutputTextClick}>
        {copyOutputTextButtonText}
      </button>
    </div>
  );
}

export default OutputArea;
