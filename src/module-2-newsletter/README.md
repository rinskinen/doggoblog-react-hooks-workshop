## Module 2 - subscribe to newsletter

Handling forms can be tricky but the basics are quite simple. In react we can have either controlled or uncontrolled form inputs.

Uncontrolled inputs cannot be controlled within the component because the source of truth is kept in the DOM (Document Object Model, what you can see on your browser window).

However, for uncontrolled components we don't need to write event handlers for changing the values of the fields. Instead we can access the values e.g. via the form element by referencing each fields name attribute.

Every time submit button is clicked, form dispatches submit event if the fields are in valid state. We can access the field values by referencing them by the name attribute:

`event.target` is a reference to the form element and individual field values can be accessed by referencing
`event.target.fieldName.value`.

### Excercises

Finish the newsletter component so that

-   Form fields have labels
-   When user submits the form the values of the form are displayed in alert box
-   Clear the form fields after the submit

### Bonus excercises

-   Make sure both fields are not empty and entered email is valid (tip: check the links)

    -   https://www.w3schools.com/tags/att_input_required.asp
    -   https://www.w3schools.com/tags/att_input_type.asp

-   (advanced) Change form fields to be controlled components (write event handlers to update values in the component state)

    -   You can create new state variables and their update functions like:

        ```
        const [email, setEmail] = useState('');

        <input value={email} onChange={(event) => setEmail(event.target.value)} />
        ```

    -   In the submit method the email value can be accessed directly by using `email` variable.

    -   https://reactjs.org/docs/hooks-state.html
