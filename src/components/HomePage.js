import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    state = {  }
    render() { 
        return (   
        <div style={{backgroundColor: "#FEDDD6"}} id="wrapper">
           <div class="top aligned row">
    <img src="https://lh3.googleusercontent.com/g4ysxYHUBIhjpLVvEP3nShdX7b2D0OwUelOtQu5G88LjfzRJrdIE4LX1hG2MCHA2X9s9FefxP6XgSMrg6AccR4DClAnp4zahOV6uhbrDOhxDrEt629KHG0HvhZqE7eZqXIcSLvBUuBYHaLfU_VC7X2MrC-Igvq_twmwWYhD7ub9xTiKaVtB2l4BDXgCGbk7Xgt9klPPThSlwW5RqhwHxDPt0Jx4RZ7udkSvcIkqxnkzv5s9hprXHCkiJvctS-qrEryJ54wWQT2dq1mC3gG-OSzp4G9ZsUzZDva5tJYRqT0e2xv9ccnzZMWjOiEFllR3bojatjRkMVdIdg5eSOGbDoDCtwjMz6d7NcUpHO_z0PIgOWjqSeD3-yqW8G2ZUrSwaZbXUrnd8VVnJ33TkxtfZRBoF8ZILRpHprht5IS_UcMJg7YucNbx__klo9UoxGIDt1Lc9w6Vscd0TcKxahdbFdit9-BaDcokoqj7YbYSO7FL4KVMO4bOqQELJ1xOlFOgr74-1FwmaTvV_-r1MNCAbZEWE-afC8wG8e6zneuprg8CWD1WCZrqVlt4x5VaDszvF3sRizHz7db3gYW5brjgKcyAisjEuJW4uYPmdPHFXTTrbh_QEwVvhBA4PdCHaojrZ5T5UspIoImBWGybuQ16DhZN69_I2-zn9AnVJApQjd9yX4urawtvQwx4yFEjDb6v61WeHiSMWrxjE6zVqBFsr2OEZ3HmJkI75DU4zaakp5bo9dn3u=w1920-h260-no" className="ui image" width= "100%" alt="climate change banner"/>
  </div>

           <div class="ui centered equal width three column grid" style={{marginTop:"20px"}} >
           <div class="middle aligned row" > 
              <div className="column">
              <h3 class="ui header">
                <Link to="/celeb"> <img src="https://lh3.googleusercontent.com/a92_AmoGNk-hMYg7Kq9_jD15Kp5ssQtaEFHuMkDoYPFi5j3tqccdb0N_8UCC2kmWvjSpnd_DhGofHxqFEtUi5Fj7BiRjKBJdNZGgf48A3hP7rkhXB2OB5mF2lNblijyZT0aAZsyjC6iJd_DsFNUX0ZHL1niRqMJK4egrTacHbf8FMeCIkig29f4QdkvtDHoMFztJkBIYUfzSx5vp3jzCl3_IhIHgXpKWIf4CDsUHBQGqz7sK4ekGIutIj0oQPz3fhWygi5mxsxmQdPJ5FfXMJvHhxEiaYQMRZ3BB9_G4mI6pa_QhqjDbXzZnIwvuY1jWrP4o3xQhWeejDpcOQnnDf2M3GT4KeczKynKzhUFAL_d1Ocaaz3F7HNhXKsO9XIiVNyUacX5nfZ_Rb8XgZhda--iQU_EKeHeabjV4P-lHFDFkxPLnzKRHJLCy7D_vsbrOqeUY6mc-urekzSm6Zf04vFioKinhV37UB6kKQvXMLmLRZzGNhy-KGHexde8NmOn7NBhgze7yrOTzjeN0PTcOZUNYm5OBo43X6QT9WUiEW7VlQ98OsqvhHgo5xc_AEGty6IpRZpUaQ2CTxw76jyzyyzVRbbvC8C8Az_PRhm6U23epQJ7y9P54DMRbA4hSKi8gY8cL9SNtK4AZqkVFdcnIv2qXLA5TDM1WPPB8XHKJ3RZV5mRrGG7YzX-VLmr6aDfWd1t_IIWHN6oRhGsdrosdw6fr8_XTiHrOC5K_jmuB-8IOBss=w305-h259-no" class="ui large image" id="linkPicture" alt="celebrity page link"/></Link>
               
                </h3>
                </div>
             <div className="column">
             <h3 class="ui header">
               <Link to="/nature"> <img src="https://lh3.googleusercontent.com/tsUYLqwi3xhVxCLqS9lAtlWoY5aZXC3Vjmzpy1Ht6PbsDXF2G5YAnaF51jDvpKIUU1813C5SqqtUQniGzSG8M6WJpsyevXTujSoN4brEWjHGJkGoGqNtn_wRdeyUTQoUhGPnxSY9jr_h_py5ltSUsnOifGhtJj1lK8NT79clZCPg3ZGS3InRUDQO6bjIHhMzIMaElgc3_jkcOZsMd4HEwu6_f_87W1BR57si0FxOjC0mjQ8Cv6a-qCO61xfLdSweKdkGZv8R-Xfpu21Z828k43K72iTOMCDjsQY9XDqF_QaH0-oiGTInflRZpXO-CgeYF1S4xEvysKGyPWKwApwNDkilD9YjuUvaGSbdpK2fnLtAkPUsjrunx67iDczrcQUmdlHsMU5E-THFlP8RG5rNyzA0w_SYXYKc5saJPIfD4RiqndHr3ju_esJdcrjOrgPU16A-PWiPHp-uUlKFivClI6NOUmfCs7kcfsH8OrbeZxz6cCr3aKFGk-sGTY382yTp2vcQMs9o7HfbM-PsBhUpmFc4G1devlcmq3X0_00acmCzaVPLbYnYwSsBawDCl8PAgQqyuKMwsbN60t3RuGMpbkXUktBsh5fttBbQ1-PckvFflqQemNt0ti16Dl2yo7j9bfIApCJ8nnPyeK7lF9MdeCOgORpOI9cFXTKOXTVOAbt1-SogYaCf5jDdo8ZbPZW2qCgh8fkz4AgripID4RpdEsJ4eZRzVtnz4x9N4iVVV8lxbmE=w928-h904-no" className="ui large image" id="linkPicture" alt="nature page link"/></Link>
              
               </h3>
               </div>
               <div className="column">
             <h3 class="ui header" >
               <Link to="/style"><img src="https://lh3.googleusercontent.com/uWp2obSuOUphZKjerBYvhuBk3_qNwUmsIdWb5o_WSr2rcVcAifnOYK2O6_0MVh-mCpG-_lYKfUSF1J2dTsDCuq_IEiFlJ1VPcaokZE0uuRPbjHsk7lB0FivY6ZDRwMqYmHbxZSsgUDApIAM87ZHNhzmSMsTmpYZFuljN0btz5bfrixUHoiCtpgG1neiCZ5FpT2OLRHM0J2bSRRNzOeNkwvKIB71k05lwl39lwJ45FLristJBu1iidTDwoyKTn_TMz3M1Etfh7yyZq37cTJ2ZgKHsG1YC2NekQZ5ZCuNGmEj4cqpjQlz4I0fxwEPruYtBQb0feKkOg5F4FxDwNbTGihsGTevPasudsFRMG86nq69fkUuTIHxFvDpCA83wJ6M7khkgOJrw0SidnTRvE8IlXvvXEYreBRIK_Vz52P0P2k_oV9LAWTpwZL9wM82UcTdlKzo2kCA13ryXkX9eCFA45ZXdFMJ84InQdo1bSSenSF2a-gO8C7wxs2v2solmaM1YfjgOhUX0Y92dPoxV2kzwQ3iKCjaS5rApbMbiwmStmfKaMbYTgC4sRc8d0gr2zBaCNXzT8Boiig09o1K9UYWkyTcwpygbcRMrzIqDPj-nQGcdDmb4Q7AXhbonunEfJRCBU6b9t-kB4LhajvjE9Qj6yPk00uFO3dBS0Icwkf8wWdBqWPY575C8L6K6lR7Mekpl9hnxlyIjzljxlbGsFlfjZyUhX_9tNfrTAUvxPDs60hLg_DQ=w1043-h903-no" className="ui large image" id="linkPicture" alt="style page link"/></Link>
              
               </h3>
               </div>
             </div>
           </div>
      </div>
      );
    }
}

export default HomePage;