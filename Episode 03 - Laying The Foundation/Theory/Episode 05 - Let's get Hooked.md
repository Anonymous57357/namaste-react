## Episode 05 - Let's get Hooked

# industry best practices

- separate files

# export data

- there are two ways to exports data

# export default something - always exporting one file (default file)

# import Component or element

# export const someElement or SomeComeponents

# import {Component or Element} from "path"

# why is react is fast ?

- react is effiecient in dom manupulation

most importantly the webside its contains of 2 laywer 1. data layer (from backend) 2. ui layer(frontend)

# react hooks

(Normal JS utility functions)

- a normal javascript function its gives some utility to the variable this utility gives power to the variables

- useState() - superpowerfull State vaiables in react (syncing datalayer + uilayer)
- in otherways giving powers to normal js variables
- maintain the state of the variable
- const [currentState, functiontoUpdate] = useState()
- useEffect()

# useState

1. param is used to set the variable if list of oject whatever it is
2. a allback funciton is update the setVariable

whenever the state variable is updates react is rerender the component

// state variables super powerfull variable
const [listOfRestaurents, setListOfRestaurents] = useState([

]);

// Normal js variable
// let listOfRestaurents;

// normal js variable
// let listOfRestaurents = [

// ];

as soon as data layer update (state variable) the ui layer(setState - funct) update ui

# react algorithm

reconcilation algorithm (react fiber)

## diff algorithm or react reconcilation algoruth (react fibre)

# finding out ui and change the differnce

# its just flush out the differnece between the dom tree (old dom(react => obj) vs new dom(react => obj))

# the purpose of setFunc to find the different the different between two dom tree to trigger

in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
