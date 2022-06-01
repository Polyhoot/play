# Polyhoot! Web app to play games

<img width="120" height="120" alt="Polyhoot! Logo"
     src="https://github.com/Polyhoot/.github/blob/main/logo.jpeg?raw=true" align="right">
     
### Lightweight Web client for Polyhoot! game. Made for playing from iOS and older Android versions


**For demo visit [polyhoot.vercel.app](https://polyhoot.vercel.app/)**
## Features

- Selfhosting available
- Server-side Rendering
- Beautiful UI
- Connect to games from unsupported platforms

## Tech

We use a number of open source projects to work properly:

- [TypeScript](https://github.com/microsoft/TypeScript) - TypeScript is a strongly typed programming language that builds on JavaScript
- [NextJS](https://github.com/vercel/next.js) - SSR framework for react applications
- [ReactJS](https://github.com/facebook/react) - JavaScript library for building user interfaces.
- [Grommet](https://github.com/grommet/grommet) - grommet is a react-based framework & components library
- [nanostores](https://github.com/nanostores/nanostores) - A tiny state manager for React

And of course Polyhoot! itself is open source with a [public repository](https://github.com/Polyhoot/web)
 on GitHub.

## Installation

Polyhoot! requires [Node.js](https://nodejs.org/) v12+ to run. **Latest LTS is recommended!**
It also requires [Yarn](https://yarnpkg.com/).

Install the dependencies and devDependencies and start the server.

Change `getServerIp.ts`.

```sh
cd web
yarn
yarn start
```


## Development

Want to contribute? Great!

Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run this commands.

```sh
yarn dev
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start` 

`next start` starts the application in production mode.\
The application should be compiled with next build first.

The application will start at `http://localhost:3000` by default. 

### `yarn lint`

`next lint` runs ESLint for all files in the `pages`, `components`, and `lib` directories.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
## License

`Apache License 2.0`

**Free Software, Hell Yeah!**