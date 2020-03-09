import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { WeatherPanel } from './components/WeatherPanel';

const App = () => (
  <>
    <WeatherPanel />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));

