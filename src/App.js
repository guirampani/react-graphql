// import './App.css';
// import React, { Component } from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import graphql2chartjs from 'graphql2chartjs';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';


// class App extends Component {

//   render() {
//     const data = {
//       "labels": ["label1", "label2", "label3", "label4"],
//       "datasets": [{
//         "label": "Sample dataset",
//         "data": [45, 23, 56, 55],
//         "pointBackgroundColor": ["red", "brown", "green", "yellow"],
//         "borderColor": "brown", 
//         "fill": false
//       }]
//     }
    
//     return (
//       <div
//         style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px'}}
//       >
//         <Line
//           data={data}
//         />
//       </div>
//     );
//   }
// };

// const App = () => (
//   <Query query = {gql`
//   query {
//     releases_by_status {
//       label: release_status
//       data: count
//     }
//   }
//   `}>{({loading, error, data}) => {

//     if (data) {
//       const g2c = new graphql2chartjs(data, 'bar');
//       return <Bar data = {g2c.data} />
//     } else {
//       return 'Loading/error';
//     }
//   }}


//   </Query>
// );


import React from 'react';
import './App.css';
//import NavBar from './Navbar';
import { BasicBarChart } from './charts/BasicBarChart';


const App = () => (
  <div>
    <div style={{margin: '10px', paddingTop: '65px'}}>
      <BasicBarChart/><p>hllooo</p>
     </div>
  </div>
);

// class App extends Component {

//   render() {
//     return (
//      <div>
//       <div style={{margin: '10px', paddingTop: '65px'}}>
//       <BasicBarChart/><p>hellooooo</p>
//       </div>
//     </div>
//     );
//   }
// };

export default App;
