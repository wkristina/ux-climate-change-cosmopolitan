import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                </a> <Link className="linkTo" to="/co2"> CO2 emissions</Link>?
                </p>
                </div>
            </div>
         );
    }
}
 
export default DummyArticle;