import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div style={{backgroundColor:"#CDFFF6", height:'300px'}}>
                    <div className="content">
                    <div className="textHead">
                    <h1>How do you affect the climate?</h1>
                    </div>
                    <div className="picture">
                    <img className="earth" src="https://images.pexels.com/photos/45208/world-earth-planet-globe-45208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Earth" width="150" height="150"/>
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;