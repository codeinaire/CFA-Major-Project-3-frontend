## REACT notes

The React-DOM (which is a virtual DOM abstracted over the DOM) compares the past DOM with the new DOM and only replaces what has changed.

Thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.

### COMPONENTS
All React components must act like pure functions with respect to their props. That is they do not change the props, but simply return them after using them to do something in the function. The are unchanged if used to return a new value but are changed if the value of the props(arguments) are manipulated and changed within the function.

### STATE

https://facebook.github.io/react/docs/state-and-lifecycle.html

State is similar to props, but it is private and fully controlled by the component. Local state is something available only to CLASSES.

IMPORTANT

- 1) DO NOT update the state directly. Use `setState()`. The only place to use `this.state` is in the constructor.
- 2) State Updates May Be Asynchronous - state and props may be updated separately and may not be relied upon if used directly in `setState()`. Use a function that takes in the prev state.
- 3) State updates are merged. This means we can change the state of independent variables with different function calls and it'll merge either change into the current state.
- 4) Data flows down - neither parent or child knows whether a component is stateless or stateful which is why it is said that state is local or encapsulated. This is called unidirectional or top-down data flow.

#### SHARING STATE

Sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up".

### LIFECYCLE METHODS

Mounting - when a component is rendered to the DOM for the first time.

Unmounting - whenever the DOM for a component is removed.

### LIFECYCLE HOOKS

Methods that are used to run code when a component mounts or unmounts. Such as:

This is run after a component output has been rendered to the DOM.
```
componentDidMount() {

}
```
And will continue to run while the component is still being rendered on the DOM.


This is called when a component is not being rendered on the DOM and is designed to stop any state changes happening when a component is not being rendered.

```
componentWillUnmount() {

}
```
