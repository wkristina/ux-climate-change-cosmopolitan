import React, { Component } from 'react';
import Popup from "reactjs-popup";

class CompareBoxesPopUp extends Component {
    state = {  }
   
    handleYear = e => {
          this.props.handleInputFirst(e.target.value);
      };
    
    handleYear2 = e =>{
        this.props.handleInputSecond(e.target.value);
    };
    
  
    render() { 
        const Tooltip = () => (
            <Popup
            on="hover"
              trigger={(open =>
                <button className="ui button" type="button" disabled={!this.props.year1 || !this.props.year2} onClick={this.props.compare}>Compare</button>
              )}
              position="right center"
              closeOnDocumentClick
            >
            <span>Check out the results in the info box above!</span> 
            </Popup>
          );
        return ( 
            <div id="wrapper">
            <div className="ui centered two column grid">
            <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.handleYear}/></div>     
            <div className="ui input"><input  type="text" placeholder="enter year..."  onChange={this.handleYear2}/></div>
            <Tooltip/>
            </div>
            </div>
         );
    }
}
 
export default CompareBoxesPopUp;