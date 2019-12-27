import React, { Component } from 'react';
import CompareBoxesPopUp from './CompareBoxesPopUp.js';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label,
  } from 'recharts';
import { Link } from 'react-router-dom';
import GlacierData from '../json/Dataset3_Glaciers Size';

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
        tempIndexYear2: 0,
        open: false
     }

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            glacierChange: data
        })

        if (data === undefined){
          this.setState({
              glacierChange: GlacierData
          })
        }
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
          this.setState({ open: true });
        } else {
          alert("Year could not be found. Please enter a valid year between 1945 and 2014.");
        }
      }

      closeModal=()=> {
        this.setState({ open: false });
      }

    render() { 
      let box;
      if (this.state.validityCheck===true){
      box =  <div>
        <p>These are the results for the years you entered!</p>
        <p><span style={{color: "#ff0080"}}>Average mass of measured glacier</span> & <span style={{color: "#ff6600"}}>Number of glaciers observed</span></p>
        <p>{this.state.indexYear1}: <span style={{color: "#ff0080"}}>{this.state.glacierChange[this.state.index1]["Mean cumulative mass balance"]}</span> | <span style={{color: "#ff6600"}}>{this.state.glacierChange[this.state.index1]["Number of observations"]}</span></p>
        <p>{this.state.indexYear2}: <span style={{color: "#ff0080"}}>{this.state.glacierChange[this.state.index2]["Mean cumulative mass balance"]}</span> | <span style={{color: "#ff6600"}}>{this.state.glacierChange[this.state.index2]["Number of observations"]}</span></p>
        </div>;
      }
        return ( 
            <div id="wrapper">
            <div class="ui centered three column grid">
  <div class="top aligned row">
    <img src="https://lh3.googleusercontent.com/RsqeFh3GkisLTySL4yXu2ai45wn0p32oWhSLIkcZdiTBb7me7W1z0v1ky547yIfDbTbbOreKsh07hcc_JWstvthbLEn4xqn2iNGw7vQjsdV3CIzFLlbKe0VcVNvpYJm4ZBXrxSI3W4tzKNczUsOrKOP5ZGQ23Oh4g82t48SFG7LzRVTzt5xEIvLBg6Niqy0_sSisZwjUXOJlKFoZ0GFJsjH9f-ZJCWDQ7NcDa4D-z9hn1Y38IBWApgYXUNmexStn4sIF8Et75P-2nNHvjK8bTFdDExHV2TtmEnIUJpM93Sf5KZDRtIemYQznJkyKU0sVJR0SHcy9tJyCfnbbiWTgjJKrMB_lq3loyCdmra3olAEeRl0mgUCdTbEQLkK-wsZ64akNKvvU3CsaDQoNJbjTmD4PTE5ChtQNCydJIpeTBmtCOyvlDBrZtOGxTbDV7X4Y16DSrqPLPewXjHrV02alphQXLwWCp83bdw9PWmdV04wlk2_6sjq6kRL3husJnPOHGfWMkKZZUXA_2sVwVeES_FzZbq1F1wIBHSg6ge7ZnVmm_U-x20CNjsrOCIQvSV16Og3wKBNwEQwkN4vXTONKykDqGE1RiSdQ2mDe1q53McOfTsAs1JFs1ohGcgI7dnlxk_ioZBoUNnYKm5Dx8oxBZgCTBdW3nQsuWgow24rqAHw-6bMttZJT7RpOJCPtzhmPrRB0JJZPebzxRp2uMTCywnbZC_t8vi8Lf3dwUNXenCG0XIRc=w1348-h525-no" className="ui image" width="100%"/>
  </div>
  <div class="middle aligned row">
    <div class="ui inverted blue segment" >
      <h2 class="ui header" style={{fontFamily:"Century Gothic"}}>
          Do we even have to say anything? Look at this cutie being sad! <br/>
          The reason for his sadness is the ongoing destruction of his habitat. <br/>
          Check out below how severe it really is!
      </h2>
    </div>
  </div>
  <div class="middle aligned row" style={{backgroundColor:"#CAE3E8"}}> 
  <div className="two wide column"></div>
  <div class="ten wide column" style={{textAlign: "center"}}>
    <div class="ui blue segment" style={{fontWeight:"bold", fontFamily:"Century Gothic"}}>
    Ice is melting due to rising temperature. That means that the home of thousands of living beings are endangered!
    Do you want to see how much really changed in the last century?
    <p>Use the compare boxes below to see the drastic differences between two different years from 1945-2014!</p>
    <span style={{color: "#ff0080"}}>Average mass of measured glacier</span> & <span style={{color: "#ff6600"}}>Number of glaciers observed</span>
    
    </div>
    <div style={{backgroundColor:"#CAE3E8", paddingRight: "100px"}}>
    <LineChart width={800} height={400} data={this.state.glacierChange}
margin={{top: 5, right: 20, left: 30, bottom: 5}} >
<XAxis dataKey="Year"/>
<YAxis />
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Line type="monotone" dataKey="Mean cumulative mass balance" stroke="#ff0080"dot={false}/>
<Line type="monotone" dataKey="Number of observations" stroke="#ff6600" dot={false} />
</LineChart>
      </div>
     
  </div>
  <div className="two wide column"></div>
  </div>
  <div class="middle aligned row" style={{backgroundColor:"#CAE3E8"}}> 
  <div class="column"></div>
  <div class="column">
  <CompareBoxesPopUp
                handleInputFirst={this.handleInputFirst}
                handleInputSecond={this.handleInputSecond}
                compare={this.compare}
                year1={this.state.tempIndexYear1}
                year2={this.state.tempIndexYear2}
                box={box}
                open={this.state.open}
                closeModal={this.closeModal}
                />
                <br/>
                <div className="ui divider"></div>
  <p style={{fontSize: "18px"}}>Hooked? Read more about the insane rise of <Link to="/celeb" style={{color: "#ff0080"}}>C02 emissions</Link>!</p>
  </div>
  <div class="column"></div>
</div>
<div class="middle aligned row" >
    <div class="ui inverted blue segment" >
      <h2 class="ui header" style={{fontFamily:"Century Gothic"}}>
          This cannot continue! <br/>
          We need to change our behavior drastically,
          in order to not have more sad babies like these:
      </h2>
    </div>
  </div>
<div class="bottom aligned row"> 
<div class="column"><img src="https://lh3.googleusercontent.com/LU0Ksa8QVb2_HbdXBsKiFl8ljHcmENMwCaUMniNA7RwfFeKjd2bwo89m41kL2xg6iXoZyOaOR8HsLRFQIbDiuZUOOVH5iPXHUKHkxEJQbJREpKGL56F76v1yoBpW4V7IsjK4x1Iqp43Nr31XK5PmEbEgg0IlNWphEaB9ND52gJxMo3iPnP_Kpks8HYPuBclz1nMRTqTmVMUzHTwdaJopol1VI-LPbs7noikcbtmtGg8wH3l0lh2Tf8MXHq6BgQzKZyHWfDpZYAtn85tn2DxBeaMEfk_DFA8jYw_GnAvBCA7MpBeXG6C53D81BjdvuGZ3bjvRAMje2lBxP3bm1yCMhOtdf0aMLcGKmgzEwFyJMNJrgjy1cKYpZWteYHxnmKbiWEufxESuioFxTtwn6bepbp56DAweEZX9yJlI2KHtwlHhlMTEgHG8O11XmVXCw6kEdn3-EcqqlRbRF_mo_mBDDt1IEgh1RvC3yX2qgfxVQeQl5jdZPAlXCYOMvNNw1tKMHdW5enjyMysy4Rfrkrzh5moRwIDFHP6aLjnI7BUrWjHFf39LtavHud5ZqvK6ImPyVOU9khIrIqJaEHuqewn3ObIfoRfVXMYl2FTRU8tsH0lxS1UO6zu3lzrUdwDrp7JW9qNkDB4uxiSWv_Zi2POmSMtWV4U4lvlsS6w39sMfW8SkK8VIKhvfsRI1brLnNqVyA_okbtfkv2QXjNsOIRu21_gG1sg6GCsfKoaLApKygLVPTXAX=w720-h405-no" className="ui image"/></div>
<div class="column"><img src="https://lh3.googleusercontent.com/tu5OpR7Ta-E0XvHAVXrXQxTtPPND6Pni4JLY9l8r9zPDv45K84iSbm2b7BmNvzHOYlMbVHYV4MnkHn2Tr68krFxGSXxoqUfOxxQZg5PS528jyB2Ml7V4e6oTcFZ3WTaJ9uqz3wmwKOpj3kB0m4q5-NaaRl9loGVz4EMgGH5Pk159U-NpJJZ7RmRBLZ21kWdUPb5isgWCNSzAUB2f4UEr4UdkZa9kB1k232gohm6AjTKO76FgkifeDXy_WGt-KIg0mjzScmGwhUpU4bfpS3Vo-QZgDS1FcVAIJeHX5B6b-abFWbmgYIvre6j_7dajYEoCBXavcRs_F82n3_KGj_8HZKHuLjpH6ZiTiSiJGJw3oedEzgtoXIjXjr0RyI-2mFXR2YjIWdHdieTj_Iv0Sjm4T_EGI0PMrBGUKl6iqfv7olIS3dIyGcp67nLVOabQii704OsyRqiEPqwpjoUfAl-kFcNpIedsrH59psh69MxtPA_KABYQ0AcGjENBNYSkuP6M36nyAEk-3s0bSzEyybJtdeiJCQREh4rCI3o7nyPHlx9TY4figcq96zXug_ZP-HKBeEN6CDKsiw0dd3NnT7ptsgIifxScgGVBC11y9nZEyLWfLe1l2tk1XPrFjVUjyoh5TwvbbkUofgauBpSJ7vwa0V1mODUv2uKh2s9aIr8GNrxLsKiwqLDnRyBI0fIKpK7fAnln5neOw9L3N51nQ-adlBr2Bc7VUwV7ytKlUwaANnSUdV2r=w768-h576-no" className="ui image"/></div>
<div class="column"><img src="https://lh3.googleusercontent.com/Mvgwcv_n-xSdcoRhd4W9_gGMgmtD7-CO1x3osTFNYsaTecEmFTGqirEE32A8Y5_rwzeOSq4ovanF6FeHTU9yvRXWXJwtyZIRVFDEkcOOrYYzPmHOTsQkAXObOmNjKOlZbJOHG2x99bpROLzjMZduo8EyuL6X4sKiBjrA-LkLl1peIbbMqJGE89H87u4VW4lNDn0MgjG0szAPhjqXVytgIb1bUyUk66ctr8pCjte5G-BSeKxAL3tmeGkCOmcF7gNqlXQQWxdnyhpa0jpXxwx1DA2jaFesT6JC-WZ2_D1bNXTjgNqV-_5foaSm9AW5s8XXJFJCIwEoJk3MlPpLKfk0D6N0D7p0Hhykw1_rMSlKJUH-944ivRQyNeSerHxYvQm3Fuhgb7SNoPlHjTMh78jIhNRkJ0bZmgJQSjhnouYHKU6w7xn9k1QCbKex6JJeeps9qamNNjuSuFzJ65cDi498VJFefb-anovnNBjpd03BITwklCrN_YIZKgKLiQS9zpT4swAKBDbp5_8ClgQGLAiAmZ3sKju4gVJXwG6QRd4vwVW7H-ZqtCdUXkDOzYZVTpRXsOPaQKvL26Qt9hw7JmdEb8M1f_jZ2zfQFKKn0RGdzVZsL_I9CSdxhmm3ymOJkSA1NgfM_1VO28-05Fd7symieIoj019ljOWoMUM1NXUk6AegZWye3VBSJEC5PYb9vXvoEL1yAaBVp7OVjaN1uVigqvLPyMQqExjYFxhwizKPJ9xfiio=w907-h510-no" className="ui image"/></div>
</div>
</div>
        
     
            </div>
         );
    }
}
 
export default GlacierSize;

