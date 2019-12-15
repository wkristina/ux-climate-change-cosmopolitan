import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Articles.css'
class Articles extends Component {
    state = {  }
    render() { 
        return (   
        <div className="container" style={{backgroundColor: "#FEDDD6"}}>
           <div class="ui pink inverted segment" id="question">
             It's everywhere...of course you've heard of that big thing: CLIMATE CHANGE. <br/>
             But be honest: how much do you really know about it? <br/>
             Dive into it with us!
          <img src="https://lh3.googleusercontent.com/d4whRPGirm-_7Ud3q0k20qRqk4m6gxyhCZkcciqL_z1ZzenPV0lQ_aSPeDKe-OdRr0neDcXcYaiHrOm42UOAAYhwkWgYY2Y2COZ9F3bHhGN6JnVyTQinfwyRikNCQNCMN9R9pAnnr6NvNz0kedhiDqT-oKIp9x5Jfv-Xja71350bPNWrGw1sfyjJGexw9_rkx96LtEmgVLkbO6RVTL7vtvyzGVb88QgaLgHxKpPnI4ShBGoQkO8F6ZfsfkmBtj8DC8LO82tsnObv8To8gQJMvg8CM8M48YgbizNe73sra_1ej5boudkjXHmdEtR43YPrzzutbVtB7tZTCDFwWaDdSq9sUdZMA9gZ80BNn2n-RdZ65XrjNGOIl6f8mtpeFtWys5-hF6tkhmepxVjk_eNxGqG1ggsadaFVVvTXOJScf0_UDXIFC0V5-BVk6WNEljpw0GcSn5cbrA_aFYt0Ar5eJXZJewjeFnoJ4C9lp1m8UBb671yhhMmLnN8uiUhqVU3ba-HhJ99KG8JZm4iBK3SmSsHgr5Flh1pU2TazDft7mGRRouZYUM3On0t7sPUQ3Lb8MMPh-irJTZ8J1qMMafa44gbMJlFxzmyjcRdczOqSR1ry4Zhtj4WLKqSy8xvygJEmod5A8JYK2OPzqQ2fryHFctUAGom7ERUAV19Y_UaBsRJB9vTRhS_q7FI3s6XrVpRyFbKpr_Od-Q5jqupQe1cZbywyyiXrmEmu82sSM4Js_DH2AGgl=s512-no" className="ui tiny image"/>
           </div>
           <div class="ui centered equal width four column grid" >
           <div class="top aligned row"> 
          {/* put something in here that pushes the rest of the content down */}
           </div>
           <div class="middle aligned row"> 
              <div className="column" id="leftTopLinkColomn"><Link to="/celeb"> <img src="https://lh3.googleusercontent.com/JLoWcqyk9foVuKeQj9cR-Yun_jvOlg93wDqk8jDuymqK83O4S0zNRjGyn09HjGxDxATRAbTrsnoKf2eqi7y-9hNba40FQ76kHcV5ldizXFEtCCajxFOphvIJXuS1VIMe0iQAJmmRjE62D72ruUha1RmM7ZG-9o0t5MYdI7ACbyM_dUmf53iQzvYYUMxcmatpNiBixSRodpFzTEsy13RxlOOHhRu4aa_Dw979oog3H1RSIJyONLsnxnuhzY-qz0myMR-aeqnuiL4oqlaFNgd1kEHe-mvqai7vGXFpWd2auX8YWeh_MnfvaqVVbBbZBiOAf-pZhU8czv_iYfpObBXSpPdzq4TytcF2DcMELhM5KWueWDiE0CaXvlYNb1qbNxNa-YSOU4sGTqHrSJRPpfrqfVj0ylVCgD7asTFDKPTeTA0KRXD7pvbWrnLzoMMo5hOTgGkqAo2YK8XD50ENivDlfPxVUU363GeJPHuuzgKnhqlYsF8S5buze2e45GJsPcYqV9lzq6oJZvcfOsyXjhYSiTsHF9z1h1eOCaQDXRCYq1PCkjQQknQ7YXe4jgxMtNnl3I9fg5nlDZXNg1IydmigDMW5l5Jmfayb7mU9bLlYswxdLw9Hcxn3-szI9EwvlSTYaH2H3fdf08Bj7WkXtoSHd0_61Ce-VijxTguli7WgpqGNu7wf-0QNAwSJabYO8t5KsQTcm5pq6-6L-3lw35O0rXGJFImiZDcaycQYXXCcV4oOHDC4=w892-h903-no" class="ui medium circular image" /></Link></div>
             <div className="column"></div>
             <div className="column"id="rightTopLinkColomn" ><Link to="/nature"> <img src="https://lh3.googleusercontent.com/QurdVrVBZ0_gF1gj3QisuXPrlZzNWnRUl2mCxTvYCCF-dzhgtUsBd7eEhEIGCYrEzGQuNK8SYu1CTSeJjDZaCvovNPkJA8vq9bmtOrs1ilr_jhFEDafo5SFTPBhuPcVu-x68Df2hlL2GVn_479KIl7JtbSRsggHK1iRKwF9kbwa5XWhH5QVLrTb2JtkxpW1FprYeorhM4ntrl5V9Ur2nq2g0Zfr9rHx84xlEVDYPczLFbIOSR3msh93deUWMKFnYlKbtgK6osPsZQAB92MTIdqsepzoMLURb2SRipHFPO1t0Ih6-CqS34grWmM78gmiIneY9n5em7Vzkh_M0E0xg9ZS-OHGV3sLLocRk_IwTItufZ4T2GbaMX0kcKShT38GilqGek2ZcITkSPnBxlp-wCLIyeB2D7GrePBKnHnxvO4d5t8Ap1xfweIL2LaLzJG4XqAXO5fDwDUqhHwMAwGp2cchPWHUw1GO2NDNJ1L-NrBM4gjQzFCfyF_xpJVHsf9oRes_mEts52T6yEmgjkKY1ypi1Hb20B0IVXxvwut4J-RIqzkhDXrzYCEXLkBLnancGl27iTqHGvf2Gq_pc-E0Dmzi0-3XfTBHvP4od_v9KPR56lLV9-9Gh39tAKF9NrNkv7QA5kmh3Bwpmkolx9Mumq98n0Le0yinbiE_HQ6hGeH_j_ZdhWrF6PqLE2FD2H08Lc1RaGstK3jUMRVkz2V1OMtnPYB4SsRg6agoB8REKShV9fB0y=w907-h903-no" className="ui medium circular image"/></Link></div>
             </div>

         

             <div class="middle aligned row"> 
              <div className="column"></div>
             <div className="column"><img src="https://lh3.googleusercontent.com/Q-tMlnVwRmSKQjwbFQdFUuITRiiMLsL8x_J-AVFV-6B6SqF_I8vTjzCij6KNoHPTA8lL-o0T4iaPFo_zvaCOZlMByl6lk4k-30EqUXsfsafEIdXWpsLbf2zwM_J53WNZw2kJegkFlR-EnBOMSAkhd1fkOg_9fOjSK9rfSK9a8ijVRJSg2DRkzXs29bDE4jjJYVTAB3bqtg60S0CGFlJ9SSS9hmXaIK4SLhMnSiPkY6GxvR8aNiMCUh__U5G5Y5NLbs4JQ3yeWEwihZbu9yNipLIgW84sJzz4xqQTl8_cY2YPqKsl9leYS9nv2XrFb73T9AAr6dgZb7JbLqA7XR1Ta5uGmYRP2r8R_K8N07iSp03EEF7vgF0ZuTitXa5DBxaS9cez5EUyhpRrEu0fS1lIAmgXM8hh61QYnS_PEO26sLF5RQFGgO8r59Icr2sZrhRneW7n6LUKA9DqGo507E_LiQN8OjVhJCMgglg-UxGY4K9ZZnOi6pCi0QtTGKcOVKOmMvo0ptOkWGKlpV732D5aKIrd8F_HIpmAFoHAozh41BNeGOCK04yN9EMS0r07o77fcdKX7RXSC1ENKQ2Ntd3IOdu5D92x1bo2bi9pcNg-zfriYAlZSixdtdltnNphaCLRbOqylhc--1aDX6xv-_bo3_xxyfLuCEZBtOoyXWeDqJA9IJVH7J-bgDtjJ-8U6D1X4wh-LMmmaz47LtQb3fzuWOCSN3kVvD29eG2sWRV8crc7IH7i=s903-no" className="ui massive image"/></div>
             <div className="column"></div>
             </div>

          
             <div class="bottom aligned row"> 
             <div className="column" id="leftBottomLinkColomn"><Link to="/beauty"><img src="https://lh3.googleusercontent.com/zyQWojC7NRN_JLn3-k4ieYlonsIjKWkdIXft2U8pMmrT8j_1B73O5HXyioNzcju26JbyLI-FWjCAOH4XeN5PaV5R6XJXx5qTSCXen2MoEu1rrXea-Pak1lfdRMo-8kbHnE9dDahE5sDcBrX9LgzvoN-f2GGeL3Y3tdGK8Ry6L7FMp4G-dF9XOl2b7sO63GwHccgdB4hvGHj46VwgeYva1wm_saRwA8Xrn20ucPEl19FGzLZnMxTMJLM-v9duLE2iz5ybaX81J8WSXDF_X8AbRopu6g75g_jDXGM05W41k1wDeI1uZoL9Bwbu_GtfnZ5NPuL9BqWiCf1g_JVkyMwWUDLJywXXaWauW_2E37S3_CNwkcAyoNSI17H1db-8GaDLaTH77AHWc_HXGKNYYZoT6wrBCKK06Rb-gaGrshWmuCwLihUJKEP-gLfjer0ypyVUB6-VhEwDC3amQTKelSVJHcemfLZJZ_y6khzPJuv4cj7xBWStPLQ8z0AmfoKOBRfI91YxXbWLK6AwY38ycMTBRQfeSLr8Y7ky9RYw0aGtsZ9fGNdOusvrilXj19wfC-M-_MB7L1Ehx8hW3BtmsmcyTpZzejj3SdOa2HhzoveAvld1VD00ES-3MijjS-tZxFLQ1DSi_0mjCqQxh4LDeeB6B0WIUl4UPZdgiAl6kJrJARH5o0D3X-nlsh4qYobhixzorkjN8Die9G_IR2SJcNCMdQ0vFuNh6lYR6cyGnG9PJv1s7I6L=s903-no" class="ui medium circular image" /></Link></div>
             <div className="column"></div>
             <div className="column" id="rightBottomLinkColomn"><Link to="/style"><img src="https://lh3.googleusercontent.com/_CMAGLf6lk7ZxRWcGrQ_o0tJDd4mFIG3xua6lA_-3eJDR9IlW-eMuD4mJlfSD-GDa9B9gXriWbvk7_UtQx9fpEf52rTsSIUDMkzoBtyIKzsqqwbiSdKpTW7nJZQir12ZFogBEPJJmd5mVQTrC9I578Kc9jI4ZIi2fc9dLAGCNV1ujCFPoA-mqpcIjHX0pXWWTCHFfcv73YywGKAajykWbXyZPcihsdQczY8wxL3lCDWQ_oZvYWZ-D8JsSoP5eIlFHkOKhbD-yvza08hljhpHaJp_3iBeBOhjYQE8-_tTusr9htCxAKtU5S1tcyJdDtwUbJUyZSSkPJ_jAXsPM7mwMPDXXNG5-Ooe95sbZyrRqaeTKDp5xnWWb7Efd6bVZ0bw3XAk2lfnUM7Zek4Pd2t8aRnXUztmQHoJDOh3RXp-Ydjvx5ZI203ucUHT5vxeGFRpq-L7SUqHGztAN433ls7bdKRyG4EVOd6yP-RvUTCPUd959nJuGFm0NPdERn3BdnN4QZdFPhl3xfchQpPPrKu00bNSzfLNfNQPzsZKj7kngvA5O_dnvovI3zwulJAJowEcVuyQ15uPu0i3EZ8J4um_RWlbcq1kQm5vzjAkd-xlK2R7Ci94nXZofABJh7x1cJQnPj1dVxnJMn0aYhybtQ22T5PrlQHQvSJSOGemCQ2UjyPaQL8bRvYCnuavlkHIcUqCtSaNvMkA5qGnmQD8PHdVQZmuAKeBm3Jkp0u7NdJkUAJitWqw=w937-h903-no" className="ui medium circular image"/></Link></div>
             </div>
           </div>
      </div>
      );
    }
}

export default Articles;