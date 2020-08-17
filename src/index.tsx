import * as React from 'react';
import { render } from 'react-dom';
import { Practice } from './pages/practice';

const App = () => {
  return <Practice />
}

render(<App />, document.getElementById('app'));