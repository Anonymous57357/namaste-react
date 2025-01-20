# Episode 05 - Let's Get Hooked

## Industry Best Practices

- **Separate Files**: Always separate components and utilities into individual files for better organization and maintainability.

## Exporting Data in React

- **Export Default**:

  - Used to export a single default value or component from a file.
  - Example:
    ```javascript
    export default Component;
    ```
  - Import Syntax:
    ```javascript
    import Component from "path";
    ```

- **Named Exports**:
  - Used to export multiple values or components from a file.
  - Example:
    ```javascript
    export const someElement = ...;
    export const someComponent = ...;
    ```
  - Import Syntax:
    ```javascript
    import { someElement, someComponent } from "path";
    ```

## Why is React Fast?

- React is highly efficient in **DOM manipulation**.
- Websites consist of two layers:
  1. **Data Layer** (backend)
  2. **UI Layer** (frontend)
- React efficiently synchronizes changes between these layers.

## React Hooks

Hooks are **normal JavaScript utility functions** that give additional capabilities to variables.  
Key Features:

- Provide **"superpowers"** to variables, allowing state management and side-effect handling in React components.
- Examples of commonly used hooks:
  - `useState()`
  - `useEffect()`

### useState()

- A React Hook for managing **state variables**.
- Syntax:
  ```javascript
  const [currentState, functionToUpdate] = useState(initialValue); // always story in the memory of currnetState value
  ```
