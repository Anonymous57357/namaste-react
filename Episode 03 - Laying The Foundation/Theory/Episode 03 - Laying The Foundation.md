## React - library

## parcel is a bundler have some build in libraries(babel)

## JSX (concise) library

# jsx is nothing but a creating a react element to easy undestand

1.  jsx is not part of react
2.  React.createElement() => Object => HTMLElement(render)
3.  react element is replaced not updended.
4.  JSX => merging HTML + js
5.  JSX => is a html like syntax
6.  JSX => html not in javascript
7.  JSX => inject anything inside
8.  JSX => we can inject javascript inside jsx so that javascript pushed inside the third param (children props)
9.  JSX is essentially a syntactic sugar for React.createElement(). It makes the creation of React elements more concise and easier to read.

## why use jsx instead of reactCreateElement() ?

- its developer friendly, code readability, simplicity

## babel (compilier) ## transpiled

- jsx is transpiled (parser, understanding) by parcel
- parcel is a bundler having so many packages => babel
- babel parsing the jsx => into browser understand (compiler)
- babel converts jsx into react code

## what is babel ?

- Babel is one of the most popular JavaScript parsers/transpilers for React, but it’s not the only one. It’s primarily used to convert JSX and modern JavaScript syntax (like ES6+) into JavaScript that can run in older browsers. However, there are alternatives for parsing and compiling React or JSX-like syntax

- babel to element ?
- babel to component ?
- babel understands component via <></>

## conversion

react uses babel as a compiler for compiling => react elements its always lowercase => for component its always Pascal case

## react component ?

## what is functional component ?

- a simple javascript function is return some jsx

- two type of component:

1. Class based components - OLD
2. Funtional Components - NEW

3. React Functional Component - same normal javascript function

## code executing chain

parcel (beast) ==> babel(power - compiling or parsing) => React.ceateElement() => React.createElement Object => reactDom.render() => HTMLElement(render)
