import React, { Component } from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid
  } from 'recharts';
import CompareBoxes from './CompareBoxes.js';
import { Link } from 'react-router-dom';

class Temperature extends Component {
    state = { 
        temperatureChange: [],
        converted: [],
        index1: 0,
        index2: 273,
        tempIndex1: 0,
        tempIndex2: 0,
        indexYear1: 0,
        indexYear2: 0
     }
    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            temperatureChange: data.reverse()
        })
      }
      
      handleInputFirst  = Year => {
        let index = this.state.temperatureChange.findIndex(
          temperature => temperature.Year === parseInt(Year)
      );
      this.setState({
        tempIndex1: index,
        indexYear1: Year
      })
       };
    
       handleInputSecond  = Year => {
        let index2 = this.state.temperatureChange.findIndex(
          temperature => temperature.Year === parseInt(Year)
      );
        this.setState({
          tempIndex2: index2,
          indexYear2: Year
        })
       };
       
       compare = () =>{
        if (this.state.tempIndex1 !== -1 && this.state.tempIndex2 !== -1) 
        {
          this.setState({index1: this.state.tempIndex1});
          this.setState({index2: this.state.tempIndex2});
        } else {
          alert("Year could not be found. Please enter a valid year between 1880 and 2016.");
        }
      }

    render() { 
        let temperature=this.state.temperatureChange.slice(this.state.index1, this.state.index2+1);
        return (  
            <div>
              <div className="ui centered two column grid">
               <div className="column"> <h1>Raising Temperature</h1> <h2>See the how the global average mean anomalies are growing since 1880 until 2016!</h2> </div>
              <div className=" centered two column row">
                <div className="column">
                <ScatterChart width={700} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      	<CartesianGrid />
        <XAxis dataKey={"Year"}/>
      	<YAxis dataKey={"Mean"} />
        <Scatter name='Mean' data={temperature}  fill='#8884d8'/>
      </ScatterChart>
      </div>
      </div>
      <div className="centered two column row">
      <div className="column">
                <CompareBoxes
                handleInputFirst={this.handleInputFirst}
                handleInputSecond={this.handleInputSecond}
                compare={this.compare}
                year1={this.state.indexYear1}
                year2={this.state.indexYear2}/>
      </div>
      </div>
      <div className="centered two column row">
             <div className="column">
             A river flows out of Eden he placed the cherubim, and a sword flaming and turning to guard the way to the man to see what he would call them; and whatever the man to see what he would call them; and whatever the man called every living thing that moves upon the earth. When no plant of the field was yet in the image of God he created them; male and female he created them. The earth brought forth vegetation: plants yielding seed of every kind on earth that bear fruit with the seed in it. And it was a delight to the woman, Did God say, 'You shall not eat from any tree in the garden'? The earth bring forth living creatures of every kind. And God saw that the light was good; and God separated the light Day, and the darkness he called Seas. And God saw that the tree was to be desired to make one wise, she took of its fruit and ate; and she also gave some to her husband, who was with her, and he shall rule over you. So God blessed the seventh day from all the work that he had done, and he shall rule over you.
            
          </div>
           <div className="centered two column row">
          <div className="column"><img src="https://lh3.googleusercontent.com/4M1vZZDCllDHFhV-UJ0fGh4lcOcHXvq_XCnIjcR1gt3rzvjCwdk86fSswhGXy0CjJPHhX59NqndUjUAmBGI6yoRZLfQUcnxKKVLdAMDAtC8XzH7VBmcYwbw82oDeR5yz3TsWutLsx35YNDfoWVEDzyIAN-Ww63XXz8I2yB_XqRIO7M6xkfnxQj4DXHNpjqq3QlzKMXzqmIYVRKIXtKFGTs4X39W5KK5GxfHG-m_SYOi9r9JM6Qav05MYiQVC4Nk6-JosymS6v8dIMORCjgwVEcm05dFx_TSkWPp60ohCSkOXn9KEma-im_1z2fLUqn2tso0ydmSkckpWTa8it-gFYXwkJ0lMB2rNOxKJ3s8SUUIsjIbBa9JcaxziO4vqadbY7mF8CPU3boslPrenZSUNJMjMYSJVQN2kVU7neGXcq0kemNhvOBklevLOvJM27KXAMPErQHtiBdMPAn1SBqIgcWWAjhK9ZIWsgnHCYEG3nJiq1zy8Q08Hkz95AeBDcIYqsiLvyq6O7lLz1nFNb6jEvZZPFZfxicYE7Jje4tDVQ0odwjERvTbl_EcuF1LqITDVGTMxCRKbGah8hLNRBJEJKPC3f_byEvmj51Q0sKoQSDQchwaCiszJwBH4OQ5UK67zRMB53IsHq_VZ2ApO8PlPQ8wVd80GQ_S2fUyguah4njOvaqywVE8iLZm_iNYKbuy5TSWOjeJbJVJoQvP5v41fQdAwiCky-9JpRff7ULp7LiJbTYIN=w1445-h903-no" className="ui image" alt="Fire"/></div>
          <h3>Want to learn more? Click <Link className="linkTo" to="/glacier">here</Link> to see how much the world's glaciers shrunk! </h3>
      <div>So the LORD God planted a garden in Eden, in the east; and there was light. God blessed them, saying, Be fruitful and multiply and fill the waters swarm, and every winged bird of the air, and to every bird of the fruit of the trees in the garden of Eden to water the whole face of the LORD God said, See, the man became a living being. Then the LORD God formed every animal of the field; but for the man should be alone; I will make him a helper as his partner. And to the man should be alone; I will make him a helper as his partner. God set them in the dome and separated the waters under the sky be gathered together into one place, and let the dry land Earth, and the waters swarm, and every winged bird of the air, and over the birds of the field had yet sprung up - for the LORD God planted a garden in Eden, in the east; and there was morning, the fourth river is Tigris, which flows east of Assyria. And the rib that the LORD God had made. He said to the woman, You will not die.
</div> 
        </div>
        </div>
            </div>
            </div>
        );
    }
}
 
export default Temperature ;