import React, { Component } from 'react';
import CompareBoxes from './CompareBoxes.js';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


class SeaLevel extends Component {
    state = { 
        seaLevelChange: [],
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
        const url = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0 ";
        const response = await fetch(url);
        const data = await response.json();
        let filtered =[];
    for (let i = 0; i < data.length; i++){
      filtered.push(data[i].Time);
      let date = new Date(filtered[i]);
      data[i].Time = date.getFullYear();  
    }
        this.setState({
            seaLevelChange: data
        })
      }

      handleInputFirst  = Time => {
        let index = this.state.seaLevelChange.findIndex(
          sea => sea.Time === parseInt(Time)
      );
     
      this.setState({
        tempIndex: index,
        tempIndexYear1: Time})
    }

      handleInputSecond  = Time => {
        let index2 = this.state.seaLevelChange.findIndex(
          sea => sea.Time === parseInt(Time)
      );
     
      this.setState({
        tempIndex2: index2,
        tempIndexYear2: Time})
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
          alert("Year could not be found. Please enter a valid year between 1880 and 2013.");
        }
      }

    render() { 
        
        let box;
        if (this.state.validityCheck === true){
            box =  <div class="ui padded segment">
            <div class="ui top right attached label">Comparison</div>
        <p>{this.state.indexYear1}: {this.state.seaLevelChange[this.state.index1].GMSL}</p>
        <p>{this.state.indexYear2}: {this.state.seaLevelChange[this.state.index2].GMSL}</p>
          </div>
        }
        return ( 
            <div>
                <h1> sea</h1>
                <LineChart width={600} height={300} data={this.state.seaLevelChange}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis  dataKey="Time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Line type="monotone" dataKey="GMSL" stroke="#8884d8" activeDot={{r: 8}} dot={false}/>
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
 
export default SeaLevel;