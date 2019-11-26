import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend
  } from 'recharts';
import CompareBoxes from './CompareBoxes.js';

class CO2Emission extends Component {
    state = { 
        emissions: [],
        tempIndexYear: 0,
        tempIndexYear2: 0,
        indexYear: 0,
        indexYear2: 0,
        searchedYearData: [],
        searchYear2Data: []
     }
    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({emissions: data});
      }
      
      handleInputFirst  = Year => {
        let index = this.state.emissions.findIndex(
          emission => emission.Year === parseInt(Year)
      );
      this.setState({
        tempIndexYear: index
      })
      console.log(index);
       };
    
       handleInputSecond  = Year => {
        let index2 = this.state.emissions.findIndex(
          emission => emission.Year === parseInt(Year)
      );
        this.setState({
          tempIndexYear2: index2
        })
        console.log(index2);
       };
       
       //why are index & index2 always -1? findIndex not working as it is supposed to
      
       compare = () =>{
        if (this.state.tempIndexYearindex !== -1 && this.state.tempIndexYear2 !== -1) 
        {
          this.setState({indexYear: this.state.tempIndexYear});
          this.setState({indexYear2: this.state.tempIndexYear2});
        } else {
          alert("Year could not be found.");
        }
        
       }

    render() { 
        let co2 = this.state.emissions[this.state.indexYear];
        let co = this.state.emissions[this.state.indexYear2];
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
        compare={this.compare}
        year1={this.state.tempIndexYear}
        year2={this.state.tempIndexYear2}/>
            </div>
          );
    }
}
 
export default CO2Emission;