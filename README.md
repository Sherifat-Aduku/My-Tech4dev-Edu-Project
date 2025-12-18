# REACT AND DOM SUMMARY ASIGNMENT
                   
## React
A lot of beginner developers mistake React to be a framework, which is incorrect. React is a JavaScript library used to build user interfaces (UI). React focuses on doing one thing and doing it well, which is the UI. Unlike frameworks, React is not a complete solution and often uses other libraries to form a solution.

## Frameworks
 Frameworks on the other hand, are mostly strict because they require us to code in a certain way. They mostly come with larger features for smart designs. Frameworks are good when working in a small team or as a beginner, but they can be a deal breaker for larger codebases.

React is termed declarative because it helps us describe the UI. We tell it what we want, and it builds the UI on our behalf. It allows developers to declaratively describe UIs and manage actions on their state instead of actions on their DOM elements.

React uses reusable components. A React component, in simple terms, means an ordinary JavaScript function. This function returns a React element, usually written using JSX. When JSX is used, the <tag></tag> syntax becomes a call to React.createElement("tag").

## A named component in React must have its first letter capitalized.
A React element is what gets returned from components. It is an object that virtually describes the DOM nodes that a component represents. Components, whether we are working with them natively or through a library like React, have many advantages. First, components make your code more readable and easier to work with.

## React Hooks
A lot of beginners hear the word hooks and assume it is something complex, but hooks are quite simple. A hook in React is just a special function that allows function components to use React features like state and lifecycle behavior.
You can easily identify a hook because it always starts with the word use. Examples include useState, useEffect, and others.

Hooks were introduced to allow developers to write React logic without using class components. Before hooks, features like state could only be used inside classes. With hooks, function components can now manage state and side effects.

## State in React
State simply means data that can change over time and affect what the user sees on the screen. If we use a normal JavaScript variable inside a component, React will not track changes to it. This means the UI will not update when the value changes. Because of this, React provides a special way to manage data using state.
State on the other hand allows React to know when something has changed and when the UI needs to be updated.

## The useState Hook
The useState hook is used to add state to a function component.
When useState is called, it returns two things:
•	the current state value
•	a function used to update that value
When the update function is called, React re-renders the component and updates the UI automatically. This is why useState is important. Instead of manually changing the DOM, we update state and allow React to handle the UI for us.

## Example: A simple counter button	
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
};

ReactDOM.render(<CounterButton />, document.getElementById('root'));
Clicking the button increases the count displayed on it. React automatically updates the UI based on the state change.

## Handling Events in React
React handles events in a slightly different way from regular HTML. Event names are written in camelCase, such as onClick and onChange. Instead of writing logic directly inside the HTML, React expects a function to be passed to the event handler. This function is only executed when the event occurs. This approach keeps components clean and makes event handling easier to manage.

## Updating State Through Events
A common example of state usage is a button that increases a number when clicked. When the button is clicked, the state update function is called. React notices the change and re-renders the component with the new value. At no point do we directly touch the DOM. React handles all UI updates internally.

## Components and State Ownership
Not every component needs to manage state. Some components only display information, while others control how data changes. The component that creates the state is known as the state owner. Other components receive data through props.
When multiple components need access to the same data, the state is moved to their closest common parent. This pattern is called lifting state up.

## Passing Functions as Props
Props are not limited to just data. Functions can also be passed as props.
This allows child components to trigger actions that update state in the parent component. The child does not need to know how the logic works; it only needs to call the function it receives. This pattern helps keep components reusable and well organized.

## Reusable Components
React encourages the creation of reusable components.
Instead of hardcoding values, components can accept props and behave differently depending on what is passed to them. This makes applications easier to maintain and reduces repeated code.

Controlled Components
In React forms, inputs are usually controlled using state.
This means the value of the input is stored in state, and any change to the input updates the state. React always knows the current value of the input. Controlled components make form handling more predictable and easier to debug.

## The useEffect Hook
Some actions do not belong directly inside the rendering logic. These actions are called side effects. Examples include updating the page title, fetching data, or logging values. The useEffect hook is used to handle side effects in function components. React runs the effect after rendering, and it can also clean up the effect when the component is removed.

## Advanced React Hooks

### useMemo Hook
useMemo helps improve performance by remembering the result of expensive operations. If a calculation has been done before for the same input, React reuses the stored result instead of recalculating. 
const expensiveValue = useMemo(() => computeSomething(num), [num]);

### useContext Hook
useContext helps avoid “prop drilling.” It lets child components access data from a Context Provider directly, so we don’t have to pass props through components that don’t need them.
const theme = useContext(ThemeContext);

## useReducer Hook
useReducer is like useState but uses a reducer function to manage state. The reducer takes the previous state and an action, then returns a new state. It’s useful for shared or complex state without needing extra libraries like Redux.
const [state, dispatch] = useReducer(reducer, initialState);

These hooks make React apps faster, cleaner, and easier to manage, giving function components more power and flexibility.

## Conclusion
React hooks allow function components to manage state, handle side effects, and respond to user actions.
By understanding useState, props, events, and useEffect, developers can build dynamic and interactive user interfaces without working directly with the DOM. Just like React itself, hooks focus on simplicity, clarity, and reusability.

## JavaScript HTML DOM Document
The HTML DOM document object is the top-level owner of all other objects in your web page. It represents your entire web page and is always the starting point when you want to access or manipulate any element in HTML.

### Finding Elements
•	document.getElementById(id) – finds an element by its ID
•	document.getElementsByTagName(name) – finds elements by their tag name
•	document.getElementsByClassName(name) – finds elements by their class name
## Changing Elements
•	element.innerHTML = "new content" – change the inner HTML
•	element.attribute = new value – update an attribute
•	element.style.property = new style – modify the style
•	element.setAttribute(attribute, value) – set an attribute
## Adding, Removing, or Replacing Elements
•	document.createElement(element) – create a new element
•	document.appendChild(element) – add it to the page
•	document.removeChild(element) – remove an element
•	document.replaceChild(new, old) – replace an element
•	document.write(text) – write directly to the HTML output

The document object is the gateway to controlling and dynamically updating everything on your web page. Understanding it is key to building interactive web pages.


# Education Landing Page (React)
 
This project is a responsive education Home/landing page built with React.  

It was created to translate a Figma design into clean, structured, and reusable React components while paying close attention to layout, spacing, and responsiveness.

The focus of this project is not just how it looks, but how the code is organised and easy to maintain.

##  Tech Stack

- React (Vite)
- CSS (Flexbox & media queries)
- CSS (Flexbox)
- SVG icons imported as React components
- Figma (for design reference)

##  Features

- Responsive header with top contact bar and navigation
- Hero section with call-to-action buttons
- Clean component-based structure
- Consistent class naming using hyphens

##  Project Structure

src/
 ├── components/
 │   ├── Header/
 │   ├── HeroSection/
 │   ├── featuresSection/
 │   ├── CoursesSection/
 │   └── Footer/
 ├── assets/
 │   ├── icons/
 │   └── images/
 ├── pages/
 │   └── HomePage.jsx
 └── App.jsx


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

