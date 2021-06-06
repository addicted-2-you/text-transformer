import { createSlice } from '@reduxjs/toolkit';

import { TRANSFORM_TYPE_NONE } from 'constants/transform-types.constants';
import { ZALGO_MODE_DOWN } from 'constants/zalgo-modes.constants';

export const settingsSlice = createSlice({
  name: 'settings-slice',

  initialState: {
    transformType: TRANSFORM_TYPE_NONE,

    // zalgo
    zalgoLevel: 5,
    zalgoModes: [ZALGO_MODE_DOWN],
  },

  reducers: {
    setTransformType: (state, action) => {
      state.transformType = action.payload.transformType;
    },

    setZalgoLevel(state, action) {
      state.zalgoLevel = action.payload.zalgoLevel;
    },

    addZalgoMode(state, action) {
      state.zalgoModes.push(action.payload.zalgoMode);
    },

    removeZalgoMode(state, action) {
      state.zalgoModes = state.zalgoModes.filter((mode) => mode !== action.payload.zalgoMode);
    },
  },
});

export const { setTransformType, setZalgoLevel, addZalgoMode, removeZalgoMode } =
  settingsSlice.actions;

export default settingsSlice.reducer;
