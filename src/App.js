import React from 'react';
import logo from './logo.svg';
import tw from 'twin.macro';
import './App.css';
import Particles from './components/particle';
import AddBlogs from './components/addBlogs';
//import AddBlogs from './components/formikExample';
const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-t from-electric to-ribbon`,
  ],
};
//css={styles.container({ hasBackground: true })}
const App = () => (
  <>
    <div tw="relative z-0 top-0 right-0 bg-gray-100">
      <AddBlogs />
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://rreactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  </>
);

/*
    <Particles
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    />

    <div tw="flex flex-col justify-center h-full gap-y-5">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://rreactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://rreactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
