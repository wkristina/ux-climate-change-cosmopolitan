import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Articles.css'
class Articles extends Component {
    state = {  }
    render() { 
        return (   
        <div style={{backgroundColor: "#FEDDD6"}} id="wrapper">
           <div class="ui pink inverted segment" id="question">
            <h1>It's everywhere...of course you've heard of that big thing: CLIMATE CHANGE.</h1>  
             
             <h1>But be honest: how much do you really know about it? </h1> 
             
             <h1>Dive into it with us!</h1> 
          <img src="https://lh3.googleusercontent.com/jeH-6NdvDu5jX6bSGmxY_mbSG4jgGUhhJQ9WSZVaduk13qf2pWqh3jmQvOfdM8WX34IlvipW6cYdPd-VUQMzqF00G4NbukjzTrWO_tcUzyJu5O9Bp3eGoRh3U0KcBI05qLaabKvSaZLy1_ZTQNoxg6DR9iZXegWS2WZdPoE4ff0XTbfPTK8MUqQhgCYj4aafBzFjkuF8V8OyKwkd2mI2gdeLYQmfes_q8C2QjxIrwksYxTpr_OTlklj-nLTHxmyJ7sFlnsFXrCHvIZ1Z9BOwGPVW7g8xdbVF0jrD8f7detJwe5O2RR97tkq3jznVGjgX0WCaVuGauZRsSb_ac-705nN0BDutxLmveZGJ3PSkycA7MgKLJdtrP2MRpH-5N99sFvFuNVMqpJVSGpIyYbxrAaohG5-MEMmmTCgUpWCbVIsqsDdCWNqcla4jiD6mfA36ftuZpXdcIDqxVCQKeRTMt-gX7d9DVl6lRvqEAT8dFTywj5LeRBpQphhv6lQGgngsfkVRGxCHWf3RgCdS6r0-uI7zpDiVlgfrd653F6V54tYZS8Zw-cgsNOOnJ-tfEcYJuwD9Fay2sTIk5YiC51SsZxhzdQH3fa-zsvqamLhg7BeqLv1M7OIoA8zHv6Br6rhzFzK_h4zm_w1fmc9PVvZ0-rsYy0utviN8l0wIORWwuA9NoZDIfmxlhC5YVhXjU4XmOfbF6rdRcvirZhUhRUNDP3BR8Wncqc8c1Qex795H3WMXky5b=s512-no" className="ui tiny centered image" style={{marginTop: "50px"}}/>
           </div>

           <div class="ui centered equal width two column grid" style={{marginLeft:"150px", textAlign:"center"}} >
           <div class="middle aligned row" style={{marginTop:"200px"}} > 
              <div className="column" id="leftTopLinkColomn">
              <h3 class="ui header">
                <Link to="/celeb"> <img src="https://lh3.googleusercontent.com/9XB2PRTGMtlb1xcF0u_ujfmSziUczWqZiNKpeqcmNkkNKqj2lj94_1JKIJY3TXex_MRzm7laqgSGUAdvHuRSo-be3iKfVZJ4ooX0LKHF40QQldYLuhRqoKKaZ4GaS8-Pn0aILydOCdDsIX3U2sHdnMDtFtYniEX2119ULb8LpiPuAiF_AJx8JjCf_msOShcpb8-aU7OKbiqMdGWiUoXIoyRuB2ydyPqXig_1ycWi12g_Em4mL0r03kSupghoAUw2K2ACVk3kcgwDl8oyhk25tOklU0p_otOKWfb5zoXM8d2yQSOArspqjDLnWi8CZR-4vbp9Wyb1GZ45Eq5fv9BmdUZT1Jrp8zmcvLxY2S9Z3i9YTFpteDN9mQ6mbPY6CEkd6wITTAaMoCt2gQznK0wBwGU7J350l9aS0iN04UtN46AvSYpcygJegyzQKdGZEG7BL0OvJJVL2xF-TzB_91CBM87gj4khyw0OFhVLXgK4pGhNHI0O5e5LTkUnkL4ACM-BMIqJdVCRYPetiVQOZKu5I5SvPixZni8SQdl1hXgxBUTYaJkReRk6tXOnWKfMjvCkhO_CUM0KyERLMOzuGp51I9omUwuUBxGoyv_NHcP-jX3Ww_szKTIHBmo-gi4J244o_Bl6w0zfWJYZumNInuhnU1V2oOtm32sR-AqqPu_0k8LhMgKpMslzE9_VSuuicdrDR_2MsHkrAGz8sPAqjToGqxMEtxsoLy-PPEU2AiFd1IY7CUi0=w892-h903-no" class="ui medium circular image" /></Link>
               
                </h3>
                </div>
             <div className="column"id="rightTopLinkColomn">
             <h3 class="ui header">
               <Link to="/nature"> <img src="https://lh3.googleusercontent.com/QurdVrVBZ0_gF1gj3QisuXPrlZzNWnRUl2mCxTvYCCF-dzhgtUsBd7eEhEIGCYrEzGQuNK8SYu1CTSeJjDZaCvovNPkJA8vq9bmtOrs1ilr_jhFEDafo5SFTPBhuPcVu-x68Df2hlL2GVn_479KIl7JtbSRsggHK1iRKwF9kbwa5XWhH5QVLrTb2JtkxpW1FprYeorhM4ntrl5V9Ur2nq2g0Zfr9rHx84xlEVDYPczLFbIOSR3msh93deUWMKFnYlKbtgK6osPsZQAB92MTIdqsepzoMLURb2SRipHFPO1t0Ih6-CqS34grWmM78gmiIneY9n5em7Vzkh_M0E0xg9ZS-OHGV3sLLocRk_IwTItufZ4T2GbaMX0kcKShT38GilqGek2ZcITkSPnBxlp-wCLIyeB2D7GrePBKnHnxvO4d5t8Ap1xfweIL2LaLzJG4XqAXO5fDwDUqhHwMAwGp2cchPWHUw1GO2NDNJ1L-NrBM4gjQzFCfyF_xpJVHsf9oRes_mEts52T6yEmgjkKY1ypi1Hb20B0IVXxvwut4J-RIqzkhDXrzYCEXLkBLnancGl27iTqHGvf2Gq_pc-E0Dmzi0-3XfTBHvP4od_v9KPR56lLV9-9Gh39tAKF9NrNkv7QA5kmh3Bwpmkolx9Mumq98n0Le0yinbiE_HQ6hGeH_j_ZdhWrF6PqLE2FD2H08Lc1RaGstK3jUMRVkz2V1OMtnPYB4SsRg6agoB8REKShV9fB0y=w907-h903-no" className="ui medium circular image"/></Link>
              
               </h3>
               </div>
             </div>
             <div class="bottom aligned row"> 
             <div className="column" id="leftBottomLinkColomn">
             <h3 class="ui header">
               <Link to="/beauty"><img src="https://lh3.googleusercontent.com/zyQWojC7NRN_JLn3-k4ieYlonsIjKWkdIXft2U8pMmrT8j_1B73O5HXyioNzcju26JbyLI-FWjCAOH4XeN5PaV5R6XJXx5qTSCXen2MoEu1rrXea-Pak1lfdRMo-8kbHnE9dDahE5sDcBrX9LgzvoN-f2GGeL3Y3tdGK8Ry6L7FMp4G-dF9XOl2b7sO63GwHccgdB4hvGHj46VwgeYva1wm_saRwA8Xrn20ucPEl19FGzLZnMxTMJLM-v9duLE2iz5ybaX81J8WSXDF_X8AbRopu6g75g_jDXGM05W41k1wDeI1uZoL9Bwbu_GtfnZ5NPuL9BqWiCf1g_JVkyMwWUDLJywXXaWauW_2E37S3_CNwkcAyoNSI17H1db-8GaDLaTH77AHWc_HXGKNYYZoT6wrBCKK06Rb-gaGrshWmuCwLihUJKEP-gLfjer0ypyVUB6-VhEwDC3amQTKelSVJHcemfLZJZ_y6khzPJuv4cj7xBWStPLQ8z0AmfoKOBRfI91YxXbWLK6AwY38ycMTBRQfeSLr8Y7ky9RYw0aGtsZ9fGNdOusvrilXj19wfC-M-_MB7L1Ehx8hW3BtmsmcyTpZzejj3SdOa2HhzoveAvld1VD00ES-3MijjS-tZxFLQ1DSi_0mjCqQxh4LDeeB6B0WIUl4UPZdgiAl6kJrJARH5o0D3X-nlsh4qYobhixzorkjN8Die9G_IR2SJcNCMdQ0vFuNh6lYR6cyGnG9PJv1s7I6L=s903-no" class="ui medium circular image" /></Link>
              
               </h3>
               </div>
            
             <div className="column" id="rightBottomLinkColomn" style={{textAlign: "center"}}>
             <h3 class="ui header" >
               <Link to="/style"><img src="https://lh3.googleusercontent.com/GVpkMRdNY0UMPGNt_8fzqdK9ctt9H6cvU37X3shK4f4dRFAXpB-cAdLIFucDz9sxL52dgloxK3QU4MWauhEQ-GgHTCVD_XCj-wVxJMLONVMfgLPGcHW-BIm6w9Kuu4B-TWzk3acT-rUjv8ce_0XvTefdzGc8N3SAiF9307WmNiPGj1vgEWPnD7CL-1C3MQiacEV4PvPLRiig_bXKY2uofz3EgMTmKrAsl7SdXw_BWzPiDNV_t9fJSFfjPhsSXF9nnL-K23T8F1DPhlhjPzQErUJBQUV5BfGRA1oD-3oi2_jPBD7VfQdFVRY-WWx9suwdUO_EQsIUNpNjDgYTx4tHWiYoggoO7bCFLFw81rvDOdnkNjW3ZWUgxeBMnvBrLMXghxppPltnYuF9xfP8_u9GzBNE69EMO-efgobnEnKXMQAirjEEPsBpgtyn95aDfSjb2DOz29spOM4nuSTbe7ArhQK20KjRUpUJZBSqHDuyGg_-zOOEwyB9sy3TI7CZZ4Xcm3IUZw4QzP7tjYdJEP3bTrSu9auvSOvqrS6FxySQTwZBL9hkcm5I2B1XEXJM2SM4R98P44cJ4LWj6DOuObdXalVi2UXyc-QKU6MLFPh-mLcMLjPJfbkqQCkcz4BfEpDmWzHR8BKPugxL1m-wDooysGH1e78TT2AmBERiXPY8wnE-4EgdGUmtdDFyRFaShb4dNmpuoflYwImvx_PsMcqfoBA81mZy-NU_fJIe23TVv8eXKIWG=w937-h903-no" className="ui medium circular image"/></Link>
              
               </h3>
               </div>
             </div>
           </div>
           <div class="ui pink inverted segment">
           © Elisabeth Bach, Lowe Kroon Ericson, Kristina Wagner
             </div>
      </div>
      );
    }
}

export default Articles;