import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{backgroundColor:"#E0F3F7", height:'300px'}}>
                    <div id="headerGrid"className="ui two column grid">
                    <div id= "headerRow"className="row">
                    <div id="headerText"className="column">
                    <h2 >
                    <span style={{backgroundColor:"white", color: "#286A8C"}}>Sustainable is the new trend</span>
                    </h2>
                    <h1>
                    <span style={{backgroundColor:"white", color: "#286A8C"}}>How do you affect the climate?</span>
                    </h1>
                    </div>
                    <div className="column">
                 <img className="earth" src="https://lh3.googleusercontent.com/7TSc6pwRO-AYjlFSX62X2O5VTyOT_R8pnWORwtbFjpIWBk17HHu6BB5J2EKLiq2Z5W8jnFZMSn1F_YOmJcmyN0DHsxfs-LMwpRlqnXVphl0m9hGmbZti3Srw6UwuP_pgDguW80xq1gql-7e6ggRG9MPdEmsRpOGfKXwYKVeT21dL9cybVmvieJhqZ4hB1t0JUhJ0eWNRHaRbyWx8j3Ey7PeN4uo6rrli6dNmku86-dJBV_YG_G_sjklsdruuVhCAD-IPol5pMXEIvra-kcNnBH6deyRozd1UJoBS21UxSGSjGQqyJJzoNYJy-WiZbHwKqblN-E9Xl4BuoHwzRUxAkEouB-2eF-EAI7Ll01ynJMJQ44xYeIiBM7MpjZ8wgDpbmPfiJV33Y6dXoPfeOOCkUnHuTkIhfxOTMoGkD_sWePcuCf_RJVClAFwbWqg1sj7Q4z27t5UzUEdD4fl6tvd6R_5wiTf9l1l_1RdnK5SQoo937qpCkZ6VxR_hyKmlg3SmJmB1Ygan8Wxhv4zHA8DhpCQ44NLcY7dECI87u-dNPD_LARzgjc1hUi1_i_ckVfKNf3hf4qJQKc_wkuh9LU4ODWk2rzePjKVDlZJwaGRnuAYOtIrpn9YhZIGN3JiKzz1ZotSxLsgM02N54GcRqZmTILfEFd_Q62PUqYrpkjTQwJlF0TARe_eHu0LcMyGQ8ek-dcYTOi8gBYEukqWlzqpDsqQ5VjReRlwYS_7DrAwa3L41gAtB=s512-no" alt="Earth" width="150" height="150"/>
                    </div>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Header;