import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div style={{backgroundColor:"lightblue", height:'300px'}}>
                    <div>
                    <h1 style={{textAlign:"center"}}>How do you affect the climate?</h1>
                    </div>
                </div>
                <div class="ui card">
  <div class="image"><img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdnmedia.keepcup.com%2Fcatalog%2Fproduct%2Fcache%2F6b1c09900b407c50fce2db5e66ebc123%2Fr%2Fe%2Freusable_plastic_cup_black_small_1.png&imgrefurl=https%3A%2F%2Fus.keepcup.com%2Fshop%2Fespresso-cups&docid=QfgM4Le0jNV3eM&tbnid=TFpEo0atm3_UKM%3A&vet=10ahUKEwjmgaSLxf3lAhXd4KYKHSDLC60QMwhaKAkwCQ..i&w=265&h=265&bih=722&biw=1536&q=small%20picture&ved=0ahUKEwjmgaSLxf3lAhXd4KYKHSDLC60QMwhaKAkwCQ&iact=mrc&uact=8" /></div>
  <div class="content">
    <div class="header">Matthew</div>
    <div class="meta"><span class="date">Joined in 2015</span></div>
    <div class="description">Matthew is a musician living in Nashville.</div>
  </div>
  <div class="extra content">
    <a>
      <i aria-hidden="true" class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
            </div>
         );
    }
}
 
export default Header;