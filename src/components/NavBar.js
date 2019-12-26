import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
    state = { activeItem: '1' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    state = { 
        activeItem: "Home"
     }
    render() { 
        const { activeItem } = this.state
        return ( 
            <div class="ui centered grid">
            <div class="center aligned column">
            <Menu borderless>
        <Menu.Item
          name='Home'
          id="logo"
          as={Link}
          exact to="/"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        > <img src="https://lh3.googleusercontent.com/mNSm_Jilr096Tx6hbpmk12QHY5eVBIXibYCeaivPUTLJ4hlbEcD9iTsd8nhTcI1giRNMzETIHF1P9CvD0PA0VcLEJmnmRDDOtyYNJSvkipoDWMW1aVh3Sj3RFDnHv-wOhpq1BM4RQ539yQIIz47j8xBk8102FF1BACzTkRiQ2n1AwJ7QdVnG8aR0beQ-ZMYLH7RD9jJU7GIyzkZtiXdTcEGpkwPJwDxVLdiVTkBzjY8gG-rOF3vGgobhU1A8y9tV4FiotyfHaMYmTwvRt_BvXV054mnWrDKX0opPXU9Bfr2b-wCq6bBgVFljqtBSjb3wDVbxdpWM7hE4qxVJQdy-97oaqrgOv1LYDpPa4lVxMT4Wnir6UuJB_3xPB_bAyyAej_CnHnXXBN7FCZD-gR2nuRFNedcLEOglgZJXl2mWyUmFPeZ7GzGKjUy2H4iSxLXWK5Xq2Q5daKo-wmAWJuAGY1wu2rcRCwu7n924LvZsgkB4_SUn684GzzqxxPaNlzSoLBj-pif0Y0eW9trtawp6GGihWjwHMYp8rgFu2wt_piJYdonCwSvtsXM-RYpJOcJPq-LAmCT8UUMp0VRiN1rd4PRyZLk0Qp4ypTKAwI-a92aJzu7-XkbtBRHcu4boiAqEVZRvaVwklxaBiua2fW4ihIdzX69fsjGIhWbW8VasnYLsSTIC22-j_Qts-yXVwYhVqa6U2Y4acilWCAUfUa4_wC7wLXCJrT_RJrwWEwtYZBYXbPJu=w991-h167-no" alt="Cosmoplitan Logo" width="160" height="30" class="ui image"/></Menu.Item>
        <Menu.Item
          name='style'
          as={Link}
          exact to="/style"
          active={activeItem === 'style'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='celebrities'
          as={Link}
          exact to="/celeb"
          active={activeItem === 'celebrities'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='nature'
          as={Link}
          exact to="/nature"
          active={activeItem === 'nature'}
          onClick={this.handleItemClick}
        />
      </Menu>
        </div>
        </div>
         );
    }
}
 
export default NavBar;