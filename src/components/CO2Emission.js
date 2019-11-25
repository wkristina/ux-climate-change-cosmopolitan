import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend
  } from 'recharts';
import CompareBoxes from './CompareBoxes.js';

class CO2Emission extends Component {
    state = { 
        emission: [],
        tempIndexYear: 0,
        tempIndexYear2: 0,
        indexYear: 0,
        indexYear2: 0
     }
    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0 ";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({emission: data});
      }
      
      handleInputFirst  = event => {
        this.setState({
          tempIndexYear: event.target.value
        })
        console.log(this.state.tempIndexYear);
       };
    
       handleInputSecond  = event => {
        this.setState({
          tempIndexYear2: event.target.value
        })
        console.log(this.state.tempIndexYear2);
       };

       //figure this shit out, to have event value from box
       compare = (tempIndexYear, tempIndexYear2) =>{
        let index = this.state.Co2Emission.findIndex(
          co2 => co2.tempIndexYear === parseInt(tempIndexYear)
        );
        let index2 = this.state.Co2Emission.findIndex(
          co2 => co2.tempIndexYear2 === parseInt(tempIndexYear2)
        );
        if (this.state.tempIndexYear !== -1 && this.state.tempIndex2Year !== -1) 
        {
          this.setState({indexYear: this.state.tempIndexYear});
          this.setState({indexYear2: this.state.tempIndexYear2});
          
        } else {
          alert("Year could not be found.");
        }
        console.log(this.state.indexYear);
        console.log(this.state.indexYear2);
       }

    render() { 
        let co2 = this.state.emission[this.state.indexYear];
        let co = this.state.emission[this.state.indexYear2];
        if (co2  === undefined) return <p>There is no data.</p>;
        if (co  === undefined) return <p>There is no data.</p>;
    
        const dataBarChart = [
            {name: 'Gas', CO2: co2["Gas Fuel"], CO: co["Gas Fuel"]},
            {name: 'Liquid', CO2: co2["Liquid Fuel"], CO: co["Liquid Fuel"]},
            {name: 'Solid', CO2: co2["Solid Fuel"], CO: co["Solid Fuel"]},
            {name: 'Cement', CO2: co2["Cement"], CO: co["Cement"]}
        ];


        return (
     <div style={{ width: "350px", height: "400px", float: "left" }}>
        <ResponsiveContainer>
        <BarChart width={500} height={300} data={dataBarChart}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Legend />
       <Bar dataKey="CO2" fill="#8884d8" />
        <Bar dataKey="CO" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
      <CompareBoxes handleInputFirst={this.handleInputFirst}
        handleInputSecond={this.handleInputSecond}
        compare={this.compare}/>
            </div>
          );
    }
}
 
export default CO2Emission;