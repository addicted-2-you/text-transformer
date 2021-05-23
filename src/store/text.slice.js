import { createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({
  name: 'text-slice',

  initialState: {
    input: '',
    output: '',
  },

  reducers: {
    setInputText: (state, action) => {
      state.input = action.payload.input;
    },

    setOutputText: (state, action) => {
      state.output = action.payload.output;
    },
  },
});

export const { setInputText, setOutputText } = textSlice.actions;

export default textSlice.reducer;
