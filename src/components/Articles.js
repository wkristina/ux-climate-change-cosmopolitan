import React, { Component } from 'react';
import '../css/Articles.css'
class Articles extends Component {
    state = {  }
    render() { 
        return (   
        <div className="container">
            <h2>Latest Stories</h2>  
          <div id= "articles" class="ui two column grid"> 
            <div className= "row">
              <div className="column">
  {/* always wrap entire card as link, otherwise the semantic ui layout will not work (means that entire article is clickable)*/}
        <a href="/article">
        <div class="ui card">
        <div class="image">
          <img src="https://images.pexels.com/photos/2727483/pexels-photo-2727483.jpeg?cs=srgb&dl=brown-and-white-concrete-building-2727483.jpg&fm=jpg" alt="Dummy" />
          </div>
        <div class="content">
          <div class="header">Shocking!</div>
          <div class="description">This is how much the fashion industry really affects the climate!</div>
        </div>
      </div> 
      </a>
      </div>
      <div className="column">
      <div class="ui card">
        <div class="image"><img src="https://images.pexels.com/photos/2727483/pexels-photo-2727483.jpeg?cs=srgb&dl=brown-and-white-concrete-building-2727483.jpg&fm=jpg" alt="Dummy" /></div>
        <div class="content">
          <div class="header">This just in!</div>
          <div class="description">Read what [celebrity] has said about climate change!</div>
        </div>
        </div>
        </div>
      </div> 
      <div className= "row">
      <div className="column">
        <a href="/article">
        <div class="ui card">
        <div class="image">
          <img src="https://images.pexels.com/photos/2727483/pexels-photo-2727483.jpeg?cs=srgb&dl=brown-and-white-concrete-building-2727483.jpg&fm=jpg" alt="Dummy" />
          </div>
        <div class="content">
          <div class="header">Shocking!</div>
          <div class="description">This is how much the fashion industry really affects the climate!</div>
        </div>
      </div> 
      </a>
      </div>
      <div className="column">
      <div class="ui card">
        <div class="image"><img src="https://images.pexels.com/photos/2727483/pexels-photo-2727483.jpeg?cs=srgb&dl=brown-and-white-concrete-building-2727483.jpg&fm=jpg" alt="Dummy" /></div>
        <div class="content">
          <div class="header">This just in!</div>
          <div class="description">Read what [celebrity] has said about climate change!</div>
        </div>
        </div>
        </div>
      </div>
      </div> 
      {/* See how to make picture with heading, temporary solution below */}
    {/*}  <div id="bigArticle" className = "ui container">
    <div class="header"> <span id="headerBigArticle">Newsflash</span></div>   
  <div class="image"><img src="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="ui huge centered image" alt="Dummy" /></div>
        </div> */}
      </div>
      );
    }
}
 
export default Articles;