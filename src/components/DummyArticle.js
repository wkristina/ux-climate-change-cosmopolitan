import React, { Component } from 'react';

class DummyArticle extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <a>
                Here, we can place a dummy article to display when the user clicks on a link.
                We should also make sure to include links to the fact pages.
                </a>
            </div>
         );
    }
}
 
export default DummyArticle;