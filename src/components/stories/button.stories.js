import ButtonWrapper from "./button-wrapper.svelte";

export default { title: "Button" };

export const withText = () => ({
  Component: ButtonWrapper,
  props: {
    buttonText: "some text",
  },
  on: {
    click: (event) => {
      alert("hello! \n" + JSON.stringify(event));
    },
  },
});

export const withEmoji = () => ({
  Component: ButtonWrapper,
  props: {
    buttonText: "😀 😎 👍 💯",
  },
  on: {
    click: (event) => {
      alert("empjiiii  \n" + JSON.stringify(event));
    },
  },
});
