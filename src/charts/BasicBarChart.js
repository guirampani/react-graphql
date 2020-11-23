import React from 'react';
import { Doughnut } from 'react-chartjs-2';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import SyntaxHighlighter from 'react-syntax-highlighter';
import graphql2chartjs from 'graphql2chartjs';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = `
    query {
        releases_by_status {
            label: ReleaseStatus
            data: count
        }
    }`;

// Chart component
const Chart = ({ query }) => (
  <Query
    query={gql`${query}`}
  >
    {
      ({data, error, loading}) => {
        if (loading) {
          return <div className="loadingIndicator">Please wait </div>;
        } else if (error) { <div className="loadingIndicator">error </div>}
        // create graphql2chartjs instance
        const g2c = new graphql2chartjs(data, (datasetName, dataPoint) => {
          console.log(dataPoint.label);
          console.log(datasetName);
          return {
            chartType: 'doughnut',
            backgroundColor: dataPoint.label === 'Draft' ? '#64B2F7' : (dataPoint.label === 'In Progress' ? "#F78C42" : "#6EF164"),
          }
        });

        return (
          <Doughnut data={g2c.data} 
          options={
                    { legend: {
                        display: true,
                        reverse: true
                      }
                    }
                  } />
        )
      }
    }
  </Query>
)

/****************************************UTILS*****************************************/

const BasicBarChart = ({ path }) => {
  return (
    <div style={{margin: '10px'}}>
      <div key="bar">
        <div style={{marginBottom: '20px'}} id="doughnut">
            <h2 style={{margin: '10px', textAlign: 'center'}}>Doughnut Chart</h2>
            <div className="chartWrapper">
              <div className="half_screen">
                <Chart query={query}/>
              </div>
            </div>
          </div>
        <hr />
      </div>
    </div>
  );
}

export { BasicBarChart };