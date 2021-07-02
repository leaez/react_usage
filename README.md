This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
&& use electron / electron-build / react-app-rewired
## Available Scripts

In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
2021.7
  update react-script to 4.0.3
  add creco
  add tailwoind twin.macro


### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### guide
1. npx create-react-app my-app  && cd my-app

2. create public/electron.js
3.  package.json 
  "scripts" :  "electron-dev": "concurrently \"BROWSER=none yarn start\" \"wait-on http://localhost:3000 && electron .\""
  "main": "public/electron.js",
4. config-overrides.js
module.exports = config => {
  config.target = 'electron-renderer';
  return config;
}

5. dev: 
  yarn electron-dev
