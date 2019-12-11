import React, { Component } from 'react';
import CompareBoxes from './CompareBoxes.js';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class GlacierSize extends Component {
    state = { 
        glacierChange: []
     }

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0 ";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            glacierChange: data
        })
      }

    render() { 
        return ( 
            <div>
            <h1>test glacier</h1>
            <LineChart width={600} height={300} data={this.state.glacierChange}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="Year"/>
       <YAxis />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Line type="monotone" dataKey="Mean cumulative mass balance" stroke="#8884d8"dot={false}/>
       <Line type="monotone" dataKey="Number of observations" stroke="#82ca9d" dot={false} />
      </LineChart>
            <CompareBoxes/>
            </div>
         );
    }
}
 
export default GlacierSize;