import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setTransformType,
  setZalgoLevel,
  addZalgoMode,
  removeZalgoMode,
} from 'store/settings.slice';

import {
  TRANSFORM_TYPE_NONE,
  TRANSFORM_TYPE_IEROGLIFY,
  TRANSFORM_TYPE_WITCHIFY,
} from 'constants/transform-types.constants';
import { ZALGO_MODE_DOWN, ZALGO_MODE_MID, ZALGO_MODE_TOP } from 'constants/zalgo-modes.constants';

function ControlsPanel() {
  const dispatch = useDispatch();

  const transformType = useSelector((state) => state.settings.transformType);
  const zalgoLevel = useSelector((state) => state.settings.zalgoLevel);
  const zalgoModes = useSelector((state) => state.settings.zalgoModes);

  const { topZalgoModeEnabled, midZalgoModeEnabled, downZalgoModeEnabled } = React.useMemo(
    () => ({
      topZalgoModeEnabled: zalgoModes.includes(ZALGO_MODE_TOP),
      midZalgoModeEnabled: zalgoModes.includes(ZALGO_MODE_MID),
      downZalgoModeEnabled: zalgoModes.includes(ZALGO_MODE_DOWN),
    }),
    [zalgoModes],
  );

  function onChangeTransformType({ target: { value } }) {
    dispatch(setTransformType({ transformType: value }));
  }

  // zalgo
  function onChangeZalgoLevel(event) {
    const {
      target: { value },
    } = event;

    dispatch(setZalgoLevel({ zalgoLevel: value }));
  }

  function onChangeZalgoMode(event) {
    const {
      target: { name, checked },
    } = event;

    if (checked) {
      dispatch(addZalgoMode({ zalgoMode: name }));
    } else {
      dispatch(removeZalgoMode({ zalgoMode: name }));
    }
  }

  return (
    <div className="controls-panel">
      <label htmlFor="text-transform-type-select">
        <strong>Transform Type: </strong>

        <select
          id="text-transform-type-select"
          value={transformType}
          onChange={onChangeTransformType}
        >
          <option value={TRANSFORM_TYPE_NONE}>None</option>
          <option value={TRANSFORM_TYPE_IEROGLIFY}>Ieroglify</option>
          <option value={TRANSFORM_TYPE_WITCHIFY}>Witchify</option>
        </select>
      </label>

      <div className="controls-group">
        <h4>
          <a href="https://eeemo.net/">Zalgo</a>
        </h4>

        <label htmlFor="zalgo-range-input">
          <strong>Zalgo level: </strong>
          <input
            type="range"
            id="zalgo-range-input"
            value={zalgoLevel}
            min="0"
            max="100"
            onChange={onChangeZalgoLevel}
          />
        </label>

        <div className="zalgo-modes-group">
          <strong>Zalgo modes: </strong>

          <div>
            <label htmlFor="zalgo-top-mode">
              <input
                type="checkbox"
                name={ZALGO_MODE_TOP}
                id="zalgo-top-mode"
                checked={topZalgoModeEnabled}
                onChange={onChangeZalgoMode}
              />

              <span> Top </span>
            </label>

            <label htmlFor="zalgo-mid-mode">
              <input
                type="checkbox"
                name={ZALGO_MODE_MID}
                id="zalgo-mid-mode"
                checked={midZalgoModeEnabled}
                onChange={onChangeZalgoMode}
              />

              <span> Mid</span>
            </label>

            <label htmlFor="zalgo-down-mode">
              <input
                type="checkbox"
                name={ZALGO_MODE_DOWN}
                id="zalgo-down-mode"
                checked={downZalgoModeEnabled}
                onChange={onChangeZalgoMode}
              />

              <span> Down</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlsPanel;
