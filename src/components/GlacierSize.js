import React, { Component } from 'react';
import CompareBoxesPopUp from './CompareBoxesPopUp.js';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
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
    
      const url2 = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
      const response2 = await fetch(url2);
      const data2 = await response2.json();
      this.setState({glacierChange: data2});
  
      if (data2 === undefined){
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
    <img src="https://lh3.googleusercontent.com/uTdi3W75njad1zswe9cnW_VIllIMovPeAvgfg_Dm_UzXNh3dNxZsamYz6D0gm6XJ6vMIAAD7DX0PtfpugS3Rrnn_PXD_LaXhfZnp8x8tVrZucKVdTfw-RFpHlJJJEJ5cja_Bq39nGp1AYNLQ67UE7wo-W1ja5QOj8He3miY9W503jItXVV8K1I2A94vdPKsQBmjT8nBPnM63FyvLj1xsvnZVljWkuwrZsMwa9uoL1o_kdqhH-jkz44vbrVRvu7tXfnHJf4dmpTordWbR6U-pxGTv6EhAY9yOK0SkRF8vyWn6SzTxaDsGUxbm4-bJsBa4s1-Wvy6fdXQOZWJatim_7CD2segxfW06WScoW3-eiqt7Nk2dbnHMijacFjgmITYjj2GEJdNa3H0L3z17cferKYGFIxMiks9y6zBeUxs9-qdzgvzHPFnMniVBXsrz8YODKDqagsg-zNdrtTHmMAay2yydddQpVaGP17F356kia8wZD_6Hp-RryzCRN7q8xxAEnUuZn_P-8mm2cjYZksJM_3S6Mnp2exQOpIkGio-DJWiYm55CUVC-V_BEHYw23L6m-QEOGwAKTUGTDwNZ6kUTHEhSBQqhUjdgN6A_o3m2n3FxIA-eDFpqNP89fWiuyzqXeQ_lkvFWUa0Q7bJT-Eux5n4naVzVSlVH-JrEujvelaNzEDMPo_MgCF9nJDS89fY8a6YZuBxMwJqsdTTWim5iHFggYL-XzI1rmhE-bzRw42dNdyMp=w1920-h360-no" className="ui image" width="100%" alt="sad polar bear in melting ice"/>
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
    <span style={{color: "#1E86D5"}}>Ice is melting</span> due to rising temperature. That means that the home of thousands of living beings are endangered!
    Do you want to see how much really changed in the last century?
    <p>Use the compare boxes below to see the drastic differences between two different years from <span style={{color: "#1E86D5"}}>1945-2014!</span></p>
    <span style={{color: "#ff0080"}}>Average mass of measured glacier</span> & <span style={{color: "#ff6600"}}>Number of glaciers observed</span>
    
    </div>
    <div className="graphBoxBlue">
          
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
                <div className="ui divider" style={{marginTop: "40px"}}></div>
  <p style={{fontSize: "18px"}}>Hooked? Read more about the insane rise of <Link to="/celeb" style={{color: "#ff0080", fontWeight: "bold"}}>C02 emissions</Link>!</p>
  </div>
  <div class="column"></div>
</div>
<div class="bottom aligned row" >
  <div className="ui segments">
    <div class="ui inverted blue segment" >
      <h2 class="ui header" style={{fontFamily:"Century Gothic"}}>
          This cannot continue! 
          We need to change our behavior drastically,
          in order to not have more sad babies like these:
      </h2>
    </div>
    <div className="ui inverted green segment">
      <div className="ui centered three column grid">
        <div className="row">
        <div class="column"><img src="https://lh3.googleusercontent.com/GRUNsTSM2ZzAtGYCiYtZt9rdx5zI1iO2KnvjLF_Vp-Qv7wOfxRW0JBl_uWZc8tfeefXJsTgORxswoPoj3HZ_ycxnz0ZcsGvs7DZwT2GXlMeRcUsXnQ0XmLgkJNFYh7nAXwot1mrs_mI5yt67P-oAOqtykMIdxkcHvHKG0ZxAy-pD5UuaYQ5ztydDo892a_qQA8KkHHq_GlKL7txjiIQOXKlTm_tMWyJ50bJ5zdMT2n2l-1cwUYSQHT8ZfT1rAErdH2o93gjGotiWOfIl4zap3JR0eG4H0DCcCzfwWBm_TsFzAeOnfpoHQGItXUOLLFIt0IbZAmlY60u0sppNar-ohebJUzNN_0dB8ZlYugJuhFP96znIuVGW9LDoGq2IZrMfRxfXtIVoROOIRAEeWFfTyLqKYPrX6fFYQ7DCDtJwgWGobFKQXWoAruwUOjPXaytb-TDMSQkAEdtwte6JbV-FMLFEThr0tv4ieZteBl4q3YH4AKwNo7bx_P3ibttmLa3L5wX_4GRIckvgztT5l3i9Zh0wNuaTR4lnx_19VpcgOU7G0no2aFhU7F-HQ6dxMqAWDXBps023o5X8fkqoyQbGPzxBZnzBkJfainL8Vf7bk7b9y7YVUS2xCZGEj75Wi0kg04dsGmIiHOTg08cLL7U2OFQl-b2ZNHW_60z_YVRNToibu2XM5-hG9kPTGn9NPcmuPPkluVH8MysfYpyuIQEvbs0QzW6_DM3UEHe7Pe6thg111lR7=w768-h576-no" className="ui rounded image" alt="sad koala bear"/></div>
<div class="column" style={{textAlign:"center"}}><img src="https://lh3.googleusercontent.com/YXXmYMVIGZWdSHg8KWqW56MfI3zynfvQu2LhQVQb4TyBmDwo50JlnBMsgSg4nDGBKsxmhJbSkoJNBIMqa4ejb0a1kt8f7WpZD4urCJGiRk_XTJqhhVTInZTwYaQd0sT7RuHR4Z_lVF6wvhVPYTQqLVzoesDE74sQtK8Ryy5SVaYLcWWJ0MkgyImluUPKBvk_dA7e08re581KDTQwHn3fH2OlSP0hNQoKM-yt_RoT6PTJ-g85gYA23eDR6ji8swxz4kaAbvlPN_oyBGj25jvUKrjvcvQV-ceslhkafFd9hoj0F2FFeVGnXn27zz7Pe_a7pUQSVuhkgobf5Zk3omA8-cUvsPzmhP07XLT71LhoOcQcITxSoGD6sIU3_PEyJMBq-eZm9hhgp1XyWlZvw2H4q-ce4suSThOlyfgPAGutuQtUW0X_61pz79MNdsCRVNEN0mJy5LxMYh4o35-VprEOkbYnuiraSJqD2VIGuAN-cotUprrYEU9AV23KtvnzeDOvEIQhHIbYBjmRK-PUbu48s4WO-wqgwfQU4LfH3OR86pgOk26mv-EQECqKBthuY1tcYilvTwfd7Gxa9EbiZWpplym48hQcCGvhxSJAl_du87UytOU5rX_NP_oEp9tkpH_AUsQEV59fbmuc3t4axVHXvAOI0Bsu9gCII2VEDLPrj-rsWX6Kh7jBkQUIykRisy-ODZrmL-ikfoXKV8G20h2AKAKh8PBe533H-TAQxOIpmFfGMLKf=w768-h576-no" className="ui rounded image" alt="sad walrus and baby"/>
 <span style={{display: "inline", color: "#1E86D5", fontWeight:"bold", fontSize:"26px", marginTop: "10px"}}>ACT UP NOW!</span>
</div>
<div class="column"><img src="https://lh3.googleusercontent.com/byb3SqiSIR5DnGqHVOM8DvoZ_MRUDnrssLk_iVOOFUcVIIsgCrCfL-yUK8Z7YjVvs6zMVjzvc3TPNECi4a5Z0oe8ho-vSQ9c_qp9R3vJoyvO7gKAaDtw8i2_AkK5b6_v5fZdUMZD4IKNo5K6-yb0XHZPGtQ4uu-iEW08gaHIdK2VhVomuhPQn-SeQ3j6WLC5SlDJZoZlYpF88vuelsnun7CkI6LMtdWquvaWN4Cq3pKRFE584vb3I4LV2r3yCUFn_pt5n7GrFvsWP8g0vT849LO88XlQhbX0Tahf94I0nfWBzTFZfdcLlcc40TQXfxVpycMpqa-qFl2fYZifiROepFoezYSLQDmwmk05iBXN0bET3BVWSvdMBYhiiNPnQ7JxgiTBzVuMU_1p-XFwLbHfpI9wMqKNfOuY82BSK2O69qp8bNyPxqM_XB6Fy6ZXhGEFxG5Wz1gOVLxANMhR7HODof0sRB4XrSAhnY84e54RpHEglyBmAeOZj8ZUXixpAwCSYBfWvm1EKpSqpu6QIjftjkt2d2yQt3C4gk8HYgrvYJ3p0CGuqxtLTnbQ1hD9INDBM9wuoLRdWlDul5t33_ysU1JF1Nq1ni-eHg4ptZEtIlGz7O4Lfk8A5cA85QYGeOpThH_Dby78K9THk906jCVQwCoQvumnqCY-UMaDmu0BYefrp0WVh2ErD5qlbNc3l19Vuu5zRekgIeGc7Ul42p4LW-O_VP84LOD2Vyj78iLPSRp-Niur=w768-h576-no" className="ui rounded image" alt="sad polar bear"/></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
        
     
            </div>
         );
    }
}
 
export default GlacierSize;

