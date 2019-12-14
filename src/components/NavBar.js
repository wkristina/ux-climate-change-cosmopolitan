import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="ui centered grid">
            <div class="center aligned column">
              <div className="ui borderless menu" >
          <a className="item"><Link to="/"><img src="https://lh3.googleusercontent.com/mNSm_Jilr096Tx6hbpmk12QHY5eVBIXibYCeaivPUTLJ4hlbEcD9iTsd8nhTcI1giRNMzETIHF1P9CvD0PA0VcLEJmnmRDDOtyYNJSvkipoDWMW1aVh3Sj3RFDnHv-wOhpq1BM4RQ539yQIIz47j8xBk8102FF1BACzTkRiQ2n1AwJ7QdVnG8aR0beQ-ZMYLH7RD9jJU7GIyzkZtiXdTcEGpkwPJwDxVLdiVTkBzjY8gG-rOF3vGgobhU1A8y9tV4FiotyfHaMYmTwvRt_BvXV054mnWrDKX0opPXU9Bfr2b-wCq6bBgVFljqtBSjb3wDVbxdpWM7hE4qxVJQdy-97oaqrgOv1LYDpPa4lVxMT4Wnir6UuJB_3xPB_bAyyAej_CnHnXXBN7FCZD-gR2nuRFNedcLEOglgZJXl2mWyUmFPeZ7GzGKjUy2H4iSxLXWK5Xq2Q5daKo-wmAWJuAGY1wu2rcRCwu7n924LvZsgkB4_SUn684GzzqxxPaNlzSoLBj-pif0Y0eW9trtawp6GGihWjwHMYp8rgFu2wt_piJYdonCwSvtsXM-RYpJOcJPq-LAmCT8UUMp0VRiN1rd4PRyZLk0Qp4ypTKAwI-a92aJzu7-XkbtBRHcu4boiAqEVZRvaVwklxaBiua2fW4ihIdzX69fsjGIhWbW8VasnYLsSTIC22-j_Qts-yXVwYhVqa6U2Y4acilWCAUfUa4_wC7wLXCJrT_RJrwWEwtYZBYXbPJu=w991-h167-no" alt="Cosmoplitan Logo" width="160" height="30"/></Link></a>
          <Link to="/style" className="item">style</Link>
          <Link to="/celeb" className="item">celebrities</Link>
          <Link to="/beauty" className="item">beauty</Link>
          <Link to="/nature" className="item">nature</Link>
        </div>
        </div>
        </div>
         );
    }
}
 
export default NavBar;