import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
  } from 'recharts';
import CompareBoxes from './CompareBoxes.js';

class CO2Emission extends Component {
    state = { 
        emissions: [],
        tempIndexYear: 0,
        tempIndexYear2: 0,
        indexYear: 0,
        indexYear2: 263,
        tempyear1: 1751,
        tempyear2: 2014,
        year1: 1751,
        year2: 2014
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
        tempyear1: Year

      })
       };
    
       handleInputSecond  = Year => {
        let index2 = this.state.emissions.findIndex(
          emission => emission.Year === parseInt(Year)
      );
        this.setState({
          tempIndexYear2: index2,
          tempyear2: Year
        })
       };
       
       compare = () =>{
        if (this.state.tempIndexYearindex !== -1 && this.state.tempIndexYear2 !== -1) 
        {
          this.setState({indexYear: this.state.tempIndexYear});
          this.setState({indexYear2: this.state.tempIndexYear2});
          this.setState({year1: this.state.tempyear1});
          this.setState({year2: this.state.tempyear2});
        } else {
          alert("Year could not be found. Please enter a valid year between 1751 and 2014.");
        }
        
       }

    render() { 
        let co2 = this.state.emissions[this.state.indexYear];
        let co = this.state.emissions[this.state.indexYear2];
        if (co2  === undefined) return <div className="loadingContainer"><div className="loadingWrapper"><img src="https://lh3.googleusercontent.com/0Ni2_5OvdbMMVqnbSdbyaShs2bAhnPb3l2CQrZ1kZgRZE4C7W1lhbIpNxxtuwdiPCoQS-mvHLduj_kVljyQPBkfoQ1bxhwyJoXjmPenO69sWYstYdqigM1l7SQ_dR-MhKCXoTTdPLqB8DBIBueRTNOgxFKMRJKCvUGp6lw8-dy21k1aFs_pSiIUveTkTERdHo3EOAe3875FuZ2Di2HW_5u6BMsDmvMt7ZlIC8Tk_47BpQGwYczdE8cEt0bw_N2vyfQ4tTz3PvEYL5crH0P4clqT21ql6RhZyxfi2WEdlc2U4dHuw69LC_8-KFaUQEJSBD4K_oGE2sQLP1XN7eaQnLhiQvbM3Jdx6fZvV-oNLKkNYGsRc0SXUCDZdYRpj79D3KhdTu9BjSgPKv_CNs10OXwKVso6GFr-9i7Ssjd-PrBC1nPuiI-I1CVNDTEJgIWWalhyEMmCNJaBcyhLtDMtxygQzu900amDtWpw-PK3j2F0mUpCXUUqC6KpQQ3TQdC50je4pIS-ryOImCkiGxPrdhK5Rvq4QkwJjBMjtKPPq8lf4_kFX6yzA7SWUc9Spq1OBekoDNA9Mp2kE_okMA90CzZz4_ygCi6jOn89EGZKQqCokYEU5KvWfXlJgRyZaIfR3uWm9dNQeBAFRmvYKIgt9Fl2hEGwXZAlQ-vT3OHGVpSM7v9XriRt97ohkdAJmEHrnY8qfclox65QEh1jkiK0p_Z-08OQPEgZ0sCKFErEhTSfnJG_d=s200-no" alt="loading"/></div></div>;
        if (co  === undefined) return <div className="loadingContainer"><div className="loadingWrapper"><img src="https://lh3.googleusercontent.com/0Ni2_5OvdbMMVqnbSdbyaShs2bAhnPb3l2CQrZ1kZgRZE4C7W1lhbIpNxxtuwdiPCoQS-mvHLduj_kVljyQPBkfoQ1bxhwyJoXjmPenO69sWYstYdqigM1l7SQ_dR-MhKCXoTTdPLqB8DBIBueRTNOgxFKMRJKCvUGp6lw8-dy21k1aFs_pSiIUveTkTERdHo3EOAe3875FuZ2Di2HW_5u6BMsDmvMt7ZlIC8Tk_47BpQGwYczdE8cEt0bw_N2vyfQ4tTz3PvEYL5crH0P4clqT21ql6RhZyxfi2WEdlc2U4dHuw69LC_8-KFaUQEJSBD4K_oGE2sQLP1XN7eaQnLhiQvbM3Jdx6fZvV-oNLKkNYGsRc0SXUCDZdYRpj79D3KhdTu9BjSgPKv_CNs10OXwKVso6GFr-9i7Ssjd-PrBC1nPuiI-I1CVNDTEJgIWWalhyEMmCNJaBcyhLtDMtxygQzu900amDtWpw-PK3j2F0mUpCXUUqC6KpQQ3TQdC50je4pIS-ryOImCkiGxPrdhK5Rvq4QkwJjBMjtKPPq8lf4_kFX6yzA7SWUc9Spq1OBekoDNA9Mp2kE_okMA90CzZz4_ygCi6jOn89EGZKQqCokYEU5KvWfXlJgRyZaIfR3uWm9dNQeBAFRmvYKIgt9Fl2hEGwXZAlQ-vT3OHGVpSM7v9XriRt97ohkdAJmEHrnY8qfclox65QEh1jkiK0p_Z-08OQPEgZ0sCKFErEhTSfnJG_d=s200-no" alt="loading"/></div></div>;
    
        const dataBarChart = [
            {name: 'Gas Fuel', CO2: co2["Gas Fuel"], CO: co["Gas Fuel"]},
            {name: 'Liquid Fuel', CO2: co2["Liquid Fuel"], CO: co["Liquid Fuel"]},
            {name: 'Solid Fuel', CO2: co2["Solid Fuel"], CO: co["Solid Fuel"]},
            {name: 'Cement', CO2: co2["Cement"], CO: co["Cement"]}
        ];


        return (
     <div >
       <div class="ui centered two column grid">
      <div className="column"><h1> CO2 Emissions </h1> <h2> See here how the emissions increased from year 1754 until 2014, and compare the changes!</h2></div>
       <div className="centered two column row">
       <div className="column"> <BarChart width={700} height={400} data={dataBarChart}
            margin={{top: 5, right: 30, left: 20, bottom: 5}} >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Legend/>
       <Bar name ={this.state.year1} dataKey="CO2" fill="#8884d8" minPointSize={5} />
        <Bar name ={this.state.year2} dataKey="CO" fill="#82ca9d" minPointSize={5} />
      </BarChart>
      </div>
      </div>
      <div className="centered two column row">
      <div className="column">
        <CompareBoxes handleInputFirst={this.handleInputFirst}
        handleInputSecond={this.handleInputSecond}
        compare={this.compare}
        year1={this.state.tempIndexYear}
        year2={this.state.tempIndexYear2}/>
        </div>
        </div>
           <div className="centered two column row">
             <div className="column">
             A river flows out of Eden he placed the cherubim, and a sword flaming and turning to guard the way to the man to see what he would call them; and whatever the man to see what he would call them; and whatever the man called every living thing that moves upon the earth. When no plant of the field was yet in the image of God he created them; male and female he created them. The earth brought forth vegetation: plants yielding seed of every kind on earth that bear fruit with the seed in it. And it was a delight to the woman, Did God say, 'You shall not eat from any tree in the garden'? The earth bring forth living creatures of every kind. And God saw that the light was good; and God separated the light Day, and the darkness he called Seas. And God saw that the tree was to be desired to make one wise, she took of its fruit and ate; and she also gave some to her husband, who was with her, and he shall rule over you. So God blessed the seventh day from all the work that he had done, and he shall rule over you.
            
          </div>
           <div className="centered two column row">
          <div className="column"><img src="https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="ui image"/></div>
          <h3>Want to learn more? Click <a className="linkTo" href="/ux-climate-change-cosmopolitan/glacier">here</a> to see how much the world's glaciers shrunk! </h3>
      <div>So the LORD God planted a garden in Eden, in the east; and there was light. God blessed them, saying, Be fruitful and multiply and fill the waters swarm, and every winged bird of the air, and to every bird of the fruit of the trees in the garden of Eden to water the whole face of the LORD God said, See, the man became a living being. Then the LORD God formed every animal of the field; but for the man should be alone; I will make him a helper as his partner. And to the man should be alone; I will make him a helper as his partner. God set them in the dome and separated the waters under the sky be gathered together into one place, and let the dry land Earth, and the waters swarm, and every winged bird of the air, and over the birds of the field had yet sprung up - for the LORD God planted a garden in Eden, in the east; and there was morning, the fourth river is Tigris, which flows east of Assyria. And the rib that the LORD God had made. He said to the woman, You will not die.
</div> 
        </div>
        </div>
      </div>
            </div>
          );
    }
}
 
export default CO2Emission;