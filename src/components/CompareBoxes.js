import React, { Component } from 'react';

class CompareBoxes extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <input type="text" placeholder="enter year..."/>
                <input type="text" placeholder="enter year..."/>
                <button type="button"> compare </button>
            </div>
         );
    }
}
 
export default CompareBoxes;