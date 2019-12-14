import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Articles.css'
class Articles extends Component {
    state = {  }
    render() { 
        return (   
        <div className="container" id="homepage">
           <div class="ui centered equal width four column grid" >
           <div class="top aligned row"> 
          {/* put something in here that pushes the rest of the content down */}
           </div>
           <div class="middle aligned row"> 
              <div className="column"><Link to="/celeb"> <img src="https://lh3.googleusercontent.com/JLoWcqyk9foVuKeQj9cR-Yun_jvOlg93wDqk8jDuymqK83O4S0zNRjGyn09HjGxDxATRAbTrsnoKf2eqi7y-9hNba40FQ76kHcV5ldizXFEtCCajxFOphvIJXuS1VIMe0iQAJmmRjE62D72ruUha1RmM7ZG-9o0t5MYdI7ACbyM_dUmf53iQzvYYUMxcmatpNiBixSRodpFzTEsy13RxlOOHhRu4aa_Dw979oog3H1RSIJyONLsnxnuhzY-qz0myMR-aeqnuiL4oqlaFNgd1kEHe-mvqai7vGXFpWd2auX8YWeh_MnfvaqVVbBbZBiOAf-pZhU8czv_iYfpObBXSpPdzq4TytcF2DcMELhM5KWueWDiE0CaXvlYNb1qbNxNa-YSOU4sGTqHrSJRPpfrqfVj0ylVCgD7asTFDKPTeTA0KRXD7pvbWrnLzoMMo5hOTgGkqAo2YK8XD50ENivDlfPxVUU363GeJPHuuzgKnhqlYsF8S5buze2e45GJsPcYqV9lzq6oJZvcfOsyXjhYSiTsHF9z1h1eOCaQDXRCYq1PCkjQQknQ7YXe4jgxMtNnl3I9fg5nlDZXNg1IydmigDMW5l5Jmfayb7mU9bLlYswxdLw9Hcxn3-szI9EwvlSTYaH2H3fdf08Bj7WkXtoSHd0_61Ce-VijxTguli7WgpqGNu7wf-0QNAwSJabYO8t5KsQTcm5pq6-6L-3lw35O0rXGJFImiZDcaycQYXXCcV4oOHDC4=w892-h903-no" class="ui medium circular image" /></Link></div>
             <div className="column"></div>
             <div className="column" ><Link to="/nature"> <img src="https://lh3.googleusercontent.com/QurdVrVBZ0_gF1gj3QisuXPrlZzNWnRUl2mCxTvYCCF-dzhgtUsBd7eEhEIGCYrEzGQuNK8SYu1CTSeJjDZaCvovNPkJA8vq9bmtOrs1ilr_jhFEDafo5SFTPBhuPcVu-x68Df2hlL2GVn_479KIl7JtbSRsggHK1iRKwF9kbwa5XWhH5QVLrTb2JtkxpW1FprYeorhM4ntrl5V9Ur2nq2g0Zfr9rHx84xlEVDYPczLFbIOSR3msh93deUWMKFnYlKbtgK6osPsZQAB92MTIdqsepzoMLURb2SRipHFPO1t0Ih6-CqS34grWmM78gmiIneY9n5em7Vzkh_M0E0xg9ZS-OHGV3sLLocRk_IwTItufZ4T2GbaMX0kcKShT38GilqGek2ZcITkSPnBxlp-wCLIyeB2D7GrePBKnHnxvO4d5t8Ap1xfweIL2LaLzJG4XqAXO5fDwDUqhHwMAwGp2cchPWHUw1GO2NDNJ1L-NrBM4gjQzFCfyF_xpJVHsf9oRes_mEts52T6yEmgjkKY1ypi1Hb20B0IVXxvwut4J-RIqzkhDXrzYCEXLkBLnancGl27iTqHGvf2Gq_pc-E0Dmzi0-3XfTBHvP4od_v9KPR56lLV9-9Gh39tAKF9NrNkv7QA5kmh3Bwpmkolx9Mumq98n0Le0yinbiE_HQ6hGeH_j_ZdhWrF6PqLE2FD2H08Lc1RaGstK3jUMRVkz2V1OMtnPYB4SsRg6agoB8REKShV9fB0y=w907-h903-no" className="ui medium circular image"/></Link></div>
             </div>

         

             <div class="middle aligned row"> 
              <div className="column"></div>
             <div className="column"><img src="https://lh3.googleusercontent.com/SloLPSa2_kho0nZR9HRVZfU4ShcUIauaAyKxeOeQS6jWMnbJAbonuoQcYZAbh1v8ZcUs69JwiTTF9ekr_JSyHI4qCgcpp-6aWquszHdPEmDiORgqnL_lk3kXR0ZFgAtbEoYGT4i2ZDZ8VTZXe_TaTegZD2icDgqnGpsXMd1RuG_OBetPFt_20wTgrXyjRhRVF05E3V7ZjF3pQEBtnrKcmdHJVEnFnHtXF7yqe9yafX9RUdWRBMVYtTXTNGAHykMceL-4u9p8G5oPlr_zIzmpmlhVQKtkxdMKzPdODMrJBbx9YjyS-TMnMDEC5RwYQGhH3NpS7IiUpI5GLVpqbHS6Z20InyykPuhBE47swcKNiYutSKFULj06FEUUX7KoWFRv3l-SCB-gu4ZvsHO9OZOeY33QNQakATwwKDE15g5NOYK4tcOKaMChOtMXs3qv5wvoqfa-q_GbJ1XEt94LyLVh-m1FnQ3rJoMBlH-pINkgOftRsX7u6ut-vxn4tw_rCwd7IMMXFqsUhP-xVG8wqwFQvRMJW0ZhehUa0QzQ3CqCgRLaZZvg53V3eHIYOgzbFt8vGpoQavv8vI7MmFfyHRr-PcG32BXGJWEJGTA2ikNDxi4ev3yauQLxoTHG-txmtzt_nbCvKjHFQZe2sNfDMX-7fNba32cy3gT6kmDPYNhJy__MW8GxIAKh3AF_pY8KoHsXXD3uGS-uPYC-PcbU4doetncEdjOPd3EBFFeBCpghiKWIZ2It=s903-no" className="ui large circular image"/></div>
             <div className="column"></div>
             </div>

          
             <div class="bottom aligned row"> 
             <div className="column"><Link to="/beauty"><img src="https://lh3.googleusercontent.com/zyQWojC7NRN_JLn3-k4ieYlonsIjKWkdIXft2U8pMmrT8j_1B73O5HXyioNzcju26JbyLI-FWjCAOH4XeN5PaV5R6XJXx5qTSCXen2MoEu1rrXea-Pak1lfdRMo-8kbHnE9dDahE5sDcBrX9LgzvoN-f2GGeL3Y3tdGK8Ry6L7FMp4G-dF9XOl2b7sO63GwHccgdB4hvGHj46VwgeYva1wm_saRwA8Xrn20ucPEl19FGzLZnMxTMJLM-v9duLE2iz5ybaX81J8WSXDF_X8AbRopu6g75g_jDXGM05W41k1wDeI1uZoL9Bwbu_GtfnZ5NPuL9BqWiCf1g_JVkyMwWUDLJywXXaWauW_2E37S3_CNwkcAyoNSI17H1db-8GaDLaTH77AHWc_HXGKNYYZoT6wrBCKK06Rb-gaGrshWmuCwLihUJKEP-gLfjer0ypyVUB6-VhEwDC3amQTKelSVJHcemfLZJZ_y6khzPJuv4cj7xBWStPLQ8z0AmfoKOBRfI91YxXbWLK6AwY38ycMTBRQfeSLr8Y7ky9RYw0aGtsZ9fGNdOusvrilXj19wfC-M-_MB7L1Ehx8hW3BtmsmcyTpZzejj3SdOa2HhzoveAvld1VD00ES-3MijjS-tZxFLQ1DSi_0mjCqQxh4LDeeB6B0WIUl4UPZdgiAl6kJrJARH5o0D3X-nlsh4qYobhixzorkjN8Die9G_IR2SJcNCMdQ0vFuNh6lYR6cyGnG9PJv1s7I6L=s903-no" class="ui medium circular image" /></Link></div>
             <div className="column"></div>
             <div className="column" ><Link to="/style"><img src="https://lh3.googleusercontent.com/_CMAGLf6lk7ZxRWcGrQ_o0tJDd4mFIG3xua6lA_-3eJDR9IlW-eMuD4mJlfSD-GDa9B9gXriWbvk7_UtQx9fpEf52rTsSIUDMkzoBtyIKzsqqwbiSdKpTW7nJZQir12ZFogBEPJJmd5mVQTrC9I578Kc9jI4ZIi2fc9dLAGCNV1ujCFPoA-mqpcIjHX0pXWWTCHFfcv73YywGKAajykWbXyZPcihsdQczY8wxL3lCDWQ_oZvYWZ-D8JsSoP5eIlFHkOKhbD-yvza08hljhpHaJp_3iBeBOhjYQE8-_tTusr9htCxAKtU5S1tcyJdDtwUbJUyZSSkPJ_jAXsPM7mwMPDXXNG5-Ooe95sbZyrRqaeTKDp5xnWWb7Efd6bVZ0bw3XAk2lfnUM7Zek4Pd2t8aRnXUztmQHoJDOh3RXp-Ydjvx5ZI203ucUHT5vxeGFRpq-L7SUqHGztAN433ls7bdKRyG4EVOd6yP-RvUTCPUd959nJuGFm0NPdERn3BdnN4QZdFPhl3xfchQpPPrKu00bNSzfLNfNQPzsZKj7kngvA5O_dnvovI3zwulJAJowEcVuyQ15uPu0i3EZ8J4um_RWlbcq1kQm5vzjAkd-xlK2R7Ci94nXZofABJh7x1cJQnPj1dVxnJMn0aYhybtQ22T5PrlQHQvSJSOGemCQ2UjyPaQL8bRvYCnuavlkHIcUqCtSaNvMkA5qGnmQD8PHdVQZmuAKeBm3Jkp0u7NdJkUAJitWqw=w937-h903-no" className="ui medium circular image"/></Link></div>
             </div>
           </div>
      </div>
      );
    }
}

export default Articles;