import React, { Component } from 'react';

class CompareBoxes extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.props.handleInputFirst}/></div>
               <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.props.handleInputSecond}/></div>
                <button className="ui button" type="button" onClick={this.props.compare}> compare </button>
            </div>
         );
    }
}
 
export default CompareBoxes;