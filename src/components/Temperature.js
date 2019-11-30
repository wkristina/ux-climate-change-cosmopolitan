import React, { Component } from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import CompareBoxes from './CompareBoxes.js';

class Temperature extends Component {
    state = { 
        temperatureChange: []
     }
    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            temperatureChange: data
        })
      }

    render() { 
        let temperature=this.state.temperatureChange;
        if (temperature  === undefined) return <div className="loadingContainer"><div className="loadingWrapper"><img src="https://lh3.googleusercontent.com/0Ni2_5OvdbMMVqnbSdbyaShs2bAhnPb3l2CQrZ1kZgRZE4C7W1lhbIpNxxtuwdiPCoQS-mvHLduj_kVljyQPBkfoQ1bxhwyJoXjmPenO69sWYstYdqigM1l7SQ_dR-MhKCXoTTdPLqB8DBIBueRTNOgxFKMRJKCvUGp6lw8-dy21k1aFs_pSiIUveTkTERdHo3EOAe3875FuZ2Di2HW_5u6BMsDmvMt7ZlIC8Tk_47BpQGwYczdE8cEt0bw_N2vyfQ4tTz3PvEYL5crH0P4clqT21ql6RhZyxfi2WEdlc2U4dHuw69LC_8-KFaUQEJSBD4K_oGE2sQLP1XN7eaQnLhiQvbM3Jdx6fZvV-oNLKkNYGsRc0SXUCDZdYRpj79D3KhdTu9BjSgPKv_CNs10OXwKVso6GFr-9i7Ssjd-PrBC1nPuiI-I1CVNDTEJgIWWalhyEMmCNJaBcyhLtDMtxygQzu900amDtWpw-PK3j2F0mUpCXUUqC6KpQQ3TQdC50je4pIS-ryOImCkiGxPrdhK5Rvq4QkwJjBMjtKPPq8lf4_kFX6yzA7SWUc9Spq1OBekoDNA9Mp2kE_okMA90CzZz4_ygCi6jOn89EGZKQqCokYEU5KvWfXlJgRyZaIfR3uWm9dNQeBAFRmvYKIgt9Fl2hEGwXZAlQ-vT3OHGVpSM7v9XriRt97ohkdAJmEHrnY8qfclox65QEh1jkiK0p_Z-08OQPEgZ0sCKFErEhTSfnJG_d=s200-no" alt="loading"/></div></div>;
        var i;
        const temperatureData = [];
        for(i=0; i < temperature.length; i++){
            temperatureData.push({name: "Mean", mean: temperature[i]["Mean"], year: temperature[i]["Year"]});
            console.log(temperatureData);
        }
        
        let temp;
        
        return (  
            <div>
                <h1>test temp</h1>
                <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      	<CartesianGrid />
        <XAxis dataKey="year"/>
      	<YAxis dataKey="mean" />
          {temperatureData.map(temp, index =>
        <Scatter name='Mean' data={temperatureData[index]}  fill='#8884d8'/> )}
      </ScatterChart>
                <CompareBoxes/>
            </div>
        );
    }
}
 
export default Temperature ;