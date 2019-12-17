import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip
  } from 'recharts';
  import { Link }  from 'react-router-dom';
import CompareBoxes from './CompareBoxes.js';
import Co2Data from '../json/Dataset1_Global CO2 Emissions from Fossil Fuels'

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

        if (data === undefined){
          this.setState({
            emissions: Co2Data
          })
        }
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
         <div id="wrapper">
       <div class="ui centered three column grid">
       <div class="top aligned row">
    <img src="https://lh3.googleusercontent.com/_jY5dm0X61txxKPi4JYwIS4oLMewnqdMahSBbnBTC7xJluzRXJ2Ojuhq5gzTPb5JFEaKT3xYEF6KDRXixEkO5r9T0VKb8FSiewY4rIlwyHdvn7mACfTcn7VkRKyGz19h36hnCfAgl2Dg_lljo4UC88j4Im8F9lK6l75P8_xsoNDTzxl23YvbONqcTLfLdhMirQwvkpfdxBZDveRBTwwRapbFuMevVQQ_Jsufl-OXEhJilik0gvWJMmNyHp13oEU4s6VsIAMCQq08jblEXFGE01QBEx3Qx9_VeRku5E5Caw4T-PVaVGqBa4K1TdlfGGJgFozl_pTOFfG5XMkhDQjzY8JpJwSj9rKyTptPcOCjhM4Ml6FoQR3WULf38B-9VZSLyp2raU9DwGfjkkujN0Cu3P5bU3dqdEwJaHiDS5-jmFafGLG3GXAlaIs_wiMDpuwhqEcNFYfVfX0lOQOw9uD9tEGX7gOR5q7LC21N11ssyWusYJ3kRX-knB-QRuHAt06nijeJaaIoGiLbQfgrvGL5SSSEoJLW_ioyOpBWZ3J-JxFvMdjYhvqoVdqLwGZosq0T3XbkRsrvyp83DdyDplggNNyC67zRrIQ7sTR_Xu8PkN9oI6ji5xEZSghvZo9PgiEXg4jAEQPMzYlrDNOui5tMfwZ6sj6C98T4YtEEgC1kMb0z-75S8aA36aDcyJczGhYik90tqoRHU5s9n6KVH28wOkhzaXgW1Gi3t7JBLfFzFr56Y3cJ=w1920-h396-no" className="ui image" width= "100%"/>
    </div>
  <div class="middle aligned row">
    <div className="two wide column"> </div>
    <div class="seven wide column">
          <div className="ui segments">
          <div className="ui inverted green segment">
            <span className="title">Get inspired by these amazing celebrities championing climate change</span>
            <br/>
            <br/>
            <span className="subtitle">we stan these legends</span>
          </div>
          <div className="ui inverted brown segment">
          <div class="ui two column grid">
  <div class="row">
    <div class="column">
    <p className="bigQuote">"I do believe if every person does something small, you can make a big impact. I try to do my little part every day; I compost, I recycle, I use all eco-friendly and sustainable materials"</p>  
    
    <p className="explanation">As co-founder of The Honest Company (which specializes in eco-friendly products), Jessica Alba has shown that businesses can play a powerful role in the climate movement. It's possible to put people and the planet first, all while making profit.</p>
    </div>
    <div class="column">
      <img src="https://lh3.googleusercontent.com/PBc0EbklHFV3n3VdeCb160AVywuvVwHqRPtU9eTwuPzPWaFBS8B5Nvixhn8qfWreH1N-pYRTtWiIMDO_6PSMWbu4ElJPiJplxkiyEuYkDRuqnarXrWyTSGy07JH7OrrqTWEl2x1KGrhAkpKZfdkpCoWHoqqubJb_EnDLtp2BBO51XZSYVvp5qgAyILNLTVwEXai7i5zAJ6aG7Lpnls7MDZOSowOiMmpvx62Ovi5d8wLHmewz9RleITnBKMTThLamMzy7E2miymCrBT0ls-E8bfZ_Cyt6X2MhDY_Ijkiqmhp4VRTlKEI113V4dL2XLaXzdl4V07J7vLeOh4lvhOxrXaCHvkY-TvOqivDSjwMX5UA47Qj7H-mD8pJyE6x_itrQf9UiU6k2DN0LAq1-y8wbpyb94sgC30eMsU3jcoCU7EB8QPb83jYMggdodSmPGR7wNPBi1Qp5w_KtkjqmSJN7LYL8ppA1Fgx0YElxTwnjgoGK3qAwVDGc9FY9ezjmI_gFk79_EAUFtuhwMLc3mX98X1H07PIVPOaMffFu44kyocW9MEYTAiHC3a6N5q0lT6A7jdWVHLcTDSA63bsahJ05qdnuiWBgYNDWGkd2R43n9DJDjCRHy8VxTnsGzLmj-DkfZq6WW4gWHIQ53towl-yaJARSwIPRRcVH7RXDkHgGSi4gxnyJc4s3Bl0qddPJ9vwQnxj81ascpQ8g-BkRORy-GApS943PtAmjLMcHz1Dqvak6IMel=s400-no" class="ui medium image" />
    </div>
  </div>
</div>
          </div>
          </div>
    </div>
   <div className="two wide column"></div> 
  </div>
  <div class="middle aligned row">
  <div class="column"></div>
    <div class="column">
     <div className="ui two column grid">
          <div className="row">
            <div className="six wide column" style={{paddingLeft:"0px"}}>
            <img src="https://lh3.googleusercontent.com/qApUYLi5Q2FfWFsBs7B_-oZ_G6jybElnr2C-Zho5zk1qbUjn5OdwB4UcvlAF8vb9d3sRYdXCGbP0NPUFb5jFG3uWRbP8TjOAGxEqh91wV-mNQwNDueKHHqB2v5QdzkDqhA8P-BiADHGd08IYgsvdj2tvPz-M4mAPFHsDankQxLQelrQuVEGyxMQyxx_1lNAAEd2RqyE8R9JW6iR9urGIlGataPa3xBh_3uwYgHOnpjmVsP9XKOVywXtJflsNoRich_CYIa793u-MJD_hdgrJU7FcepI0XJAX3xXZDwvwkzTKXjcvpZTX2BWbYSX8d51e7GgzrrCijf6q8y4iWk8bbkIKxLulamf2fQ7MWRtGtpXWKTuz1jCYbDp4Zz2-D2bCZDAweWpisN4lvomugTBYkrcf4BROo2m7IVDFsLx6gq6NuENnS-hRxhCkUdKmYA3QvK45qgD1swBcJOPUCLH3h23TgDISQKYFriyD5gY7Efs-Fn-Z_ztlObS1R6Ci7jFIiokBSvB_MTyZAA2cmePDyf1mo0j0tke1FmN5j_ewSIJzsF9ImtpGrjnsl61OnMiAc0L3xzgc1NSIP6EFNnfCmWky8rNzZxX8vvvUP9LRoe9hnafnA9_PyoqVmPE75Zlo-AxJX8abyQ5y1484nQS5ofmePvdq93JWrvKEn9aKxtlDAho81x0Rkd3jBhDHrRRXc6ssZx_MLrPRbIkWyOYp1p9ZVhJj-CvornhTo0rkMPaTm_Yt=w727-h645-no" className="ui medium circular image"/>
            </div>
            <div className="ten wide column" style={{paddingRight:"0px"}}>
          <div class="ui divider"></div>
          <p style={{fontFamily:"Century Gothic", fontSize: "16px"}}>"Where DOES it end? I can't be silent any longer...<span style={{color: "#ff6600"}}>WE MUST </span>stop the destruction and senseless slaughter of all that gives us life: <span style={{color: "#ff6600"}}>RAIN FORESTS AND OCEANS</span>. We cannot afford to lose one more acre of forest, we can't take any more storms and radioactive waste."</p>
          
          </div>
     </div>
     <div className="row">
       <p style={{color: "#ff6600"}}>Ian Somerhalder joined us last year as the Green Man on the Street for 24 Hours of Reality and has founded the Ian Somerhalder Foundation, which focuses on climate change as well as animal rights.</p> 
     </div>
     </div>
</div>
    <div class="column"></div>
  </div>
  <div class="middle aligned row" style={{backgroundColor:"#FEDDD6"}}> 
  <div className="two wide column"></div>
  <div class="ten wide column" style={{textAlign: "center"}}>
    <h2 className="ui header" style={{fontFamily:"Century Gothic"}}>Why are your favorites doing all of this, you may ask...this is why:</h2>
    <div class="ui pink segment" style={{fontWeight:"bold", fontFamily:"Century Gothic"}}>
    Co2 emissions have been <span style={{color: "#ff6600"}}>rising alarmingly</span> in the last decades, which is dangerous for us and our planet.
    Give it a try and compare the data from two different years between <span style={{color: "#ff6600"}}>1751 & 2014</span> below!
    (Carbon emissions in metric tons)
    </div>
    <div className="graphBox" >
    <BarChart width={800} height={400} data={dataBarChart}
margin={{top: 5, right: 20, left: 50, bottom: 5}} className="graphBox">
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
  <div className="two wide column" >
   </div>
  </div>
  <div class="middle aligned row" style={{backgroundColor:"#FEDDD6"}}> 
  <div class="column"></div>
  <div class="column" style={{ textAlign:"center"}}>
  <CompareBoxes
                handleInputFirst={this.handleInputFirst}
                handleInputSecond={this.handleInputSecond}
                compare={this.compare}
                year1={this.state.tempIndexYear1}
                year2={this.state.tempIndexYear2}/>
  <br/>
  <div className="ui divider"></div>
  <p style={{fontSize: "18px"}}>Hooked? Read more about the insane rise of <Link to="/style" style={{color: "#ff0080"}}>sea levels</Link>!</p>
  </div>
  <div class="column"></div>
</div>
<div class="bottom aligned row"> 
<div class="two wide column"></div>
<div class="seven wide column">
<div className="ui segments">
  <div className="ui inverted pink segment">
  <span style={{color: "white"}}>More quotes from celebrities about climate change...</span>
    </div>
    <div className="ui inverted green segment">
          <div class="ui three column grid">
  <div class="row">
    <div class="column" style={{color: "#59ADAF"}}>
          <span>Shawn Mendes</span>
          <img src="https://lh3.googleusercontent.com/hsvYXnob_EwLhwxcxdIOOmnlPoHTB06KVVbFWG2tcI0u_wLrfPrtARqG1KZ106oXAsgK0HXet_E-jBqt2zw_vhMM7HfvWRZ4z2X3G3z9IRqiXljIKX88JyAxiIQ1lWKY633yDC0XdC0rvLOwbdd2oC6OPdz9nF6VCxPnKiQy1u0EjDwI0Gn8zrCUkPLcORGVqmLE0QZhZR2SM9q9OZOL6gyT9Q_0d5pPS4WJUz1coicL2gsgDuvfUji1r9fdg98WgDWYYV5925JtSBFI94Md9L_UDD5fu0jFVVeINSaEZDQFJQ5JAPQNGLoihLWlq6fvllXvacSXs_hgcsexfF-T_kEE6ztMZbPjpImvNjGDStiykrazHp1S9iD45ICt0rfrCBBQfVtVvLW_30E9mTxB_RGOH6ufcFNMP-bJ6rnokcEOziLLK-HZ-JphCVjC8hcVpNAR-LvgPfdHRDjCqZqi-HTqCbPtkjadOn_kBlQKbrgOmC7NGWhMXAn4F_kUBeUiYsTh6fB9mw1z4Vt651tLnIdSFV1b_wvdPXz19SwZKX3XKZ0eodOiFtWOASC14gNedBbrBRMH1ZmDoAd0SWRqhXthCp519e2PjVFfWkGpLQQoWgY1OSnMMHsDG1HIw5uHgGcZ8pLvYEQUlJrOT58etZ9YUeyBV04OrK2ozUXyAY0C-dZpgEme_zAGrgVV9utdrVizjNC_4xFeIfEUyujxpe9iQiXedBzCymgMva25lbaSV3cG=w360-h450-no" className="ui image"/>
    <p>Together we can and will change the future of our planet</p>
    </div>
    <div class="column" style={{color: "#EF4206"}}>
    <span>Billie Eilish</span>
    <img src="https://lh3.googleusercontent.com/aquKwr2OZMAfcDuLmCSWhndVpwfqp4Xl913sqiDeFPSvvtgaksZGa-K-k1b3qTeyVc5ReaHzOs7PFekxTvgeinNQG_8F2fKge9k-IXveVhdmAwVhe1Kfe7PGoiV2Zx-_lWsfSLyzi29gdqEPYP6WHjChhRoQUYYsTdfKQK65kB83dnPkMnZIS2j9wliPm3ofGsAcqbm1kNv-jq_aVg6CjG6GRjdJdvie52Fq9CxiHcgf4CBr0JbSugHRXJdDA3SsJCsGDcLjpnzpYMpYnxFNCeolyBv9KwHFvAUNbPz9PP6HAyLY47pEGMzcZ1CtLQjbATArialJDHHZIAoHyxs0N0SKmajMHWO2OvZSaPglPxKdvf4CknvopywEwTz_QZEXQ67iUNDFLXw2HGAjSTuQ1Lcun2GEhSejdqSD4_7utL59iFUCoyD2Nindn_GK5sLCqBNVtnHQvwj9oZCQnsxx7rKmgWTTHUNaqZwGE3EqpuBRLLRnqHft407EonNt9-bds3IscRVk9SMUkBX0Ysqu3LtDdk0UdsjMobxnyDHD9g9MlWJDS9xAGjtuXG6A-6SlHDD0S69ZCMaKTppP2QDSYMFdygUImdtFwaQApQRXe_IxAAGGTLGrjyoec6H_yEElFvJ3sKvoxxtz6ULrSn1ZPpjNzRWrxwMU1CCcVxzrzJ8cTu_elq3xeKZR9h8gnIZSS5Bpf5nKGKLw8Es9eK3tjQK3DwwNEqRCsioQ3KqmskLWtbiR=w360-h450-no" className="ui image"/>
   <p>TICK TOCK! Our time is running out, the climate crisis is very real. we need to speak up and demand that our leaders take action</p>
    </div>
    <div class="column" style={{color: "#59ADAF"}}>
    <span>Chris Hemsworth</span>
    <img src="https://lh3.googleusercontent.com/y-sOy1T2KVfcClNl_nGML8jnjx0k2xxZZkoW-H7Zdg00gqdOuPY0beSjsTLxG2U688pXpPW6dS7nOxVf5if_sHf8_hTLRcW64HdLM6xWjudUBdKTwYAF9KwTIxRlFz17G2jMl9wDaiC0U1dsl8S150KwGuVP7URcyGPcZ2xHMxTOZt-FA8YnyGeZY4dDgvOGMSLfLF8LX6UXF58IF4F4rmohDfPKYltMw6WmI-oCwSOFkrtFh62mHb6DXPA4l0NHTWqnEekFHp74UpjbGvuH3AqCnGm39ITgo7ce13z_zqQyHmkv4tgI7HjPQMg4H__YyhlqpPoM0o1cAY9GFJNELBQtdEk5j_o9kLNTqZXDXrueWje3QGLhuOBGxk0eGTK640driO86Yn7W9Mjq3lxMH8zx_Blm8I2YBtnux64VxEI3QnhunjXekgq_5cgjBlgClHkNvMleIEuTYYGL-uateF5a0pOjb0U4DptdnV5Mj2ukqNAYRzRz8wKradymSAGsZzX9biMl-TQd63Tq-8-w8SYzSaxt6U3-NW-RR-yFrZPiLcOSFh-wVlBWluPlf73_b7mlsmvC9vIZzPdxqTI_i7Q0CZlO68viSv_8hfT4If5kzareXw_uZTmkPtr57Mbkn1hEJt1JVs-k5AhIfUu9QXLvM2palXQ1-8J76gVXR1n_g0RCNTzRw7DUNciTKTRfMrERAzKJMAxK71am989X0PTwOZngu5JfQJ9LGjjIknnt2Ugz=w360-h450-no" className="ui image"/>
    <p>The planet will die and if you do the math, pretty sure that means...um yep we'll also be disposed of unceremoniously too</p>
    </div>
  </div>
</div>
</div>
          </div>
  </div>
<div class="two wide column"></div>
</div>
      </div>
            </div>
          );
    }
}
 
export default CO2Emission;

