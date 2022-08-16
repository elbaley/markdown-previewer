import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  mdInput:
    '# H1 Header\n\n![ImageExample](https://patika-prod.s3-eu-central-1.amazonaws.com/userFiles/elbaley/profilePicture)\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laborum?\n\n2nd ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta obcaecati voluptatum nobis officia voluptatem *repudiandae* magni maxime, **laudantium** `voluptatibus` sequi, sit quas illo omnis.\n\n  * list item\n  * another item\n  * last item\n\nNote that --- not considering the asterisk --- the actual text\ncontent starts at 4-columns in.\n\n> Some quote...\n\n> Rump pork ground round turkey ribeye turducken ham hock\n\n> t-bone chicken hamburger.\n\n\n## H2 Header\nExample of numbered list:\n\n 1. first item\n 2. second item\n 3. third item\n\nCode snippet example:\n\n```javascript\nconst PI = 3.14;\nalert("Hello World!")\n```\n\n\n### H3 header \n\nNow a nested list:\n\n 1. Main item\n\n      * sub-item\n      * sub-item\n      * sub-item\n\n 2. Another item\n\n 3. Last item\n\n\n\nA link example: [my github](https://github.com/elbaley), \n\n\n',
};

export const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    setMdInput: (state, action) => {
      state.mdInput = action.payload.input;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setMdInput } =
  markdownSlice.actions;

// Selector
export const selectMarkdown = (state) => state.markdown;

export default markdownSlice.reducer;
