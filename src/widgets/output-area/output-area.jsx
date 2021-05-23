import React from 'react';
import { useSelector } from 'react-redux';

function OutputArea() {
  const outputText = useSelector((state) => state.text.output);

  return (
    <div className="output-area">
      <pre className="output-text">{outputText}</pre>
    </div>
  );
}

export default OutputArea;
