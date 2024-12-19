import React from "react";
import ReactDom from "react-dom/client";

// React.createElement() => ReactElement-JS Object => HTMLElement(render)
// react element is replaced not updended

const heading = React.createElement(
  "div",
  { id: "heading", className: "heading" },
  "I am heading"
);
// console.log(heading);

const id = document.getElementById("root");

// jsx and react is totally different
// jsx is nothing but a syntax for writing reactElementI

//  JSX => babel (transpiles) => React.createElement => reactElemet-js Object => HTMLElement(render)

// use () for more jsx

const JSXHeading = <h1 id="heading">jsx heading</h1>; // creating a reactElement using jsx syntax (or inside jsx syntax)
// console.log(JSXHeading);

const root = ReactDom.createRoot(id);

// component

// React Functional Component - same normal javascript function

const title2 = <h2>am subtitle element</h2>; // a simple javascript variable
const Title = () => {
  return <h1>am Title componenet </h1>;
};

const number = 10000;
console.log(number);

// componenet or componet composition
const FunctionalComponent = () => {
  return (
    <div id="container">
      <h1>am functional component</h1>
      {Title()}
      <Title></Title>
      <Title />
    </div>
  );
};

function NavBar() {
  return <h1>am navbar</h1>;
}

const footer = (
  <h1>
    am footer componenet <FunctionalComponent />
  </h1>
);
// console.log(FunctionalComponent());

root.render(footer);
