import React, { Component } from 'react';

class DummyArticle extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 class="ui center aligned header">More exciting content coming soon!</h1>
                <div className="ui centered two column grid">
                <p>
                <a>
                We are working hard to present you more content. Thanks for your patience! Meanwhile, why don't you check out the facts about 
                </a> <a className="linkTo" href="/ux-climate-change-cosmopolitan/co2"> CO2 emissions</a>?
                </p>
                </div>
            </div>
         );
    }
}
 
export default DummyArticle;