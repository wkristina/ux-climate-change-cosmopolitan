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
        indexYear2: 263,
        year1: 1751,
        year2: 2014,
        legend: 0
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
        tempIndexYear: index,
        year1: Year

      })
       };
    
       handleInputSecond  = Year => {
        let index2 = this.state.emissions.findIndex(
          emission => emission.Year === parseInt(Year)
      );
        this.setState({
          tempIndexYear2: index2,
          year2: Year
        })
       };
       
       compare = () =>{
        if (this.state.tempIndexYearindex !== -1 && this.state.tempIndexYear2 !== -1) 
        {
          this.setState({indexYear: this.state.tempIndexYear});
          this.setState({indexYear2: this.state.tempIndexYear2});
          this.setState({legend: <Legend />});
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
     <div >
       <div class="ui centered two column grid">
       <div className="column"><h1> CO2 Emissions </h1> </div> 
       <div className="centered two column row">
       <div className="column"> <BarChart width={500} height={300} data={dataBarChart}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       {this.state.legend}
       <Bar name ={this.state.year1} dataKey="CO2" fill="#8884d8" minPointSize={5} />
        <Bar name ={this.state.year2} dataKey="CO" fill="#82ca9d" minPointSize={5} />
      </BarChart>
      </div>
      </div>
      </div>
      <CompareBoxes handleInputFirst={this.handleInputFirst}
        handleInputSecond={this.handleInputSecond}
        compare={this.compare}
        year1={this.state.tempIndexYear}
        year2={this.state.tempIndexYear2}/>
        
        <a className="linkTo" href="/sea">See data for the sea level here!</a>
        
            </div>
          );
    }
}
 
export default CO2Emission;