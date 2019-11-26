import React, { Component } from 'react';

class CompareBoxes extends Component {
    state = {  }
   
    handleYear = e => {
        
          this.props.handleInputFirst(e.target.value);
          console.log(e.target.value);
      };
    
    handleYear2 = e =>{
        this.props.handleInputSecond(e.target.value);
        console.log(e.target.value);
    };
    
  
    render() { 
        return ( 
            <div>
                <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.handleYear}/></div>
               <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.handleYear2}/></div>
                <button className="ui button" type="button" onClick={this.props.compare}> compare </button>
            </div>
         );
    }
}
 
export default CompareBoxes;