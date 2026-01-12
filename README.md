# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. Open the terminal
2. Initiate a react project using vite 
3. Switch into the project directory and install npm dependencies. This project had the extra one of date fns
4. Make necessary imports at the top of the file: 
   //use state and use effect from react: for state retention and effect
   //format from date fns: for formatting the date
   //app.css locally: for implementing styling
5. Create the function app() that holds the logic
6. Date is the current state of the date, setDate is the function that changes it. Set the array of these two equal to useState that takes in the parameter of newDate()
7. Define the use effect function. It basically updates the current date every second by employing set interval and clear interval functionalities
8. Use the format function to display the date as a human readable string. date is the current date 'state' PP is current date. pp is current time. 
9. Use jsx to return the formatted date within a p tag.
10. In CSS assign the p tag the color of aqua
11. Export the App() function to be used by main.jsx 
12. To launch the app, run: npm run dev in the terminal. If successful this should create a port on which to view the webpage. 