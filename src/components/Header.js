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
                 <img className="earth" src="https://lh3.googleusercontent.com/CSjx1Xdts-NNT_G7S7WgLH8q9R0nh6nkh0KhiYZEoanA6_OU3zFR-8w8lUbSv4oDBC67EAITWh00SfoQ13SH3LqXpbRnB_pO8DhSK3lMRhJwF0XbvXkiOEDA4GRQvxWAvDNihDDkDrDFpHcsBBoY_FbP2WVJK9YSoDk_nqzyCgodr5D-Ij7dQq-zwHTv0O0fod_-XdF32VyrCPLJ1p9AadFxOzx57tn-9ohdjQQSNNuNrMuqHMlfyi00DKtS-Jw8UBGmYHn2lUJPNW5vCDcU16VVyvtgel5rEGhPURxnQ7KbG72JKPKVINVxP4yi1i_U32EdABjC9REFFUcMmnhg2PXd-irxnB4CWZF1h8xxQzJ8WJ4h9Oqh9mMPj2zXe6rtpyWzZlwPf_pXr4VY-2Z_krx9rMqqt_5YCB4Tec-6193TN0dIU1xG9vvcDl0WHsvB4tVOZ7_dewnSeqIY0f83Vg99ZjLfrXsGgEXAwIA6zJpJ2NzUgQ7ZDFKctV237v6ddFhbZHSaUlepPQfY6yhm-cdw337ta26m5CicqH5GQnAeiDoNV6H9-DQjR-zE35dDgEvwkJBBxnreNswyBMqm97hImK2aOaDd1Qr3ff-3c81YmcHrRDmer2ONm0D2MoOZbHv7RU1Z1gh2oeka_WmFOBY837k3H-hg50aozdfyW-rZCzps9CIm6aOdYpU7oc2LjUpxs6uS06wDOkwyuuMeX1B6e2FnWAeaGsz1J90-99llrL4m=w443-h460-no" alt="Earth" width="150" height="150"/>
                    </div>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Header;