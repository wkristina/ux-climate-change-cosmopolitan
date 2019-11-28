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
        if (co2  === undefined) return <img src="https://lh3.googleusercontent.com/0Ni2_5OvdbMMVqnbSdbyaShs2bAhnPb3l2CQrZ1kZgRZE4C7W1lhbIpNxxtuwdiPCoQS-mvHLduj_kVljyQPBkfoQ1bxhwyJoXjmPenO69sWYstYdqigM1l7SQ_dR-MhKCXoTTdPLqB8DBIBueRTNOgxFKMRJKCvUGp6lw8-dy21k1aFs_pSiIUveTkTERdHo3EOAe3875FuZ2Di2HW_5u6BMsDmvMt7ZlIC8Tk_47BpQGwYczdE8cEt0bw_N2vyfQ4tTz3PvEYL5crH0P4clqT21ql6RhZyxfi2WEdlc2U4dHuw69LC_8-KFaUQEJSBD4K_oGE2sQLP1XN7eaQnLhiQvbM3Jdx6fZvV-oNLKkNYGsRc0SXUCDZdYRpj79D3KhdTu9BjSgPKv_CNs10OXwKVso6GFr-9i7Ssjd-PrBC1nPuiI-I1CVNDTEJgIWWalhyEMmCNJaBcyhLtDMtxygQzu900amDtWpw-PK3j2F0mUpCXUUqC6KpQQ3TQdC50je4pIS-ryOImCkiGxPrdhK5Rvq4QkwJjBMjtKPPq8lf4_kFX6yzA7SWUc9Spq1OBekoDNA9Mp2kE_okMA90CzZz4_ygCi6jOn89EGZKQqCokYEU5KvWfXlJgRyZaIfR3uWm9dNQeBAFRmvYKIgt9Fl2hEGwXZAlQ-vT3OHGVpSM7v9XriRt97ohkdAJmEHrnY8qfclox65QEh1jkiK0p_Z-08OQPEgZ0sCKFErEhTSfnJG_d=s200-no" alt="loading"/>;
        if (co  === undefined) return <img src="https://lh3.googleusercontent.com/0Ni2_5OvdbMMVqnbSdbyaShs2bAhnPb3l2CQrZ1kZgRZE4C7W1lhbIpNxxtuwdiPCoQS-mvHLduj_kVljyQPBkfoQ1bxhwyJoXjmPenO69sWYstYdqigM1l7SQ_dR-MhKCXoTTdPLqB8DBIBueRTNOgxFKMRJKCvUGp6lw8-dy21k1aFs_pSiIUveTkTERdHo3EOAe3875FuZ2Di2HW_5u6BMsDmvMt7ZlIC8Tk_47BpQGwYczdE8cEt0bw_N2vyfQ4tTz3PvEYL5crH0P4clqT21ql6RhZyxfi2WEdlc2U4dHuw69LC_8-KFaUQEJSBD4K_oGE2sQLP1XN7eaQnLhiQvbM3Jdx6fZvV-oNLKkNYGsRc0SXUCDZdYRpj79D3KhdTu9BjSgPKv_CNs10OXwKVso6GFr-9i7Ssjd-PrBC1nPuiI-I1CVNDTEJgIWWalhyEMmCNJaBcyhLtDMtxygQzu900amDtWpw-PK3j2F0mUpCXUUqC6KpQQ3TQdC50je4pIS-ryOImCkiGxPrdhK5Rvq4QkwJjBMjtKPPq8lf4_kFX6yzA7SWUc9Spq1OBekoDNA9Mp2kE_okMA90CzZz4_ygCi6jOn89EGZKQqCokYEU5KvWfXlJgRyZaIfR3uWm9dNQeBAFRmvYKIgt9Fl2hEGwXZAlQ-vT3OHGVpSM7v9XriRt97ohkdAJmEHrnY8qfclox65QEh1jkiK0p_Z-08OQPEgZ0sCKFErEhTSfnJG_d=s200-no" alt="loading"/>;
    
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
      <CompareBoxes handleInputFirst={this.handleInputFirst}
        handleInputSecond={this.handleInputSecond}
        compare={this.compare}
        year1={this.state.tempIndexYear}
        year2={this.state.tempIndexYear2}/>
      </div>
            </div>
          );
    }
}
 
export default CO2Emission;