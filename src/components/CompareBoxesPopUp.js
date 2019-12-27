import React, { Component } from 'react';
import Popup from "reactjs-popup";

class CompareBoxesPopUp extends Component {
    handleYear = e => {
          this.props.handleInputFirst(e.target.value);
      };
    
    handleYear2 = e =>{
        this.props.handleInputSecond(e.target.value);
    };
    
  
    render() { 
        return ( 
            <div id="wrapper">
            <div className="ui centered two column grid">
            <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.handleYear}/></div>     
            <div className="ui input"><input  type="text" placeholder="enter year..."  onChange={this.handleYear2}/></div>
            <button className="ui button" disabled={!this.props.year1 || !this.props.year2} onClick={this.props.compare}>
         Compare
        </button>
        {/*https://react-popup.elazizi.com/controlled-popup/*/}
        <Popup
          open={this.props.open}
          closeOnDocumentClick
          onClose={this.props.closeModal}
        >
           <a className="close" onClick={this.props.closeModal}>
              &times;
            </a>
            
          {this.props.box}
        </Popup>
            </div>
            </div>
         );
    }
}
 
export default CompareBoxesPopUp;