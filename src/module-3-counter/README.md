## Module 3 - Counter

Controlling the state of the application is one of the most challenging tasks. The browser keeps quite a lot of useful information in its global state, such as window width, timezone, storage, network information and so on.

However, most of the logic for managing application state must be written by oneself. Most often the application state is needed when there is some interaction, such as form or button inputs in the UI.

State management in React is quite straightforward. Every component have their own encapsulated state, which can be controlled via React Hooks.

https://reactjs.org/docs/hooks-state.html

### Excercise

-   Make button elements that add and subtract the count by 1 and by 5 when they are clicked
-   Make button that resets the counter back to zero

### Bonus exercises

-   Do not allow negative values (tip: use `if` statements)
-   Do not allow values bigger than 25
-   Add button for changing the counter to a random value between 0 and 25
-   Advanced: Persist counter value to localStorage so you can resume your counting after page refresh
    -   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#Example
    -   https://reactjs.org/docs/hooks-effect.html
