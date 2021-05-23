import { createSlice } from '@reduxjs/toolkit';

import { TRANSFORM_TYPE_IEROGLIFY } from 'constants/transform-types';

export const settingsSlice = createSlice({
  name: 'settings-slice',

  initialState: {
    transformType: TRANSFORM_TYPE_IEROGLIFY,
  },

  reducers: {
    setTransformType: (state, action) => {
      state.transformType = action.payload.transformType;
    },
  },
});

export const { setTransformType } = settingsSlice.actions;

export default settingsSlice.reducer;
