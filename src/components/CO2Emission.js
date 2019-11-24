import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell
  } from 'recharts';
import CompareBoxes from './CompareBoxes.js';

class CO2Emission extends Component {
    state = { 
        emission: []
     }
    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0 ";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({emission: data});
      }
    render() { 
        let co2 = this.state.emission;
        if (co2 === undefined) return <p>There is no data.</p>;
    
        const dataBarChart = [
            {name: 'Gas', CO2: co2["Gas Fuel"]},
            {name: 'Liquid', CO2: co2["Liquid Fuel"]},
            {name: 'Solid', CO2: co2["Solid Fuel"]},
            {name: 'Cement', CO2: co2["Cement"]}
        ];

        const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#BB8042"];

        return (
     <div style={{ width: "350px", height: "400px", float: "left" }}>
        <ResponsiveContainer>
        <BarChart width={500} height={300} data={dataBarChart}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Bar dataKey="CO2" fill="#8884d8">
           <Cell fill={COLORS[0]} />)
           <Cell fill={COLORS[1]} />)
           <Cell fill={COLORS[2]} />)
           <Cell fill={COLORS[3]} />)
           <Cell fill={COLORS[4]} />)
         </Bar>
      </BarChart>
      </ResponsiveContainer>
      <CompareBoxes/>
            </div>
          );
    }
}
 
export default CO2Emission;