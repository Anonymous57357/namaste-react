## Episode 08 - Let's get Classy

# class based component is older way of creating a component

1. a class based component is a component its used render method and returning some piece of jsx

# functionl based component is newer way to creating a component

1. a functional based component is a component is returning some piece of jsx

2. whenever the setState() is called its update a the state variable.
   before the useState() hooks are created. this is the older way of creating a state variable using state and update a state variable using setState() for older way to creating .. sycing data layer and ui layer

3. in javascript we createa some normal variable or state variable is mutable. but in react state variable or unmutable used setState to update

## LIFE CYCLE OF REACT COMPONENT

## How does react component works behinds the scenes ?

1. in our example a about component is started rendering in the jsx ist <UserClass /> =>
2. after class intialize a construcor is called then redered called

3. once all the rendering finished then only after all the component is mounted in dom then only componentDidMount is called

4. componentDidMount(before hooks => make api calls ) vs useEffect(after hooks created => make api calls)

- if the class component have two child class component react bath render phase and componentDidMount phase for optimization

5. Have two phases
   mounting phase:-
6. render phase
   - constructor
   - render
7. commit phase (update DOM)

   - componeneDidMount
   - updating dom is expensive

8. In the mounting phase a component is rendered and mounted by dummy data

the older way componentDidMount not same as new way useEffect

- dont use setInterval its causes performance issue

## react lifecycle methods

1. mounting phase
2. update phase

after these two phase 3. componentWillUnmount phase is called
--> unmounted and and loaded with another page its react dont reload another page (its just a component exchange)
--> thats why react is called single page application in a single page
just a component exchange
