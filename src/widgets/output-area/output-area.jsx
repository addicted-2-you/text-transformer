import React from 'react';
import { useSelector } from 'react-redux';

function OutputArea() {
  const outputText = useSelector((state) => state.text.output);

  return (
    <div className="output-area">
      <p className="output-text">{outputText}</p>
    </div>
  );
}

export default OutputArea;
