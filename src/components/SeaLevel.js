import React, { Component } from 'react';
import CompareBoxes from './CompareBoxes.js';

class SeaLevel extends Component {
    state = {  }

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0 ";
        const response = await fetch(url);
        const data = await response.json();
      }

    render() { 
        return ( 
            <div>
                <h1>test sea</h1>
                <CompareBoxes/>
            </div>
         );
    }
}
 
export default SeaLevel;