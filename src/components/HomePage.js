import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    state = {  }
    render() { 
        return (   
        <div style={{backgroundColor: "#FEDDD6"}} id="wrapper">
           <div class="ui pink inverted segment" id="question">
            <h1>It's everywhere...of course you've heard of that big thing: CLIMATE CHANGE.</h1>  
             
             <h1>But be honest: how much do you really know about it? </h1> 
             
             <h1>Dive into it with us!</h1> 
          <img src="https://lh3.googleusercontent.com/jeH-6NdvDu5jX6bSGmxY_mbSG4jgGUhhJQ9WSZVaduk13qf2pWqh3jmQvOfdM8WX34IlvipW6cYdPd-VUQMzqF00G4NbukjzTrWO_tcUzyJu5O9Bp3eGoRh3U0KcBI05qLaabKvSaZLy1_ZTQNoxg6DR9iZXegWS2WZdPoE4ff0XTbfPTK8MUqQhgCYj4aafBzFjkuF8V8OyKwkd2mI2gdeLYQmfes_q8C2QjxIrwksYxTpr_OTlklj-nLTHxmyJ7sFlnsFXrCHvIZ1Z9BOwGPVW7g8xdbVF0jrD8f7detJwe5O2RR97tkq3jznVGjgX0WCaVuGauZRsSb_ac-705nN0BDutxLmveZGJ3PSkycA7MgKLJdtrP2MRpH-5N99sFvFuNVMqpJVSGpIyYbxrAaohG5-MEMmmTCgUpWCbVIsqsDdCWNqcla4jiD6mfA36ftuZpXdcIDqxVCQKeRTMt-gX7d9DVl6lRvqEAT8dFTywj5LeRBpQphhv6lQGgngsfkVRGxCHWf3RgCdS6r0-uI7zpDiVlgfrd653F6V54tYZS8Zw-cgsNOOnJ-tfEcYJuwD9Fay2sTIk5YiC51SsZxhzdQH3fa-zsvqamLhg7BeqLv1M7OIoA8zHv6Br6rhzFzK_h4zm_w1fmc9PVvZ0-rsYy0utviN8l0wIORWwuA9NoZDIfmxlhC5YVhXjU4XmOfbF6rdRcvirZhUhRUNDP3BR8Wncqc8c1Qex795H3WMXky5b=s512-no" className="ui tiny centered image" style={{marginTop: "50px"}} alt="downward facing arrow"/>
           </div>

           <div class="ui centered equal width two column grid" style={{marginLeft:"150px", textAlign:"center"}} >
           <div class="middle aligned row" style={{marginTop:"200px"}} > 
              <div className="column" id="leftTopLinkColomn">
              <h3 class="ui header">
                <Link to="/celeb"> <img src="https://lh3.googleusercontent.com/fjciPiDhn0bQHB-_XDW7IdWL2c9vz4M1kHVxwP32ylR18zfXV5ORxQUZ-e6UGkQmnlThqPL0Jt_X2RjZqIDCCCTUBtRochixRRdJfsss__Np_9eEvdQmT2ralm61NKu4zikRL0m0XAExKrxkgiSdUyTCD4syfAqgkPlaI4A7jdBAfZeQj4tr16EP6pC9KnyZixwZLD68qkMZqV1a8gB5_8aoif5x7Uj-Y8SoM2WSu7dQfa74j3Opf2ouQrV5vBBbMpZQhbNiqZrRLg-MCKow5wQqrnIhlfQzTRjHIQp_1FQ51ZUz_1IXcgsLTzCwuf4HDHI6TPTXUoNqvJ74hCZyvV66bvGlqGQxWNIY5hAUPkI2dU5ACGb4q2dmLpeD0UvHcVN4f-azqeKiAE8igMRYzGc0Ob8kbXn4mNwBt3Xke7E90qK7klbHnIEavTHM4z0puZ75W8dUqv4St1VVA9tVTX6MSOQFHoD05_RQc63okTH_lOKnELbsJa3D9HBVRspMgxbmWDFcx_N_MwbB5rVzXhlHE4hEWDkIL8pqJOBPl3JxhdLv3amonH54OGNyhz4F5n5KdpIyvVfp5T-CdcZXDIRQAO7kyrWh2o3VmHvZbfZBXUyizIdpV06qaXhm78OZNQpH1oGwmwn4jZzqMqRYENCwybMMmtM1b2qGXdBIWB279umEiDyOI_Pu2-Imifrj_rgNwXidJo5DqOA7M4ff5fj5TrDIoX2NiUEVprW85hYv-W27=w1062-h903-no" class="ui medium circular image" id="linkPicture" alt="celebrity page link"/></Link>
               
                </h3>
                </div>
             <div className="column"id="rightTopLinkColomn">
             <h3 class="ui header">
               <Link to="/nature"> <img src="https://lh3.googleusercontent.com/t5Kpt-n-tfAMmjkhh1RIh4XXq5Wf3sVzZli38Or7viOObpQhYeTkGbAwBpc2zuNDsJ_yU6Vl9ttWB5j_DoS6DSHk4OTv4mMF5P_ipW7u7fBh1CTe5HRZ8LPwzDuJby3bnsDc2R2g4ZJe-dsjRJWeJZlZCL2WJeYhQhbtfW3ya98hJc1jMQHcx6jaIUJNBtC-Fue6Yb7qc02A_PQt43mnndUQ4dEOVoNbCjTIPd-vkN_H-sFEVPrjtRg2crx2RgjZ-rufaN-BLyMVCaw4dqSt3QkjQiiqd-gX4WNEKTAZ3keWENGEGMqzFdsk4ZKx--Tp-eBytCLPGC8DQ5AmfGMQYfq2d2irTMgs1zx-s_b86gRLi877733HtThPQd2-UWS-zt3Er7KwCA_xizxVh6uRh3MfddhbucW3B4ccrYnPuSdf67lSA2A9Ue5LiOhD44EBOTM46CHbprRpK0zmqM0SWbHAo00xON3CjbZOPKpFySFR6ttLhgPQyNfQSL0CAvh7aVv1oQ2KWzKXD4HupxL-iCuBeh9uyG6mdMVJUbZHFnTLvIJgocF1i1VSMpom9xYAAaqRIW91j67-XrSlJcttOHB5p8WFVWDM6l3UnU8EPFol0LQY9wT56eyb6unwpwQacVqeG-4LZSwrjcujhrGasdZoqnbkiVtZ1p_FXzKJFtw9trrJ-a6QC18eAc-REW-9kqCI6-jrDVEBkSvDyeQ1qlsfJpMIz8Ai7QNX8XEC_M5XadTG=w928-h904-no" className="ui medium circular image" id="linkPicture" alt="nature page link"/></Link>
              
               </h3>
               </div>
             </div>
             <div class="bottom aligned row"> 
             <div className="ui centered grid">
               <div className="row">
             <div className="column" id="rightBottomLinkColomn" style={{textAlign: "center"}}>
             <h3 class="ui header" >
               <Link to="/style"><img src="https://lh3.googleusercontent.com/7AbNwjCuWh06PPjZQrWZsfYE073rF_Nv_5opwYT6WWvH3YYTJQlQC0lELJWLdtl7aAdH66wHpKThfuNwgu0H7B6PBnpWINR_30ICfYCgJ8_0u2RHKtA4xUwh0UBFtTSQ1gimzpjGVwmZwqxMahygb55qG8IzEUX7uEH9NKpdWefOUL_3wF_q0F75h7OusyFhi1tbVrlHW53RLkvGxoOggXgCHUVP2ZPF8NffuRoH9k4yh1b6LJozHofIjRuQay7jkXiIjYBa3mHBxHrP6q5CLdMDc6Umpk16K3KIK9x0bFrS5wK2nZ6U1rMPN33sN_vx-LQ9yGoldFjVX-Kt644zmnqfAdHnRdpaPr12XhpRFzfXvMyd1-BBgOL1z9akkagXJgWVEilwCmTRb0_q_DX-9myfzqTGArt0gKpMwe3JuYeD8JKoOiZCxel2rQJtlcKXzoFxHtnMrtgr2bu6ONVVZPebExq6exnz8PJ-vpFv45eUr1agN15Au-34yhdyAQnC9M5I7HUsEVrkG0nSqY5c2j0Qe-yuu2IZj4vw9DwuwpgLbBLwO3RelBzMwUD48h0Ejkosqg0lXWOWDcvXV2gy7YEwRrOO6drCvdYPbs1FrZl_UnuYRcy8YRzGsKBKUQOhrK2-zn-dn45X8GqtdNwyKS0KdqRrTVj2WeQRWy0jQmKf_7bkYuMiWLYjXveco7SNwPq1fu9eAEP2nmQHCA71jsQ_CoLkC8D-GqnE2UZeK0z6QWh6=w1043-h903-no" className="ui medium circular image" id="linkPicture" alt="style page link"/></Link>
              
               </h3>
               </div>
               </div>
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

export default HomePage;