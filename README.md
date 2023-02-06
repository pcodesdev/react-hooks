# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# React Hooks

React Hooks are functions that let you "hook into" React features. With hooks, you can extract state logic, use effects, and manage updates to your components without having to write classes. Hooks let you reuse stateful logic across your functional components and can make your code cleaner and more readable. Some of the most commonly used hooks are `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, etc.

# useState

`useState` is a hook in React that allows functional components to have state, which is a way to manage data that can change and affect the component's behavior and render.

`useState` returns an array with two elements: the current state and a function to update it. The state is initialized when the component is first rendered, and it can be updated by calling the update function.

Here's an example of how to use the `useState` hook:

```javascript
import React, { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In this example, the `useState` hook is used to manage the state of the `count` which is initially set to `0`. The `count` state is displayed on the page and the `setCount` function is used to update the state in response to a button click event.

# useEffect

Think of the `useEffect` hook in React as a chef in a kitchen. Just like a chef is called to cook a specific dish (side effect), the `useEffect` hook is called to perform a specific side effect (e.g. fetch data).

The chef can be instructed to clean up after cooking (cleanup function), similarly, the `useEffect` hook can also be instructed to clean up after itself by returning a cleanup function.

The `useEffect` hook takes two arguments: a callback function that performs the side effect and an array of ingredients (dependencies). The chef will re-cook the dish whenever one of the ingredients changes or when the order is re-placed (component re-renders).

In summary, the `useEffect` hook helps you perform side effects in a React component, just like a chef cooks a dish in the kitchen, and it gives you control over when and how they are performed.

Example code that fetches random meme images from an api:

```javascript
import React, { useState, useEffect } from 'react';
const API_URL = 'https://api.imgflip.com/get_memes';
function DevMemeGenerator() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  useEffect(() => {
    async function fetchMemes() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMemes(data.data.memes);
    }
    fetchMemes();
  }, []);
  function handleClick() {
    setSelectedMeme(memes[Math.floor(Math.random() * memes.length)].url);
  }
  return (
    <div>
      <button onClick={handleClick}>Generate Dev Meme</button>
      {selectedMeme ? <img src={selectedMeme} alt="Random Dev Meme" /> : 'Loading...'}
    </div>
  );
}
export default DevMemeGenerator;
```

# useContext

`useContext` is a React Hook that allows you to access the value of a Context object from within a functional component. It provides a way to share data across components in your React application without having to pass props down manually through multiple levels of the component tree. `useContext` takes a Context object as an argument and returns the current value of that Context. You can then use the returned value in your component to determine what to render or how to update the state. The `useContext` Hook is a convenient and efficient way to consume context data in React.

Let's say you have a theme for your app and you want to allow users to switch between light and dark mode. You can create a context to store the theme and use it in multiple components.

Below is a code example to change the text font depending on a particular context:

```javascript
import React, { useState, useContext } from 'react';
const FontContext = React.createContext({
  font: 'Arial',
  toggleFont: () => {}
});
function App() {
  const [font, setFont] = useState('Arial');
  const toggleFont = () => {
    setFont(font === 'Arial' ? 'Verdana' : 'Arial');
  };
  return (
    <FontContext.Provider value={{ font, toggleFont }}>
      <button onClick={toggleFont}>Toggle Font</button>
      <OtherComponent />
    </FontContext.Provider>
  );
}
function OtherComponent() {
  const { font } = useContext(FontContext);
  return (
    <div style={{ fontFamily: font }}>
      This is some text in {font} font.
    </div>
  );
}
export default App;
```

# useReducer

The `useReducer` hook in React is a hook that allows you to manage state in your application. It's similar to the `useState` hook, but with some additional features.

The `useReducer` hook takes two arguments: the first is the initial state, and the second is a function that returns the new state based on the current state and an action. The function is commonly referred to as the "reducer" function.

With the `useReducer` hook, you can manage complex state updates that depend on the current state and an action. This can help you write cleaner and more readable code, as you can encapsulate all the logic for updating state in a single function.

The difference between `useReducer` and `useState` is that `useState` is a simpler hook for managing state, and is suitable for most simple state updates. `useReducer`, on the other hand, is better suited for more complex state updates that depend on the current state and an action.

Here's an example of a `useReducer` hook that toggles the background color and text color for readability:

```javascript
import React, { useReducer } from 'react';
const initialState = {
  backgroundColor: 'white',
  textColor: 'black'
};
function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return {
        backgroundColor: state.backgroundColor === 'white' ? 'black' : 'white',
        textColor: state.textColor === 'black' ? 'white' : 'black'
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ backgroundColor: state.backgroundColor, color: state.textColor }}>
      <p>Hello, World!</p>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Colors</button>
    </div>
  );
}
export default App;
```

# useCallback

Let's say you have a parent component that renders a child component. The child component receives a callback function from the parent as a prop, and the child component re-renders every time the parent component re-renders, even if the callback prop has not changed. This can lead to unnecessary re-renders and decreased performance.

To avoid this, we can use the `useCallback` hook in the parent component to memoize the callback, so that it only changes if one of its dependencies changes. Here's an example:

```javascript
import React, { useState, useCallback } from 'react';
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const handleCount = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);
  return (
    <div>
      <ChildComponent count={count} handleCount={handleCount} />
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};
const ChildComponent = ({ count, handleCount }) => {
  console.log('Child component re-rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increase count</button>
    </div>
  );
};
```

In this example, when the value of the input is changed, the parent component re-renders, but the child component does not re-render because `handleCount` has not changed. This can significantly improve performance in larger and more complex applications.

# useMemo

Imagine you have a component that displays a list of items, each with its own price. You want to display the total price of all items in the list. The calculation of the total price can be expensive, taking into account various factors such as the number of items, the prices of each item, and any discounts or taxes that may apply.

You can use the `useMemo` hook to memoize the calculation of the total price, so that it is only re-calculated when the items or their prices change. Here's an example:

```javascript
import React, { useState, useMemo } from 'react';
const ItemList = () => {
  const [items, setItems] = useState([
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
  ]);
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.name}>{item.name} ({item.price})</li>
        ))}
      </ul>
      <p>Total price: {totalPrice}</p>
      <button onClick={() => setItems([...items, { name: 'Item 4', price: 40 }])}>
        Add item
      </button>
    </div>
  );
};
export default ItemList;
```

In this example, when the user adds an item to the list, the `totalPrice` is only re-calculated if the list of items has changed. This can improve the performance of the component and prevent unnecessary re-calculations.

# Conclusion

In conclusion, the React Hooks API provides developers with a powerful set of tools for building dynamic and responsive user interfaces. Whether you are looking to manage state, implement side-effects, pass data between components, or optimize performance, the hooks have got you covered. With useState, you can manage state with ease, useEffect lets you manage side-effects in a performant way, useContext provides an elegant solution for data sharing, useReducer lets you manage complex state updates, useCallback is perfect for optimizing performance-critical functions, and useMemo helps to avoid unnecessary re-renders. Each of these hooks has its own unique set of features and benefits, and they can all be used in combination to create truly amazing and user-friendly applications. If you are looking to take your React development to the next level, be sure to explore these hooks and all that they have to offer.
