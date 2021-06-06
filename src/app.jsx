import React from 'react';

import ControlsPanel from './widgets/controls-panel';
import InputArea from './widgets/input-area';
import OutputArea from './widgets/output-area';

function App() {
  return (
    <>
      <div className="input-output">
        <InputArea />
        <OutputArea />
      </div>

      <ControlsPanel />
    </>
  );
}

export default App;
