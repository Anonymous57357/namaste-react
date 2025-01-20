## Episode 12 - Let's build our store

## redux A JS library for predictable and maintainable global state management

React-Redux
Official React bindings for Redux

Redux Toolkit
The official, opinionated, batteries-included toolset for efficient Redux development

redux flow -> button pressed -> dispatch action -> call the (reducer) func -> update the slice of the reducer store
selector(read data) from redux store -> modify the cart
(or)
subscribing

## redux flow

# @redux/toolkit configureStore({})

1. create a store

# react-redux Provider

2. provide the store to the app \*root-level ()

# interview question

# performance optimization

1. when subscribing make sure to subscribe the right portion of the store
2. dont subscribe the whole store (reducers)

# older redux si prohibited to mutate a state

# newer can updatea a state

# older way

cosnt newState = [...state]
newState.items.push(action.payload)
return newState

# newer way

state.items.push(action.payload)

## behind the scenes redux use immer to mutate the state finding the difference between older and newer state

## Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- connect out store to our app
- Slice (cartSlice)
- dispatch (action)
- Selector
