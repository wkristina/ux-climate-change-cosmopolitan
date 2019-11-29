import React, { Component } from 'react';

class CompareBoxes extends Component {
    state = {  }
   
    handleYear = e => {
          this.props.handleInputFirst(e.target.value);
      };
    
    handleYear2 = e =>{
        this.props.handleInputSecond(e.target.value);
    };
    
  
    render() { 
        return ( 
            <div className="ui centered two column grid" >
            <div className="ui input"><input id="inputYearOne" type="text" placeholder="enter year..." onChange={this.handleYear}/></div>     
            <div className="ui input"><input id="inputYearTwo" type="text" placeholder="enter year..."  onChange={this.handleYear2}/></div>
            <button className="ui button" type="button" disabled={!this.props.year1 || !this.props.year2} onClick={this.props.compare}> compare </button>
            </div>
         );
    }
}
 
export default CompareBoxes;