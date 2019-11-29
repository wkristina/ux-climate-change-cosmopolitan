import React, { Component } from 'react';
import '../css/Articles.css'
class Articles extends Component {
    state = {  }
    render() { 
        return (   
        <div className="container">
            <h2>Latest Stories</h2>  
          <div id= "articles" class="ui two column grid"> 
            <div className= "row">
              <div className="column">
  {/* always wrap entire card as link, otherwise the semantic ui layout will not work (means that entire article is clickable)*/}
        <a href="/ux-climate-change-cosmopolitan/article">
        <div class="ui card">
        <div class="image">
          <img src="https://lh3.googleusercontent.com/enfwUfgYifN4al_Pec9fTMS9PTxNb9hjX2zof3bKzmQ8v0nMopkxfqrGOwzMbtW6r55NjTg3dujMaDTpUwv90O4Jg1sXoARVjyK-7JONRdrd8qxEvkj52vEJO0sw3r4x-_HX4SIze8mfUXSf4Mm3jq7kFwwBrTPDBrxI3m_EmQdqsfeF2DCB6GGohtVA_cEkb-Ax7xNRR2S3zR4X03IO-iyghAd3_D32vaQHawF-gdp_OnONuCKF2MrYKRgt2V45Q6H2h6KDFYFE0m3TjcPFXZTL_urLt5DkE6dQaC_bkwbyblnrqnEXhwEkg2a5GMUM9hz7prj6Gpds2_91eQWgXptVFi90Z6eNKFXuQYLNuU6OQdrG9dsK27cS2E0YfKLhDJG9WyU053Vr04_8GYkn4b7VjeVGYFvk8Rqut6fe5dOPyqA04HbkkwoLXbvgbdphTVAPBElwGU6kl10I1flW9_J9JYqSDLv4l1sJbxI4XLOtip3Q4WHiwEmSy7P2nzD664yP-ntISIra4cS1Hu1vPHS7esaTSi0_VkDtmnurvs1NskUSRWVGynWBG9iLdAYY7WGr4SnC3iF40NJyf7OTr40A21hpjeUepHm6HIjxMu_-wu51VBcwpo0c5aQAy2HwX23W06FRKOBYTSZA7uqU9yu3By8lAPTZOriEaBflVx-RMsSoajEfMs5GFJtL68SK69Wh_q9lZe4wqCH_SWwdX3CrTcJy7htS8SvmB1WEpTGaG5o=w603-h903-no" alt="Dummy" />
          </div>
        <div class="content">
          <div class="header">Shocking!</div>
          <div class="description">This is how much the fashion industry really affects the climate!</div>
        </div>
      </div> 
      </a>
      </div>
      <div className="column">
      <a href="/ux-climate-change-cosmopolitan/celeb">
      <div class="ui card">
        <div class="image"><img src="https://lh3.googleusercontent.com/Owgt6-Z35E_khZdC2e364IuFJgQE_fuFDkeL9y0V7bD7ksPyS7l5HbmguVeP2zZLuD6hRFvUnDNoGlViTv9kSfTRKt6YNOcXX1h14c9Ln4EG59GGZOUoCuWrx-bhC8MebAfy_tIqpB7_aNvZCvLEDnTMJmI7VUgNWVCgatAcctQJ8SQzs1XFMCBtVVQDDAzHxTlEBlCk5oyfd0-HAPznFtLnkXAfrRCNI951x37TU7X4LBWNw3OOAWq7_oWjP-5r_D0LeyjETrUH8Wmq51y2C9yN3r4R87HAGNw3OgROms6xQXZtsbFpGgR5C5w1stkj0u4hEP7GzHNJJMkP-0dUXcfnGGXU-WqLWVEw-QUjwoiRP1txGpZrtEn8QrAkuvGWytFFb5ZeTwgCAnqTbVuYMWvDY8veudoHOqWg2bxfb0bgFXel-oF-ycAVYZOlI738VTB-tNlEDBYgsoMxFtIceHN6dMIMy8aprf2Bcr_I0zMJlfTknfhL-dodARDJVKi3AAsVreyKtrwkPry2gsGuC7gX88lHf92PxLmOzll2two9LB5fqC9dLtnLAuO9YLOwz9kN2vThMXCnHyxW56lg90z221IYFFTfWX1jfox1W2Vb3EPhCPmAn01PeSr6wICQOUlDPkzRxVWMkU-lTOVDWF6IqXkQeRyvRcmoBa8FnvSx7mExk25xfYsfve6z3pA8K-aCA8cfQto_1CSpncFTdhhaU_CFYubzYA3QR_N2mPa69lA=w604-h903-no" alt="Dummy" /></div>
        <div class="content">
          <div class="header">This just in!</div>
          <div class="description">Read what Emma Watson has said about climate change!</div>
        </div>
        </div>
        </a>
        </div>
      </div> 
      <div className= "row">
      <div className="column">
        <a href="/ux-climate-change-cosmopolitan/article">
        <div class="ui card">
        <div class="image">
          <img src="https://lh3.googleusercontent.com/my6VmZDrnetvmeUjG1zoEwMOnhy3rx-RT0yrw1vhoAXnyvyxjplx48j519FmFHFAlSqjbAQnfxgEYV1oPOyCkvIH__Tyf8YTcbBVHWRR8IS0oWNPsswEAk21nQRMKIsgQTff9A259mF5xPJnCzJc5ZtCHPul5y8GdQCuYRQqwr3tDNgFC-u7yLtQffa9DKXE3pJAoWGd0VE1L-FjomlEENu2cSTTEb6XGz75ZumR6uh2VkKB26K6nKUZX1uX8BpBhLAgyLRdhh_NOM5ltcx2BlIjMyJIarbPeife2gmsavy7yrT4AYgT1zuM897UfaezF1pv6qEpd4ACb81kU8_9o4WaX9bFosFLAYl8h84pgS9Uh_Rd3foxUIump0lCJplDASFT7YuZvo4WrlpxCDKYMfIDtd5jMXAY_Exobvr18PzwiE-Plz9BJiMefKES6TE-eUQGCUGOOijtWCnUPDxWJiNAhJbpCGa9I7a91LCC9F_HepubwS4fQJ9FyWcAmJJtBB1-H5Iantchk5imxgFBq8PZssDn36X0giq4lzU7SHB4XcviHRDJ5c5Bk_DJRn-ylVIWxTeFwlLbDoHd4GPqzCwXTGPo980et3oafLDV-A8fiyD1TOnUINyjEnMmeD2JJUxE7GOvC3PNrXpGlDmWo1JAkUjzL-EcL-XdK75HDz3YdgVihDKjuTF8heNNheqSTo5NMzvlKxkNpGW2YOjXFghPRwRViGWhwtZLd_CCj3UpQhA=w1355-h903-no" alt="Dummy" />
          </div>
        <div class="content">
          <div class="header">Hot!</div>
          <div class="description">We show you the hottest places to shop eco-friendly make up!</div>
        </div>
      </div> 
      </a>
      </div>
      <div className="column">
      <a href="/ux-climate-change-cosmopolitan/article">
      <div class="ui card">
        <div class="image"><img src="https://lh3.googleusercontent.com/YyeXE7Bqzv_CFBPFfQbK-GTFWJJ-sohrlJ_b8DIxEyZeMPCEZx6-ThDR7ZsHK56L46w4jitaU3r6LfsgiOPU-BtiH6PTo6Esdr8UUl4ZHw1OhWxcWZzJiYoLlxl90ie7qJCJWdOWKJIZQQi_9C1laJ1-OLBQjf56yzr3oAUg8yDugqXbkY_Yg4guF4XwelL0NpDV4vuCVPgOIEXx8RZIRoQUfZNCYnX0v1-rz5Yoh8CwiT1F27AokULBUFfWrY3nyhO7WcCB85bNlNEgsci1WG3B5mPuainlOCC_4fhYKtCbv-mD9CST_tY4XZaoCX8BzSKPxiZl0ljprJT4tvXVy7Bb4LBJZTAPqnm2y59sWaRrGWLuhETDw0MdtVokJraqs5wF6F40for-Co5vUOzdV2qjUTFash52O2rcTsxwdWImQcTZuEWz-TKqc4Ozwu5XMKI9c_1yYb2Ep1cA66VNAEgroi9xQiE-XbMTZohDTkd9cFZSySb-YXzQ-teQ5Kl7z6mEByjWN2n8TucR0GxGPngxtXNqktft91HMK9Pn66eFw-5cljEgLTiRlM6KQ4BpQ2YTTDW15ja5AoNtlw3phNpWiHRf5XIWtKUZ0Cj0fwNfftx-1jF-xUvXdTzCqA9edNQyW5GLxnnN6nZ3TN50tCWtfI2EUGGAgJiZTifWcDV-kIIcWuw5JLDlFmBQUb3aENeDrB8akWPYocwYhCUPbxZsCvkPmMe5-Woz8A-n1F_eVbo=w1355-h903-no" alt="Dummy" /></div>
        <div class="content">
          <div class="header">Easier than you think!</div>
          <div class="description">Contribute to a sustainable world!</div>
        </div>
        </div>
        </a>
        </div>
      </div>
      </div> 
      {/* See how to make picture with heading, temporary solution below */}
    {/*}  <div id="bigArticle" className = "ui container">
    <div class="header"> <span id="headerBigArticle">Newsflash</span></div>   
  <div class="image"><img src="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="ui huge centered image" alt="Dummy" /></div>
        </div> */}
      </div>
      );
    }
}
 
export default Articles;