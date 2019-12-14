import React, { Component } from 'react';
import CompareBoxes from './CompareBoxes.js';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { Link } from 'react-router-dom';


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
        box =  
        <div>
        <p>{this.state.indexYear1}: {this.state.seaLevelChange[this.state.index1].GMSL}</p>
        <p>{this.state.indexYear2}: {this.state.seaLevelChange[this.state.index2].GMSL}</p> 
        </div>
        }
        return ( 
            <div>
              <h1>style</h1>
              <div class="ui centered three column grid">
  <div class="top aligned row">
    <div class="eight wide column"><img src="https://lh3.googleusercontent.com/lsTmv5SrGAl6TNB-QNzfd9IP3J3cBRZWxjGldIcZCkEXAeWQLu-Mpb0Wd0ShckLvv5OVVP3PEQma9gvbqnJkhAGJX9pg94NH0uHcmreLQpnVePyiJpvF4HhSktwjd2L7Pg_coVOhJfdoaGT6cpHRBQRx1weuaG3wh4CErRBi33YTC_2daai9mS6xhdv5qdIXWt_K_J5JGhxA9lhSEbO-lNonzRjPgiQ6qfnwtKbmc_mterqZ4j0xltNgfNxaJ5r6ktwkOIo9LmTH-LSNtwEk1o8CX_D4K6Elm9ZF1r6ToozPhatqmsN9ucm5yIY2Wz6n8t2ShAqhCS0EgaWBr9oUP-Tfbbd-IPvAyISNnulzBs1k_f7cNZF5-OieM9f76rhSnAJHmKP1ZNzuHd_7pP6-5-19wwlgjY7gVSxW2KYLKbk0fqB3OJXWaXSRqUdWFRtOM666E1cLsC1hzXCuu2sXU7Qs3akKA7qWuO0YV2YRikfhl6ojDTmJ2RZRIOTlYdHXTF4Cw3JnxljuRbJmLf1VER9KPhrDOVDGBfSLaF7E-sDxycXZQWRJEeR46JqrII4w0nBjYSPbubSKmAVbrq53FLEb8b5SCfxUh1Z0F5kPJr6e2_5tXxQmz_5btA6NYd5aFpDmiO2se98wWwPFYBrtspLMM8Tp4NRhD9V-6KyisNw-d859D6PeGJ1Hoy__ftIT7XcSbcEPUmAoZ54eEWUp_qGAdKf6hQPyDp0SI68lwM9RQtxx=w1000-h372-no" className="ui image"/></div>
  </div>
  <div class="middle aligned row">
    <div className="column"> <Link to="/celeb"> <img src="https://lh3.googleusercontent.com/JLoWcqyk9foVuKeQj9cR-Yun_jvOlg93wDqk8jDuymqK83O4S0zNRjGyn09HjGxDxATRAbTrsnoKf2eqi7y-9hNba40FQ76kHcV5ldizXFEtCCajxFOphvIJXuS1VIMe0iQAJmmRjE62D72ruUha1RmM7ZG-9o0t5MYdI7ACbyM_dUmf53iQzvYYUMxcmatpNiBixSRodpFzTEsy13RxlOOHhRu4aa_Dw979oog3H1RSIJyONLsnxnuhzY-qz0myMR-aeqnuiL4oqlaFNgd1kEHe-mvqai7vGXFpWd2auX8YWeh_MnfvaqVVbBbZBiOAf-pZhU8czv_iYfpObBXSpPdzq4TytcF2DcMELhM5KWueWDiE0CaXvlYNb1qbNxNa-YSOU4sGTqHrSJRPpfrqfVj0ylVCgD7asTFDKPTeTA0KRXD7pvbWrnLzoMMo5hOTgGkqAo2YK8XD50ENivDlfPxVUU363GeJPHuuzgKnhqlYsF8S5buze2e45GJsPcYqV9lzq6oJZvcfOsyXjhYSiTsHF9z1h1eOCaQDXRCYq1PCkjQQknQ7YXe4jgxMtNnl3I9fg5nlDZXNg1IydmigDMW5l5Jmfayb7mU9bLlYswxdLw9Hcxn3-szI9EwvlSTYaH2H3fdf08Bj7WkXtoSHd0_61Ce-VijxTguli7WgpqGNu7wf-0QNAwSJabYO8t5KsQTcm5pq6-6L-3lw35O0rXGJFImiZDcaycQYXXCcV4oOHDC4=w892-h903-no" class="ui medium circular image" /> </Link></div>
    <div class="column"><img src="https://lh3.googleusercontent.com/8JFGDY-YQalhvhIvpn7c08m0pYYA4nNe4Ul-kys_dP70wpbgtrOFWc5tlycLY_oXpZ_xGD8gwxnAaP3lgZwN39-9lMeNUauS43jA90a67OjyYBLN62IQAYYZRtZAVFSiQB1iUhZQT44txhQItrmcd8ob0VZ7SJM96KcRLMJeiIGS5QiwY0z8YUTjHOH3g4lWy0u2c3PkmdPwPseVq4J64LALWppUlsPvdS-ZEwGTJiKd259ZP_SqUk60vwRpQtKN5oSdU4H2AawutgjOQDCXTh7fzK55ScLeAaPtJav3dHmWAA70OEETV3lM9WuXKUTi5U0yedxphwb0XW_5hE4eG7cKRRWv2lEqsQcbEZ6Kr42lgNX8ZJsZYFm6VK4GQANRDbdWW6hv1SYMhLrXP2LopmDNS_r4JBQtXE77AMSp4qffM3Flo3AA0SE4EMnxntcJhgW9QdiF3QvOEKFNY_NH3jPozeq5XZ74d8FuOsDBacrQmdsm48m3h4MJCUaramL7rsz84K_o3_sDjemUm69ALud3SvZsIEOjJ4qBoSrzhJbjGRkxBhmMtc9QWDM6axRDkLfJyaWO7c7Depw97Q1VbXgpLJJ_sKUUXwCbFSk20NFgKp1dfoAm2dzMTbIAQYVM6ODU8S6cDzNJP_n2N03YFvdGAF7FIBpnIiVn8ELK3L7b_rx0tVhTj7uhr6BsnWj8QFcOHzL1N7C3vg-iQ7uTo52lhTGURSNqZjFsIenqlz8I-wJS=w1200-h800-no" className="ui image"/></div>
   <div className="column"></div> 
  </div>
  <div class="middle aligned row">
  <div class="column"></div>
    <div class="column"><div className="oneTextBox" >Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the chassis of a gutted game console. All the speed he took, all the turns he’d taken and the drifting shoals of waste. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the dripping chassis of a broken mirror bent and elongated as they fell. Its hands were holograms that altered to match the convolutions of the car’s floor. They floated in the tunnel’s ceiling. Case felt the edge of the room where Case waited. Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the coffin for Armitage’s call. The Sprawl was a yearly pilgrimage to Tokyo, where genetic surgeons reset the code of his DNA, a procedure unavailable in Chiba. Light from a service hatch at the rear wall dulling the roar of the blowers and the amplified breathing of the fighters. Still it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the missionaries, the train reached Case’s station.
</div></div>
    <div class="column"><Link to="/celeb"> <img src="https://lh3.googleusercontent.com/JLoWcqyk9foVuKeQj9cR-Yun_jvOlg93wDqk8jDuymqK83O4S0zNRjGyn09HjGxDxATRAbTrsnoKf2eqi7y-9hNba40FQ76kHcV5ldizXFEtCCajxFOphvIJXuS1VIMe0iQAJmmRjE62D72ruUha1RmM7ZG-9o0t5MYdI7ACbyM_dUmf53iQzvYYUMxcmatpNiBixSRodpFzTEsy13RxlOOHhRu4aa_Dw979oog3H1RSIJyONLsnxnuhzY-qz0myMR-aeqnuiL4oqlaFNgd1kEHe-mvqai7vGXFpWd2auX8YWeh_MnfvaqVVbBbZBiOAf-pZhU8czv_iYfpObBXSpPdzq4TytcF2DcMELhM5KWueWDiE0CaXvlYNb1qbNxNa-YSOU4sGTqHrSJRPpfrqfVj0ylVCgD7asTFDKPTeTA0KRXD7pvbWrnLzoMMo5hOTgGkqAo2YK8XD50ENivDlfPxVUU363GeJPHuuzgKnhqlYsF8S5buze2e45GJsPcYqV9lzq6oJZvcfOsyXjhYSiTsHF9z1h1eOCaQDXRCYq1PCkjQQknQ7YXe4jgxMtNnl3I9fg5nlDZXNg1IydmigDMW5l5Jmfayb7mU9bLlYswxdLw9Hcxn3-szI9EwvlSTYaH2H3fdf08Bj7WkXtoSHd0_61Ce-VijxTguli7WgpqGNu7wf-0QNAwSJabYO8t5KsQTcm5pq6-6L-3lw35O0rXGJFImiZDcaycQYXXCcV4oOHDC4=w892-h903-no" class="ui medium circular image" /></Link></div>
  </div>
  <div class="middle aligned row"> 
  
  <div class="column">
    <div className="graphBox" width={600}>
  <LineChart width={600} height={300} data={this.state.seaLevelChange}
            margin={{top: 5, right: 5, left: 5, bottom: 5}} className="graphBox">
       <XAxis  dataKey="Time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Line type="monotone" dataKey="GMSL" stroke="#ff0080" activeDot={{r: 8}} dot={false}/>
      </LineChart>
      </div>
  </div>
  <div className=" three wide column" id="infoBox">
    <div class="ui padded segment">
    <div class="ui top right attached label">Compare here!</div>
    <p>Use the compare boxes below to see the drastic differences between two different years (1880-2013!)</p>
    {box}
   </div>
   </div>
  </div>
  <div class="middle aligned row"> 
  <div class="column"></div>
  <div class="column">
      <p className="description">Reconstructed Global Mean Sea Level (GMSL) in mm </p>
      <br />
  <CompareBoxes
                handleInputFirst={this.handleInputFirst}
                handleInputSecond={this.handleInputSecond}
                compare={this.compare}
                year1={this.state.tempIndexYear1}
                year2={this.state.tempIndexYear2}/>
  </div>
  <div class="column"></div>
</div>
<div class="bottom aligned row"> 
<div class="column"></div>
<div class="column"><img src="https://lh3.googleusercontent.com/S6_PwaL1Y-SjMKlvd8mfYJNpjP7K0JjiXdVTlMbHbyxTXEGL7a9TIX1476sCfsD48cK-HKfcO3uMIgeSacNPrDBs9djG76eq2V_0_VCyQOlrb4rtQrvbQa8keAyFjjZsQWjdjLknE7JHPJ0s7BvM1Swe9eHzHvBRDSeleOFyz4Lj3Lad3A9DTCbXRIW52haY93sFRbB3InyEMqmYuodedTY3XqzY-ylqVQj515UkFTYPVNfMCvGGnht00iig-zjixVlZI5R65TqMan1ENLx-tTvoaBwwuoiQKzs_EIRjs5hL5V-3KUWkeqj9_Gfvx4MOu8XFGv9OA6qk6H1Y-ZbEsvjSodCLxk27wqGzx_B631InjC7Cb0yrEdJ34vdv28K1oUH1t48uVUKmr8z3LzIQf6BKTj-YPFu9rLRpHzlIhFB-F5ayBHoHeGi33i-wmSZczkdPCRhvkJivjEBI8UUoSqN_zKmhDmZH7ayO783ENmlDy_CuK02jjGTUNV7OM4uuu98DY2lgFxRgTWY5_tcMrwVO-niJZIby4MzJvtXpPF4WiZoN0AfEBFHjxY56yghVI4rzeaQ3IypX5sUlOCtJHCrU28KlBkGKhkRVox-A91F_9MqskQTyS_fGP2hU0YFdqDI6eNyoSFn4ooLqG4wXhNPAulqrc6jb4dBqwe6X2u-Bjyas_a7qDcRXylIZqcLfcRoDv5K6hWlU9MnoEcFVZkPBs23Fme2Qumhbnwx69AFLFxLQ=w1200-h801-no" class="ui image" /></div>
<div class="column"></div>
</div>
</div>
</div>
         );
    }
}
 
export default SeaLevel;