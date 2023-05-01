import { Fragment } from 'react';
import Crypto from './components/crypto';
import classes from "./App.module.css";
import Nav from './components/nav';

function App() {
  return (
    <div className={classes.main}>
      <Nav/>
      <Crypto/>
    </div>
  );
}

export default App;
