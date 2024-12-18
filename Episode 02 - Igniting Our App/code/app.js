import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "head" },
  "this heading is from react"
); // is a object () props

// console.log(heading);

/**
 *
 */

// const heading2 = React.createElement(
//   "div", // TAB
//   { id: "parent" }, // OBJECT (ATTRIBUTE)
//   React.createElement("div", { id: "child" }, [
//     // array of children
//     React.createElement("h2", {}, "am a child h1 element"),
//     React.createElement("h2", {}, "am a Sibling h1 element"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     // array of children
//     React.createElement("h2", {}, "am a child h1 element"),
//     React.createElement("h2", {}, "am a sibling h1 element"),
//   ])
// );

const heading3 = React.createElement(
  "div",  
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h3", {}, "hello react from parcel bundler"),
    React.createElement("h3", {}, "am a child eldment"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h3", {}, "am a child eldment"),
    React.createElement("h3", {}, "am a child eldment"),
  ])
);

// JSX

console.log(heading3);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading3);

// everything inside the id (root) elment is replace by react not upend

// 03. Laying a foundation
