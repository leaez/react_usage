import React from 'react';
import logo from './logo.svg';
import tw from 'twin.macro';
import './App.css';
import Particles from './components/particle';
import AddBlog from './components/addBlog';
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
    <Particles
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    />
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        top: 0,
        right: 0,
      }}>
      <AddBlog />
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
