import React from 'react';
import { useSelector } from 'react-redux';

function OutputArea() {
  const outputTextareaRef = React.useRef(null);

  const outputText = useSelector((state) => state.text.output);

  function copyOutputText() {
    window.navigator.clipboard.writeText(outputText);
  }

  return (
    <div className="output-area">
      <textarea ref={outputTextareaRef} cols="30" rows="10" value={outputText} disabled />
      <button className="output-area__copy-button" type="button" onClick={copyOutputText}>
        Copy
      </button>
    </div>
  );
}

export default OutputArea;
