import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Articles.css'
class Articles extends Component {
    state = {  }
    render() { 
        return (   
        <div className="container" id="homepage">
           <div class="ui centered equal width three column grid" >
           <div class="top aligned row"> 
          {/* put something in here that pushes the rest of the content down */}
           </div>
           <div class="middle aligned row"> 
              <div className="column"><Link to="/celeb"> <img src="https://lh3.googleusercontent.com/JLoWcqyk9foVuKeQj9cR-Yun_jvOlg93wDqk8jDuymqK83O4S0zNRjGyn09HjGxDxATRAbTrsnoKf2eqi7y-9hNba40FQ76kHcV5ldizXFEtCCajxFOphvIJXuS1VIMe0iQAJmmRjE62D72ruUha1RmM7ZG-9o0t5MYdI7ACbyM_dUmf53iQzvYYUMxcmatpNiBixSRodpFzTEsy13RxlOOHhRu4aa_Dw979oog3H1RSIJyONLsnxnuhzY-qz0myMR-aeqnuiL4oqlaFNgd1kEHe-mvqai7vGXFpWd2auX8YWeh_MnfvaqVVbBbZBiOAf-pZhU8czv_iYfpObBXSpPdzq4TytcF2DcMELhM5KWueWDiE0CaXvlYNb1qbNxNa-YSOU4sGTqHrSJRPpfrqfVj0ylVCgD7asTFDKPTeTA0KRXD7pvbWrnLzoMMo5hOTgGkqAo2YK8XD50ENivDlfPxVUU363GeJPHuuzgKnhqlYsF8S5buze2e45GJsPcYqV9lzq6oJZvcfOsyXjhYSiTsHF9z1h1eOCaQDXRCYq1PCkjQQknQ7YXe4jgxMtNnl3I9fg5nlDZXNg1IydmigDMW5l5Jmfayb7mU9bLlYswxdLw9Hcxn3-szI9EwvlSTYaH2H3fdf08Bj7WkXtoSHd0_61Ce-VijxTguli7WgpqGNu7wf-0QNAwSJabYO8t5KsQTcm5pq6-6L-3lw35O0rXGJFImiZDcaycQYXXCcV4oOHDC4=w892-h903-no" class="ui medium circular image" /></Link></div>
             <div className="column"></div>
             <div className="column" ><Link to="/beauty"> <img src="https://lh3.googleusercontent.com/zyQWojC7NRN_JLn3-k4ieYlonsIjKWkdIXft2U8pMmrT8j_1B73O5HXyioNzcju26JbyLI-FWjCAOH4XeN5PaV5R6XJXx5qTSCXen2MoEu1rrXea-Pak1lfdRMo-8kbHnE9dDahE5sDcBrX9LgzvoN-f2GGeL3Y3tdGK8Ry6L7FMp4G-dF9XOl2b7sO63GwHccgdB4hvGHj46VwgeYva1wm_saRwA8Xrn20ucPEl19FGzLZnMxTMJLM-v9duLE2iz5ybaX81J8WSXDF_X8AbRopu6g75g_jDXGM05W41k1wDeI1uZoL9Bwbu_GtfnZ5NPuL9BqWiCf1g_JVkyMwWUDLJywXXaWauW_2E37S3_CNwkcAyoNSI17H1db-8GaDLaTH77AHWc_HXGKNYYZoT6wrBCKK06Rb-gaGrshWmuCwLihUJKEP-gLfjer0ypyVUB6-VhEwDC3amQTKelSVJHcemfLZJZ_y6khzPJuv4cj7xBWStPLQ8z0AmfoKOBRfI91YxXbWLK6AwY38ycMTBRQfeSLr8Y7ky9RYw0aGtsZ9fGNdOusvrilXj19wfC-M-_MB7L1Ehx8hW3BtmsmcyTpZzejj3SdOa2HhzoveAvld1VD00ES-3MijjS-tZxFLQ1DSi_0mjCqQxh4LDeeB6B0WIUl4UPZdgiAl6kJrJARH5o0D3X-nlsh4qYobhixzorkjN8Die9G_IR2SJcNCMdQ0vFuNh6lYR6cyGnG9PJv1s7I6L=s903-no" class="ui medium circular image" /></Link></div>
             </div>
             <div class="middle aligned row"> 
              <div className="column"></div>
             <div className="column"><img src="https://lh3.googleusercontent.com/oD4mufEz3XutIE0j9X4XJkwHEcPeENFJ2UCt5nfxabTojav8LT5Th_oes7zd8Mskj51lLP93AtcWeiHIectpWlJNBRLoDszyqr-R0un6H1nLPi-H2er0TPraY1MROgAjAJHMtkWZ_dM44PUy91ujAxmoC1K4pgB6Rwd1hRvhU7F9-5eLAReSd8cd_DlzqqwSh-MrTOkPJEUO9hmfPLZSR_lPf_HgAG6VA7R1-MLgB4D6voyZvpDbaYBzcCCK9HbtN9bzbVNJua9pHgqdHBhIENnWy1x05lqvPD-BVV0OgNrTgeq244DC9CKrfN7jG6C5t08A-7me8zhagxZ_pFolGvw0CICk4s2aIk_R15po18XkzA6IWipx9CB9oMiwQXypXtXVNYDZjB3v9cl9MZ_EsDQkAj7g2wMLDO0MICIKpc1-tjwvHYp4K6FTDKL_WsaBjfFef4LKjbxEc16W7whgRvugZmPqs2QuOTm7pSJCrqlqdVp1I8nsLhBax4AGZTMSl6hPTQsXg09wdXrBkBSjId8S2S7OwH18-_9c9oDgtHUibmy7qBsnBz7O6ZWPdt2sKaKpvEuz5B1cxlci06725NPmZdq_M37YQOBw2Yfo4N31Vj91c3DZZOcm4aHDA3n5_bkVyzA7tl-uOkteXtZXHehIncs7nKNArQPH_Rzj3kbSaa4jcd1zp9svyc48Npfcqm-pMxYrmwAMr0BWE_-bNo0bfg-aguJsPfyWs3SIUkPSIZrq=w487-h323-no" className="ui image"/></div>
             <div className="column"></div>
             </div>
             <div class="bottom aligned row"> 
             <div className="column"><Link to="/style"><img src="https://lh3.googleusercontent.com/Jxtwzfet3UPnuK0OiewRaGuZrMJZXVyZa4qRZ4NYA8sMKcFZsufqyLhUe-_CFSrDk4U7PHBA2cDEEtm8_zVRULjqu9E7yVPFPy48BcOpDHRvmp7H94t4ZOeTpJbb3Xknd5onk_zv_pDHMiEvsVJ-fbgBh4CbUpJdRL02L_d7q38XwrE2Zlvpe6DgRgYCBrXWCZogW-L-uq81Sf0UiPhf237Az6SVdZ_GAyvrGFY6CVk0cxU3libvpDUZ--Kl3SlGJDKDk-tEgnG1QCo7v7MmqW5qSLs7V1sEf7ukabyAPDI6vOKDeurSgpK2JcMvToz6FAWg-PMODb7lNTYuUhmJBQ9xN5ruwa5ZGSwWH3VKry_u0UAAvzJrL3zGJljUGNBfAinUUMjeKyXFloEtUao2iUUvwU-LGYUcjFtj-LPhjHtFXBk3Ra82MneEFztKwMo1W33vRPRB_RxzrlCY_JeglL14PJz0Ed_D0qpCruN2TzNAZSq3_W9Mj4XPIJWKE_j86se5KYinGTojjVOLsEcSspxJe_ccLmkSYjLu7YD0rfGrmfwULFScCR54lAAr_8qrrTE1NLnW2AR83nV77XTvr-7tu9MhPusoPG52GsJJ_32dhmgN_5r202OOW70yo5VfuvBoR05biNC78fi_S1ucfjlXcoMjXKxC90BiFwSJ0QqLH08rt-B1AKE84E-d_Y2St1hYL1iHLz957ZBrN8ZEZ2yABnzbjUApzH0LL-vMGwtxmdQ=s720-no" className="ui medium circular image"/></Link></div>
             <div className="column"></div>
             <div className="column" ><Link to="/nature"><img src="https://lh3.googleusercontent.com/QurdVrVBZ0_gF1gj3QisuXPrlZzNWnRUl2mCxTvYCCF-dzhgtUsBd7eEhEIGCYrEzGQuNK8SYu1CTSeJjDZaCvovNPkJA8vq9bmtOrs1ilr_jhFEDafo5SFTPBhuPcVu-x68Df2hlL2GVn_479KIl7JtbSRsggHK1iRKwF9kbwa5XWhH5QVLrTb2JtkxpW1FprYeorhM4ntrl5V9Ur2nq2g0Zfr9rHx84xlEVDYPczLFbIOSR3msh93deUWMKFnYlKbtgK6osPsZQAB92MTIdqsepzoMLURb2SRipHFPO1t0Ih6-CqS34grWmM78gmiIneY9n5em7Vzkh_M0E0xg9ZS-OHGV3sLLocRk_IwTItufZ4T2GbaMX0kcKShT38GilqGek2ZcITkSPnBxlp-wCLIyeB2D7GrePBKnHnxvO4d5t8Ap1xfweIL2LaLzJG4XqAXO5fDwDUqhHwMAwGp2cchPWHUw1GO2NDNJ1L-NrBM4gjQzFCfyF_xpJVHsf9oRes_mEts52T6yEmgjkKY1ypi1Hb20B0IVXxvwut4J-RIqzkhDXrzYCEXLkBLnancGl27iTqHGvf2Gq_pc-E0Dmzi0-3XfTBHvP4od_v9KPR56lLV9-9Gh39tAKF9NrNkv7QA5kmh3Bwpmkolx9Mumq98n0Le0yinbiE_HQ6hGeH_j_ZdhWrF6PqLE2FD2H08Lc1RaGstK3jUMRVkz2V1OMtnPYB4SsRg6agoB8REKShV9fB0y=w907-h903-no" className="ui medium circular image"/></Link></div>
             </div>
           </div>
      </div>
      );
    }
}
 
export default Articles;