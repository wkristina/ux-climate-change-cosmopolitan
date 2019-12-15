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
                We are working hard to present you more content. Thanks for your patience! Meanwhile, why don't you check out the latest gossip about 
                 <Link className="linkTo" to="/celeb"> your favorite celebrities</Link>?
                </p>
                </div>
            </div>
         );
    }
}
 
export default DummyArticle;