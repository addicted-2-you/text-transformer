import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTransformType } from 'store/settings.slice';

import { TRANSFORM_TYPE_NONE, TRANSFORM_TYPE_IEROGLIFY } from 'constants/transform-types';

function ControlsPanel() {
  const transformType = useSelector((state) => state.settings.transformType);
  const dispatch = useDispatch();

  function onChangeTransformType({ target: { value } }) {
    dispatch(setTransformType({ transformType: value }));
  }

  return (
    <div className="controls-panel">
      <label htmlFor="text-transform-type-select">
        <select
          id="text-transform-type-select"
          value={transformType}
          onChange={onChangeTransformType}
        >
          <option value={TRANSFORM_TYPE_NONE}>None</option>
          <option value={TRANSFORM_TYPE_IEROGLIFY}>Ieroglify</option>
        </select>
      </label>
    </div>
  );
}

export default ControlsPanel;
