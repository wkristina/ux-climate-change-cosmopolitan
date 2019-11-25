import React, { Component } from 'react';
import '../css/Articles.css'
class Articles extends Component {
    state = {  }
    render() { 
        return (   
        <div className="container">
            <h2>Latest Articles</h2>  
          <div className="ui two column grid">         
        <div class="ui card">
        <div class="image"><img src="https://images.pexels.com/photos/2727483/pexels-photo-2727483.jpeg?cs=srgb&dl=brown-and-white-concrete-building-2727483.jpg&fm=jpg" alt="Dummy" /></div>
        <div class="content">
          <div class="header">Shocking!!!</div>
          <div class="description">This is how much the fashion industry really affects the climate!</div>
        </div>
      </div> 
      <div class="ui card">
        <div class="image"><img src="https://images.pexels.com/photos/2727483/pexels-photo-2727483.jpeg?cs=srgb&dl=brown-and-white-concrete-building-2727483.jpg&fm=jpg" alt="Dummy" /></div>
        <div class="content">
          <div class="header">This just in!</div>
          <div class="description">Read what [celebrity] has said about climate change!</div>
        </div>
      </div> 
      </div>  
      </div>
      );
    }
}
 
export default Articles;