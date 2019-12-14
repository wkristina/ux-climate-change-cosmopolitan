import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip
  } from 'recharts';
  import { Link }  from 'react-router-dom';
import CompareBoxes from './CompareBoxes.js';

class CO2Emission extends Component {
    state = { 
        emissions: [],
        tempIndexYear1: 0,
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
        tempIndexYear1: index,
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
        if (this.state.tempIndexYear1 !== -1 && this.state.tempIndexYear2 !== -1) 
        {
          this.setState({indexYear: this.state.tempIndexYear1});
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
       <div class="ui centered three column grid">
       <div class="top aligned row">
    <div class="sixteen wide column"><img src="https://lh3.googleusercontent.com/_jY5dm0X61txxKPi4JYwIS4oLMewnqdMahSBbnBTC7xJluzRXJ2Ojuhq5gzTPb5JFEaKT3xYEF6KDRXixEkO5r9T0VKb8FSiewY4rIlwyHdvn7mACfTcn7VkRKyGz19h36hnCfAgl2Dg_lljo4UC88j4Im8F9lK6l75P8_xsoNDTzxl23YvbONqcTLfLdhMirQwvkpfdxBZDveRBTwwRapbFuMevVQQ_Jsufl-OXEhJilik0gvWJMmNyHp13oEU4s6VsIAMCQq08jblEXFGE01QBEx3Qx9_VeRku5E5Caw4T-PVaVGqBa4K1TdlfGGJgFozl_pTOFfG5XMkhDQjzY8JpJwSj9rKyTptPcOCjhM4Ml6FoQR3WULf38B-9VZSLyp2raU9DwGfjkkujN0Cu3P5bU3dqdEwJaHiDS5-jmFafGLG3GXAlaIs_wiMDpuwhqEcNFYfVfX0lOQOw9uD9tEGX7gOR5q7LC21N11ssyWusYJ3kRX-knB-QRuHAt06nijeJaaIoGiLbQfgrvGL5SSSEoJLW_ioyOpBWZ3J-JxFvMdjYhvqoVdqLwGZosq0T3XbkRsrvyp83DdyDplggNNyC67zRrIQ7sTR_Xu8PkN9oI6ji5xEZSghvZo9PgiEXg4jAEQPMzYlrDNOui5tMfwZ6sj6C98T4YtEEgC1kMb0z-75S8aA36aDcyJczGhYik90tqoRHU5s9n6KVH28wOkhzaXgW1Gi3t7JBLfFzFr56Y3cJ=w1920-h396-no" className="ui image"/></div>
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
    <div className="graphBox" width={700}>
    <BarChart width={700} height={400} data={dataBarChart}
margin={{top: 5, right: 30, left: 20, bottom: 5}} className="graphBox">
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<XAxis dataKey="name"/>
<YAxis/>
<Legend/>
<Bar name ={this.state.year1} dataKey="CO2" fill="#ff0080" minPointSize={5} />
<Bar name ={this.state.year2} dataKey="CO" fill="#ff6600" minPointSize={5} />
</BarChart>
      </div>
  </div>
  <div className=" three wide column">
   </div>
  </div>
  <div class="middle aligned row"> 
  <div class="column"></div>
  <div class="column">
      <p className="description">Carbon emissions from different sources in metric tons</p>
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
 
export default CO2Emission;

