## Episode 06 - Exploring the world

## monolith and microservices architecture

the whole project build in single structure

## microservices

each and every services have their own job
for example: frontend, backend, auth, email sevice, notification service
separation of console

each service is running and deployed on their own port
and called by the api as soon as its /

## while making api calls there is two methods

1. loads => API (500MS) => render

2. loads => render (some data) => Api(500ms) => rerender

# useEffect()

# what is hook ?

at last hook is nothin but a simple javascript funtion with added some utility function to give some super poweres its created by facebook

## definition

A Hook is not just a regular JavaScript function but a React-specific function that adds "superpowers" to functional components, making them more powerful and capable of handling state, lifecycle, and other advanced React features.

useState:

Manages state in functional components.
Example:
javascript
const [count, setCount] = useState(0);

useEffect: -> is called once the components renders

Handles side effects like API calls, subscriptions, and DOM updates.
Example:
javascript
useEffect(() => {
console.log("Component rendered");
}, []);

## user experience

shimmer ui

##

"Normal JavaScript variables do not persist state across renders. React's useState hook is used to maintain state, syncing the data and UI layers."

"setButton -> updating the state (syncs the data layer + UI layer)."
This is correct! It ensures the UI updates when the state changes.

## while using setbutton or updateanython ? react update the const or what ?

# soln : while using setFunction or setFunction(triggred) based on the logic inside the state value is changed and react is rerender the component once and replace the value to current state value

"When using setFunction or setFunction(triggered):

React calculates the new state value based on the logic provided in the setFunction.
React then re-renders the component once, replacing the old state value with the new one.
The updated state value is reflected in the component's UI and logic during the re-render."

Single Re-Render:
# onchange
"onChange triggers the callback function every time the value of the input element changes (e.g., when a user types). The callback is used to update the current state, allowing the UI to reflect the latest input value dynamically."

"the new recociliation algorith is findin the two difference between tree by udating the state value only the dom required"
