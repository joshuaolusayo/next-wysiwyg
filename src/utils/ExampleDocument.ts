import { Descendant } from "slate";

const ExampleDocument: Descendant[] = [
  {
    type: "paragraph",
    children: [
      {
        text: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have creative project to share.",
      },
    ],
  },
  {
    type: "h3",
    children: [{ text: "It all begins with an idea 1" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have creative project to share.",
      },
    ],
  },
  {
    type: "h3",
    children: [{ text: "It all begins with an idea 1" }],
  },
  {
    type: "paragraph",
    children: [
      { text: "Hello World! This is my paragraph inside a sample document." },
      { text: "Bold text.", bold: true, code: true },
      { text: "Italic text.", italic: true },
      { text: "Bold and underlined text.", bold: true, underline: true },
      { text: "variableFoo", code: true },
    ],
  },
];

export default ExampleDocument;
