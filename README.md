# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Question $ Answer
What is JSX, and why is it used?
JSX is a syntax extension for JavaScript (JS) that looks like HTML and it is used with React. It allows developers to write UI components in a more readable and declarative way by mixing markup with JS logic.

What is the difference between State and Props?
Props are used o pass data from a parent component to child component and read-only. 
State is managed within a component itself and can change over time, usually in response to user actions

What is the useState hook, and how does it work?
It's a react function that lets you add state to functional components. It works by returning an array with two values.

How can you share state between components in React?
By lifting the states up to a common parent component and passing it down as props. 

How is event handling done in React?
It is the process of managing user interactions using event handler functions. It uses camelCase syntax and passes functions instead of strings unlike plain HTML
