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
            <div className="ui centered three column grid" >
                 <div class="centered three column row">
                <div className="column">
                    <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.handleYear}/></div>
                    </div>
                    <div className="column">
               <div className="ui input"><input type="text" placeholder="enter year..." onChange={this.handleYear2}/></div>
               </div>
               <div className="column">
                <button className="ui button" type="button" onClick={this.props.compare}> compare </button>
            </div>
            </div>
            </div>
         );
    }
}
 
export default CompareBoxes;