import React, { Component } from 'react';
import CompareBoxesPopUp from './CompareBoxesPopUp.js';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
  } from 'recharts';
import { Link } from 'react-router-dom';
import SeaData from '../json/Dataset4_Sea Level ';

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
        tempIndexYear2: 0,
        open: false
     }

     async componentDidMount() {
      const url3 = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0 ";
      const response3 = await fetch(url3);
      const data3 = await response3.json();
      let filtered =[];
    for (let i = 0; i < data3.length; i++){
    filtered.push(data3[i].Time);
    let date = new Date(filtered[i]);
    data3[i].Time = date.getFullYear();  
  }
      this.setState({seaLevelChange: data3})  
  
      if (data3 === undefined){
        let filtered =[];
        for (let i = 0; i < SeaData.length; i++){
        filtered.push(SeaData[i].Time);
        let date = new Date(filtered[i]);
        SeaData[i].Time = date.getFullYear(); 
    }
   this.setState({
        seaLevelChange: SeaData
    })
    }
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
          this.setState({open: true});
        } else {
          alert("Year could not be found. Please enter a valid year between 1880 and 2013.");
        }
      }

      closeModal=()=> {
        this.setState({ open: false });
      }

    render() { 
        let box;
        if (this.state.validityCheck === true){
        box =  
        <div>
        <p>These are the results for the years you entered!</p>
        <p>[Reconstructed Global Mean Sea Level (GMSL) in mm]</p>
        <p>{this.state.indexYear1}: {this.state.seaLevelChange[this.state.index1].GMSL}</p>
        <p>{this.state.indexYear2}: {this.state.seaLevelChange[this.state.index2].GMSL}</p> 
        </div>
        }
        return ( 
            <div id="wrapper">
              <div class="ui centered three column grid">
  <div class="top aligned row">
    <img src="https://lh3.googleusercontent.com/RdMoDa4GJmzXjhsq9HJtAkwKToSdmmSgIUq7DDECD9FaL-RSdpBUnSdF-SiKv55yxTd_EutwYuYTKQxpgBHnXg-ueCTSuiUHtSp1NE3YvNxsoN7GZkGa-zPUFnrwWZuVWnFMQMaLTB9xSBCAEKQbiZ7l1No6LFMyb0xbbwRwc56VujIeZgLx3UQr4re2h5nYMkZHEjihiwZJw0pLLVrLrWQbed6_Lk1JMf-Tm_oCcuk9LMofsNMk4-IIMJzEr1UYjHkNrl604nXq9TgLqK_O5Epvki-yX2qChE5GSsAV1JVGQNnauLgVwnbLj3YmnQHs9tcwQC0T__RdWkDbWXpuvLIZz2zzQ-2EaIA_qNtze2YQztYwqKJTnDh96zsl1SVRpr2JJR501FVJJmKxUZ3puRup4140qbhU8gQhd0x7C7unD7AMixPJLT_9B8E7n8kFywQ-mu9DkCRpJCXfF-1MDpxXNe55GHajWROHQj_55Y2nukQ4zCfiFL1WwvK1vf60WYuEsVjnmLMopnsRlzrj7VPe9SIf9Etx8AgnNlv60zdaOBKTD8HPxFJx3G3f_vuW9Md02geG7mWdjGhy-TUzX9GXrmhZCBbdobJynImMDQ3Sqb3Si5rFKtxYtupBMQJWaGQpDeB2V0CHskqESY6wd8k2xPdyG0WYh32f9TkVwa8xs9ItOG2o7LnD5U6uwvYDaEhu5iIHJvIk0RxbWWiSqfQ6HKjUKjhhYxPeZlAujp-5mrai=w1920-h330-no" className="ui image" width= "100%" alt="banner highlighting the bad impact of the fashion industry on the climate"/>
  </div>
  
  <div class="middle aligned row">
    <div className="one wide column">
    </div>
    <div class="seven wide column">
      <div className="two column grid">
        <div className="row">
          <div className="six wide column" >
            <h2>And these are the consequences...</h2>
            <div className="ui divider" style={{marginBottom: "30px"}}></div>
          <p>Fast fashion is a business model that promotes rapid production of cheap clothing to meet the most recent fashion trends. Quality and durability have been pushed aside in favour of cheap clothing. The devastating truth to this is that it has lead to enormous quantities of clothing ending up in landfills.</p>
          <p><span style={{fontWeight:"bold"}}>10.46 million tons of clothing</span> ended up in US landfills in 2014.</p>
          </div>
          
        </div>
      </div>
      </div>
   <div className="two wide column">
   <img src="https://lh3.googleusercontent.com/8Zth6qhmuFMZ-dpWpJhBW8QZ8wSOo94xWKE9wToOASkKwd3PttdVoNvUTc2EoPd5PSR9BBlBQm60-pNmmumg9QI4yxeYURF8zJzmEejISs4_lb87y-_QO0Vx-KtiLYKO20uEx2IAMKcQzfNhLjwY6Q4myW3_cO1tDHjT7_R3bEc9bgvVM4y71VADEf8iHOELBXD1DZT-vmVyhULZ2joQQBs58epqJH8QxQC835ajYUOD9X4M87-ljL_SpoaY5H1mcUagarlN7fCgzqQhr0qRzn5kIuR64u7191rW1uX0QN6WFkShK4chhBMhOpxed604R4KbvVhtlot6BSqxCaGKA7aUU2cVrGIQJDF2A5m3AvUyiVVbEyoqn9Wih_gefAc8mzH9-u0pw1NqcrU0DZlRpYbcWFgzkf03Qmrn6Zch9ZFr9xdV90clDYiEkvqIVey3PYqgpS5eu7cDVFgzVUnPhHEk05VM2XfQtHXuEd8UAftksG5cMb5o1vHlAB_ILcZt8mquoquACDiBqblb3Y-iah8xUF8EsHglOZr_zEf6g_m6ndPuXCB-y7s1c8bhBAPVmAcnWYCnQSq0FQ676wHFamHW7gSmMSZpzyfVIwJez4_JSfRMyRKke_NsfpR9gqJj4Tdt-2-01sZjQQZ17BnBbBJ03fRs9F-dZkgSvpMGVZ7IKDvZR8O5cebHjdJM5QuFe_wmu0We56IdKI6okg1cpakd_DjSWqJ2FYyEn4oNSyGJh479=s813-no" className="ui medium circular image" alt="garbage dump"/>
     </div> 
  </div>



  <div class="middle aligned row">
  <div class="two wide column"></div>
    <div class="seven wide column">
    <div className="ui segments">
          <div className="ui inverted green segment">
            <span className="title">Dreadful before and after pictures of the Aral sea</span>
          </div>
          <div className="ui inverted brown segment">
          <div class="ui centered two column grid">
  <div class="row">
    <div class="column">
          <img src="https://lh3.googleusercontent.com/2i2pEx8vpESAmQy-vnM2e2FMlvFt-vubINlUrTnuol_SaSwPiZ-aYt-gg3cFh9U91QrP3eJm4HTOlC-2gGA4Uaf4BHxLNBdcWnD9Qz-Jx64fNU-vTOrECIXynEbWg7ufGKlI5-zFfgsuPYeoy60HZoneEPAUTQ24CfgsQGgOuLeBuCsL8xDAn_BddApA5JZFEy98qrW_iB1wQorVA9vJm-p1X6BEPKriZyx60t6U0A2cFiA81WDMkPQJFy837pA7zjq1bYIkKERve7ulZMNAk9L-k1oEHvd7TPU7x2JMicAbkRfXTGyZmJjlFTno8apX_g46YRyMpUDhLzl569Hw2pjZHJYlLz9chQy8sVAFQGP_kQeKeYcV8vD8hzksRBmi98dgP6TArr7uvDPc0lLMoI5PtHlEF8ZPs70tYTyqmAkORhga48e5cLfQrJrh8ruxtg8CLUB8wSUe3xxsPEk_PbXdDZ-eWlPQ7L49VvzorlhTxCKvOh5CGUIomT_yVZq8kWMsAIHr5aECUTDgJfiqre4UdXApCUwpdusNc5m-ygYuYgyre8Es9ONGvBcy07gWXbkqnlhM9g2FQCgdJntpRWYGIKoBAC7gyA97wVhEcKkPeIWIekFkQdlYUXO8yOrPNu-F0sI2TjLsvGEq9GVI26BDmS0ZHc8UFjXsEsBcpYIx5gpCkyNXqKD0QUB79ahQ_Dwyb-rwvUV_r1TaL0Yvpezp30OuK-bBVsyjHAM5ktArGjvv=w993-h843-no" className="ui medium image" alt="Aral sea 1989 vs. 2014"/>
   <p style={{color:"#59ADAF", fontWeight:"bold"}}>1989         vs.         2014</p>
    </div>
    <div class="column">
    
    <p style={{color:"#59ADAF", fontWeight:"bold", marginTop:"40px"}}>Almost the entire Aral sea has now dried up because the rivers leading to it were redirected to maintain cotton plantations</p>
  
   <p style={{color:"#59ADAF", fontWeight:"bold"}}>Left is only arid desert...</p>
  
   <p style={{color:"#59ADAF", fontWeight:"bold", marginTop:"40px"}}>Is fashion really worth all this destruction?</p>
    </div>
  </div>
</div>
          </div>
          </div>
</div>
    <div class="two wide column"></div>
  </div>

  <div class="middle aligned row" style={{backgroundColor:"#FEDDD6"}}> 
  <div className="two wide column"></div>
  <div class="ten wide column" style={{textAlign: "center"}}>
  <h2 className="ui header" style={{fontFamily:"Century Gothic"}}>But it also works the other way around...</h2>
    <div class="ui pink segment" style={{fontWeight:"bold", fontFamily:"Century Gothic"}}>
    Ice is melting due to high temperature. The sea level is rising. If we don't prevent this, we gon' drown, baby.
    So wake up!
    <p>Use the compare boxes below to see the drastic differences between two different years (1880-2013!)</p>
    <p style={{fontWeight:"bolder"}}>[Reconstructed Global Mean Sea Level (GMSL) in mm]</p>
    </div>
    <div className="graphBox">
  <LineChart width={800} height={400} data={this.state.seaLevelChange}
            margin={{top: 5, right: 20, left: 30, bottom: 5}} className="graphBox">
       <XAxis  dataKey="Time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Line type="monotone" dataKey="GMSL" stroke="#ff0080" activeDot={{r: 8}} dot={false}/>
      </LineChart>
      </div>
     
  </div>
  <div className="two wide column"></div>
  </div>
  <div class="middle aligned row" style={{backgroundColor:"#FEDDD6"}}> 
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
                closeModal={this.closeModal}/>
  <div className="ui divider" style={{marginTop: "40px"}}></div>
  <p style={{fontSize: "18px"}}>Hooked? Read more about the fast shrinking of <Link to="/nature" style={{color: "#ff0080"}}>glaciers</Link>!</p>
  </div>
  <div class="column"></div>
</div>
<div class="bottom aligned row"> 
<div class="two wide column"></div>
<div class="seven wide column">
<div className="ui segments">
  <div className="ui inverted pink segment">
  <span style={{color: "white"}}>So...what can we do?</span>
    </div>
    <div className="ui inverted green segment">
          <div class="ui centered two column grid">
  <div class="row">
    <img src="https://lh3.googleusercontent.com/QI3RWq__Uss9-FICqSqgXpEz4G9eL1HoHGFjTyexYzhUS9RzTTQHQlMfQ7WarJshEe4vUHkRInSKs-DgrF99ZnA3WLaCbGfupsEN8VjiDlNyT2p3rXQ8etVOYEJ0SONdE9E1Vueox98Wf82ebI_8lcmQR5XfToZ7C15W4T50nVZcbiwI43XWi6LIY4tZLgCiIjnFAX_cCg7KJoLmgQ31h2-lA4cMewkEyRnbju1lkwDpxjNHGNY0YvcZvah9sROR-0s8gZT4QqiW4rdnp2rHxKu0gOwSRiVuPRtrz1Insfrf3ouutc8ccysei19yW190EyDMI-DwCbJJE53MdD_ZdMKs6ZhpbWwZWuHVTI2cp9qzeo23n9zDcmTtaigrZ008skWEENIs0uHU1gVAwQb79xMpXtkN1TKAbrARkiYx7UdFWbqnTSJblHaQNHiKcbyEGTQ69N0jt_gsOqA2JVDJO3M0KuoEEbigKd_JO_QajCrCrtlfZ714gCxQqUE3540e5IRCEMFSCAib7viK1woK_fVKLnvbZqMghdtg5oTAyam9YU49wSPSPvtgB8SaTziwJsvNI8-99B88q9qPcmmCI3XWNqoQPt7UWzth8J8ws2mdn9SlfW9n5GvgDTCB3CHJdhfWbVmheEj6DmCKiB9RpexT89rbMKiCmaVbED6gFi5_wQxcwZcjYZcyDvt3LTygbaGsSIqsKfBT0doyZPasvgkKXGxP7ncib8Nqwp0_hjDsrUdi=w1170-h609-no" className="ui image" alt="tips on how to be more sustainable in fashion"/>
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
 
export default SeaLevel;