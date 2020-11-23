import React from 'react';
import './App.css';
import { BasicBarChart } from './charts/BasicBarChart';
import { LineChart } from './charts/LineChart';


const App = () => (
  <div>
    <div style={{margin: '10px', width: '700px', height: '900px'}}>
      <BasicBarChart/>
      <LineChart/>
    </div>
  </div>
);

export default App;
