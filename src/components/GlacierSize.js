import React, { Component } from 'react';
import CompareBoxes from './CompareBoxes.js';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class GlacierSize extends Component {
    state = { 
        glacierChange: [],
        tempIndex: 0,
        tempIndex2: 0,
        index1: 0,
        index2: 0,
        validityCheck: false,
        indexYear1: 0,
        indexYear2: 0,
        tempIndexYear1: 0,
        tempIndexYear2: 0
     }

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0 ";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            glacierChange: data
        })
      }

      handleInputFirst  = Year => {
        let index = this.state.glacierChange.findIndex(
          glacier => glacier.Year === parseInt(Year)
      );
     
      this.setState({
        tempIndex: index,
        tempIndexYear1: Year})
    }

      handleInputSecond  = Year => {
        let index2 = this.state.glacierChange.findIndex(
          glacier => glacier.Year === parseInt(Year)
      );
     
      this.setState({
        tempIndex2: index2,
        tempIndexYear2: Year})
    }

    compare = () =>{
        if (this.state.tempIndex !== -1 && this.state.tempIndex2 !== -1) 
        {
          this.setState({validityCheck: true});
          this.setState({index1: this.state.tempIndex});
          this.setState({index2: this.state.tempIndex2});
          this.setState({indexYear1: this.state.tempIndexYear1});
          this.setState({indexYear2: this.state.tempIndexYear2});
        } else {
          alert("Year could not be found. Please enter a valid year between 1945 and 2014.");
        }
      }

    render() { 
        let box;
        if (this.state.validityCheck === true){
            box =  <div class="ui padded segment">
            <div class="ui top right attached label">Comparison</div>
        <p>{this.state.indexYear1}: {this.state.glacierChange[this.state.index1]["Mean cumulative mass balance"]} | {this.state.glacierChange[this.state.index1]["Number of observations"]}</p>
        <p>{this.state.indexYear2}: {this.state.glacierChange[this.state.index2]["Mean cumulative mass balance"]} | {this.state.glacierChange[this.state.index2]["Number of observations"]}</p>
          </div>}
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
            <CompareBoxes
             handleInputFirst={this.handleInputFirst}
             handleInputSecond={this.handleInputSecond}
             compare={this.compare}
             year1={this.state.tempIndexYear1}
             year2={this.state.tempIndexYear2}/>
            {box}
            </div>
         );
    }
}
 
export default GlacierSize;