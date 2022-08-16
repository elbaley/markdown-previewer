import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  mdInput: "",
  mdHtmlOutput:
    "<p>Turkey pork beef sausage prosciutto meatloaf doner sirloin swine strip steak meatball picanha.  Porchetta leberkas meatloaf chicken kevin tri-tip jowl pork ham hock rump cow hamburger short loin spare ribs pork loin.  Meatloaf spare ribs venison picanha chislic buffalo ribeye ham strip steak corned beef cupim.  Beef landjaeger ground round venison ball tip t-bone.  Turkey bresaola kevin ham hock chuck tongue turducken ball tip.  Brisket chicken leberkas bacon flank ground round ball tip.</p>\n",
};

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  markdownSlice.actions;

// Selector
export const selectMarkdown = (state) => state.markdown;

export default markdownSlice.reducer;
