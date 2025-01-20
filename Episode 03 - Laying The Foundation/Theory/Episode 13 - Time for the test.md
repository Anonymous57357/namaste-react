## Episode 13 - Time for the test

## types of testing (developer)

- Unit Testing

# test your react component in isolation

- Inregration Testing

# each componet is talking or integrating each other

- End to End Testing e2e testing

# React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

react testing library is used Jest

## Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

# setting up teting library

1. Installed React Testing library
2. Installed jest
3. Install babel dependencies
4. Configure Babel
5. Configure parcel config file to disable default babel transpilation
6. Jest configuration -npx jest --init
7. jsdom npm install --save-dev jest-environment-jsdom
8. install @babel/preset-react - to make JSX work in test cases
9. Include @babel/preset-react inside my babel config
10. npm i -D @testing-library/jest-dom

\_\_ => dunder method

in jest

# at the end of the a input element is jsx is converted into react react element (object ) by babel a react object ia have the three placeholder firedt tagname , classname attribute, and child props its rendered inside the react-dom is redender inside html element by id

# whenever we using fetcha and some state updated we need to use act(() => {}) to wrap our comonenet in testing act => reactDom util
